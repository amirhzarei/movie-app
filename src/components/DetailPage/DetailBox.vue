<template>
  <div class="container">
    <div class="row">
      <div class="detail">
        <div class="imgBox">
          <!-- <img src="../MovieList/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg" alt="cover" /> -->
          <img
            class="object-cover object-center w-full h-full"
            :src="imgs.base_url + 'original' + movie.backdrop_path"
            :alt="movie.title + ' ' + 'poster'"
          />
        </div>
        <div class="detailBox">
          <ul>
            <li>
              Budget
              <span> {{ formatter.format(movie.budget) }} </span>
            </li>
            <li>
              Revenue <span>{{ formatter.format(movie.revenue) }}</span>
            </li>
            <li>
              Release Date <span>{{ movie.release_date }}</span>
            </li>
            <li>
              Runtime <span>{{ MovieRunTime(movie.runtime) }}</span>
            </li>
            <li>
              Score <span>{{ movie.vote_average }}</span>
            </li>
            <li>
              <span class="genres">Genres</span>
              <div>
                <span v-for="(genree, index) in movie.genres" :key="index">{{
                  index === movie.genres.length - 1
                    ? genree.name
                    : `${genree.name}, `
                }}</span>
              </div>
            </li>
            <li>
              IMDB Link
              <span
                ><a :href="'https://www.imdb.com/title/' + movie.imdb_id"
                  >Link</a
                ></span
              >
            </li>
            <li>
              Homepage Link <span><a :href="movie.homepage">Link</a></span>
            </li>
          </ul>
        </div>
      </div>
      <div class="overview">
        <p>
          {{ movie.overview }}
        </p>
      </div>
      <div class="credit">
        <h5>Credits:</h5>
        <p v-for="(items, index) in credits" :key="index">
          {{ index === 9 ? items?.name : `${items.name}, ` }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    movie: Object,
    imgs: Object,
    credits: Object,
  },

  // methods: {
  //   sortCreditsByPopularity: function (arr) {
  //     const set = new Set(arr);
  //     // Set slice() to avoid to generate an infinite loop!
  //     return Array.from(set)
  //       .slice()
  //       .sort(function (a, b) {
  //         return b.popularity - a.popularity;
  //       });
  //   },
  // },

  setup() {
    var formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      maximumSignificantDigits: 10,
    });

    function MovieRunTime(minu) {
      let hours = minu / 60;
      let newhours = Math.floor(hours);
      let minutes = (hours - newhours) * 60;
      let newminutes = Math.round(minutes);
      return `${newhours}h ${newminutes}m`;
    }

    return { formatter, MovieRunTime };

    // function sortCreditsByPopularity(input) {
    //   return Array.from(input)
    //     .splice(0, 10)
    //     .sort(function (a, b) {
    //       return b.popularity - a.popularity;
    //     });
    // }

    // function sortCreditsByPopularity(a, b) {
    //   if (b.popularity < a.popularity) {
    //     return -1;
    //   }
    //   if (b.popularity > a.popularity) {
    //     return 1;
    //   }
    //   return 0;
    // }

    // function sortCreditsByPopularity(input) {
    //   const sortedObjs = _.sortBy(input, "popularity");
    //   return { sortedObjs };
    // }
  },
};
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.container {
  width: 100%;
  height: auto;
}
.row {
  width: 92%;
  height: auto;
  margin: 0 auto;
}
.detail {
  width: 100%;
  height: auto;
  display: flex;
  margin-bottom: 50px;
  justify-content: space-between;
}
.detail > .imgBox {
  width: 35%;
  height: 500px;
  border: none;
  border-radius: 10px;
}
.detail > .imgBox > img {
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 10px;
  object-fit: cover;
}
.detail > .detailBox {
  width: 57%;
  height: auto;
  padding-top: 20px;
  font-family: Roboto, sans-serif;
  font-weight: bold;
}
.detail > .detailBox li {
  width: 100%;
  height: auto;
  list-style: none;
  display: flex;
  justify-content: space-between;
  margin-bottom: 15px;
}
.detail > .detailBox li .genres {
  font-weight: bold;
}
.detail > .detailBox li span {
  font-weight: normal;
}
.overview {
  width: 100%;
  height: auto;
  margin-bottom: 60px;
  font-family: Roboto, sans-serif;
}
.credit {
  width: 100%;
  height: auto;
  margin-bottom: 70px;
  font-family: Roboto, sans-serif;
}
.credit > h5 {
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 14px;
  font-family: Roboto, sans-serif;
}
.credit > p {
  font-size: 14px;
  display: inline;
  font-family: Roboto, sans-serif;
}
</style>