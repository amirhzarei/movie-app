<template>
  <div class="container">
    <div class="my-card">
      <div
        class="card"
        v-for="(item, index) in discoverall"
        :key="index"
        v-on:click="link(item.id)"
      >
        <div class="img">
          <img :src="imgs.base_url + 'original' + item.poster_path" alt="" />
        </div>
        <div class="content">
          <div class="truncate">
            <ul>
              <li class="title">{{ item.title }}</li>
            </ul>
          </div>
          <div>
            <ul>
              <li class="release-date mb-2">
                <img src="../../img/Calendar.svg" alt="" />
                {{ item.release_date }}
              </li>
              <div class="square">
                <u>
                  <li
                    class="genre"
                    v-for="(genre, index) in item.genres"
                    :key="index"
                  >
                    {{ genre.name }}
                  </li>
                </u>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";

export default {
  name: "cardView",

  props: {
    movie: Object,
    imgs: Object,
    discoverall: Object,
    genres: Object,
  },

  setup() {
    const router = useRouter();

    function link(movieId) {
      router.push(`/DetailPage/${movieId}`);
    }

    return { link };
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.container {
  width: 100%;
  height: auto;
}
.my-card {
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-grow: 4;
  flex-wrap: wrap;
  justify-content: space-between;
}
.card {
  width: 23%;
  height: 191px;
  border-radius: 6px;
  background: #f1f1f1;
  padding: 0.2rem;
  display: flex;
  flex-direction: row;
  margin: 20px 0;
  cursor: pointer;
}
.img {
  width: 47%;
  height: auto;
  background: #f1f1f1;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
}
.img > img {
  width: 100%;
  height: 100%;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
}
.content {
  width: 53%;
  height: auto;
  background: #f1f1f1;
  padding: 0.7rem 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.content > div > ul {
  list-style: none;
  margin-left: 10px;
}
.content > div:first-child {
  font-family: Roboto, sans-serif;
  font-size: 1rem;
  font-weight: bold;
}
.content > .truncate > ul > li {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  width: 100%;
}
.content > div:last-child {
  font-family: Roboto, sans-serif;
  font-size: 13px;
  opacity: 0.8;
}
.release-date {
  font-size: 11px;
}
.genre {
  display: inline-block;
  font-size: 11px;
}
.genre::before {
  content: "·";
  font-size: 40px;
  vertical-align: middle;
  line-height: 20px;
}
</style>