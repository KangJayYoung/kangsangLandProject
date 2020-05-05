<template>
  <div class="hello">
    <main-vedio />
  </div>
</template>

<script>
import MainVedio from "./MainVedio.vue";
export default {
  name: "Index",
  components: {
    "main-vedio": MainVedio
  },
  data() {
    return {};
  }
};
</script>

<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
