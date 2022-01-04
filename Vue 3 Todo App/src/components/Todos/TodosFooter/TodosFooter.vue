<template>
  <div class="liHeight flex-a-center flex-spc-between" :class="themeMxn">
    <span id="items">{{ filteredTodosLength }} items left</span>
    <button @click="clearCompleted" :class="themeMxn">Clear Completed</button>
  </div>
</template>

<script>
export default {
  computed: {
    filteredTodosLength() {
      return this.$store.getters.filteredTodos.length;
    },
  },
  methods: {
    clearCompleted() {
      console.log("Clear Compoeted");
      this.$store.commit("clearCompleted");
    },
  },
};
</script>

<style scoped>
div {
  width: 100%;
  border-radius: 0 0 5px 5px;
}
div span,
div button {
  margin: 0 20px;
}
</style>
