<template>
  <div class="container">
    <div class="row">
      <div class="col-6">
        <div class="buttomm">
          <div class="link">
            <span
              :class="{ 'not-allowed': currentPage === 1 }"
              class="routergray cursor-pointer"
              @click="GetPreviousPage"
              >Previous Page</span
            >
          </div>
          <div class="link">
            <span
              :class="{ 'not-allowed': currentPage === totalPage }"
              class="routerblue cursor-pointer"
              @click="GetNextPage(totalPage)"
              >Next Page</span
            >
          </div>
        </div>
        <div class="results">
          <small>Showing results {{ currentPage }}-{{ totalPage }}</small>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "footerPage",

  props: {
    totalPage: Object,
  },

  setup(props, { emit }) {
    const currentPage = ref(1);

    const GetPreviousPage = function () {
      if (currentPage.value !== 1) {
        currentPage.value -= 1;
        emit("setPage", currentPage.value);
      }
    };

    const GetNextPage = function (total) {
      if (currentPage.value < total) {
        currentPage.value += 1;
        emit("setPage", currentPage.value);
      } else {
        emit("notChange");
      }
    };

    return { currentPage, GetPreviousPage, GetNextPage };
  },
});
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.container {
  width: 100%;
  height: 60px;
  margin-bottom: 100px;
}
.col-6 {
  margin: 0 auto;
  text-align: center;
}
.buttomm {
  width: 63%;
  margin: 0 auto;
  font-family: Roboto, sans-serif;
  font-weight: 700;
  padding: 1.5rem;
  display: flex;
  justify-content: space-between;
}
.link {
  width: 50%;
  height: 30px;
}
.cursor-pointer {
  cursor: pointer;
}
.not-allowed {
  cursor: not-allowed;
}
.link:last-child {
  border-left: 2px solid #858585;
}
.routergray {
  color: #858585;
}
.routerblue {
  color: #318fe7;
}
.results {
  font-family: Roboto, sans-serif;
  color: #ababab;
  font-size: 18px;
}
</style>