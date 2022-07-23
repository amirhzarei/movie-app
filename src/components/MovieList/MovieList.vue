<template>
  <searchBar @change="dateChange" />
  <div v-if="loading" class="spinner">
    <loading />
  </div>
  <div v-else>
    <cardView :imgs="imgs" :discoverall="discoverall" :genres="genres" />
  </div>
  <footerPage :totalPage="totalPage" @set-page="discovermovie" />
</template>

<script>
import axios from "axios";
import { ref } from "vue";
import cardView from "../HomePage/cardView.vue";
import footerPage from "../HomePage/footerPage.vue";
import searchBar from "../HomePage/searchBar.vue";
import loading from "../loading.vue";

export default {
  name: "MovieList",
  components: { cardView, loading, footerPage, searchBar },

  setup() {
    const discoverall = ref({});
    const totalPage = ref({});
    const imgs = ref({});
    const loading = ref([true]);
    const genres = ref({});

    discovermovie();

    function discovermovie(currentPage) {
      axios
        .get(
          `https://api.themoviedb.org/3/discover/movie?api_key=6b58e7e1f6128f348a06feec19e21c15&page=${currentPage}`
        )
        .then(function (response) {
          // handle success
          discoverall.value = response.data.results;
          totalPage.value = response.data.total_pages;

          loading.value = false;
          console.log(currentPage);

          // console.log(options);

          // discoverall.value.map((item) => {
          //   item.genres = item.genre_ids.map((genreId) => {
          //     return genres.value.find((item) => item.id === genreId);
          //   });
          //   debugger;
          //   return item;
          // });
        })
        .catch(function (error) {
          // handle error
        })
        .then(function () {
          // always executed
        });
    }
    discovermovie();

    function getmovieimg() {
      axios
        .get(
          `https://api.themoviedb.org/3/configuration?api_key=6b58e7e1f6128f348a06feec19e21c15`
        )
        .then(function (response) {
          // handle success
          imgs.value = response.data.images;
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(function () {
          // always executed
        });
    }
    getmovieimg();

    function getmoviegenre() {
      axios
        .get(
          ` https://api.themoviedb.org/3/genre/movie/list?api_key=6b58e7e1f6128f348a06feec19e21c15`
        )
        .then(function (response) {
          // handle success
          genres.value = response.data.genres;
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(function () {
          // always executed
        });
    }
    getmoviegenre();

    const dateChange = (data) => {
      let options;

      if (data) {
        const startDate = data[0];
        const endDate = data[1];

        options = [
          {
            property: "primary_release_date.gte",
            value: startDate,
          },
          {
            property: "primary_release_date.lte",
            value: endDate,
          },
        ];
        // discovermovie(options);
      }
    };

    return {
      discovermovie,
      dateChange,
      discoverall,
      totalPage,
      loading,
      imgs,
      genres,
    };
  },
};
</script>

<style scoped>
.spinner {
  width: 100%;
  text-align: center;
}
</style>