<template>
  <div class="container">
    <div class="nameBox">
      <!-- <button class="btn">Back</button> -->
      <router-link class="btn" :to="{ name: 'HomePage' }">
        <img src="../../img/Vector.svg" alt="Vector" />
        Back</router-link
      >
      <div>
        <h4>{{ movie.title }}</h4>
        <small>{{ movie.tagline }}</small>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    movie: Object,
    imgs: Object,
    genre: Object,
    discoverall: Object,
  },
};
</script>

<style scoped>
.container {
  width: 100%;
  height: auto;
  text-align: center;
  margin-bottom: 70px;
}
.nameBox {
  width: 90%;
  margin: 0 auto;
  padding: 1.5rem;
  background: #e2e2e2;
  border: none;
  border-radius: 8px;
  display: flex;
  justify-content: left;
  align-items: center;
}
.nameBox > div {
  margin-left: 5%;
  text-align: justify;
}
.nameBox > div > h4 {
  font-size: 18px;
  font-family: Roboto, sans-serif;
  font-weight: bolder;
}
.nameBox > div > small {
  font-weight: normal;
  font-family: Roboto, sans-serif;
}
.nameBox > .btn {
  width: 8%;
  height: 35px;
  background-color: #549df2;
  color: white;
  border: none;
  border-radius: 30px;
  text-align: center;
  transition: all 0.2s linear;
  font-family: Roboto, sans-serif;
  box-shadow: none;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
/* .calender > .btn:hover {
  background: white;
  color: #549df2;
} */
</style>