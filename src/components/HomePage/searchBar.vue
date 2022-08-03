<template>
  <div class="container">
    <div class="calender">
      <div>
        <h5>Search by release date:</h5>
        <Datepicker
          v-model="date"
          range
          multiCalendars
          textInput
          utc
          @update:modelValue="setDate"
          uid="range-date-picker"
          style="width: 51%"
        />
      </div>
      <button class="btn" @click="search">Search</button>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { defineComponent } from "vue";

export default defineComponent({
  setup(props, { emit }) {
    const date = ref();

    const setDate = (modelData) => {
      date.value = modelData;
    };

    // const textInputOptions = ref({
    //   format: "MM.dd.yyyy",
    // });

    const search = () => {
      emit("change", date.value);
      // emit("change", date.value[1].toJSON());
    };

    return { setDate, search, date };
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
  height: auto;
  text-align: center;
  margin-bottom: 70px;
}
.calender {
  width: 90%;
  margin: 0 auto;
  padding: 1.5rem;
  background: #e2e2e2;
  border: none;
  border-radius: 8px;
  display: flex;
  justify-content: space-around;
}
.calender > div {
  width: 60%;
  border: none;
  border-radius: 5px;
  display: flex;
  align-items: center;
}
.calender > div > h5 {
  margin-right: 2%;
  font-family: Roboto, sans-serif;
  font-size: 16px;
}
.calender > button {
  background-color: #549df2;
  color: white;
  padding: 0.6rem 0.8rem 0.6rem 0.8rem;
  border: none;
  border-radius: 30px;
  text-align: center;
  transition: all 0.2s linear;
  font-family: Roboto, sans-serif;
  box-shadow: none;
}
.calender > button:hover {
  background: white;
  color: #549df2;
}
</style>