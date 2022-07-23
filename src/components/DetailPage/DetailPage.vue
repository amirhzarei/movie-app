<template>
  <NameBox :movie="movie" />
  <DetailBox :movie="movie" :imgs="imgs" :credits="credits" />
</template>

<script>
import NameBox from "./NameBox.vue";
import DetailBox from "./DetailBox.vue";
import axios from "axios";
import { ref } from "vue";
import { useRoute } from "vue-router";

export default {
  name: "DetailPage",
  components: { NameBox, DetailBox },

  setup() {
    const movie = ref({});
    const imgs = ref({});
    const credits = ref({});
    const loading = ref([true]);
    const route = useRoute();

    function getmovieDetailPage() {
      axios
        .get(
          `https://api.themoviedb.org/3/movie/${route.params.id}?api_key=6b58e7e1f6128f348a06feec19e21c15`
        )
        .then(function (response) {
          // handle success
          movie.value = response.data;
          // loading.value = false;
        })
        .catch(function (error) {
          // handle error
          // console.log(error);
        })
        .then(function () {
          // always executed
        });
    }
    getmovieDetailPage();

    function getmovieimgDetailPage() {
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
    getmovieimgDetailPage();

    function getmoviecreditsDetailPage() {
      axios
        .get(
          ` https://api.themoviedb.org/3/movie/${route.params.id}/credits?api_key=6b58e7e1f6128f348a06feec19e21c15&language=en-US`
        )
        .then(function (response) {
          // handle success
          const sortCreditsByPopularity = response.data.cast.sort(
            (a, b) => b.popularity - a.popularity
          );
          credits.value = sortCreditsByPopularity.slice(0, 10);
          // credits.value = response.data.cast;
          // loading.value = false;
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        })
        .then(function () {
          // always executed
        });
    }
    getmoviecreditsDetailPage();

    return { movie, loading, imgs, credits };
  },
};
</script>

<style>
</style>