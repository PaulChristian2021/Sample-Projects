<template>
  <div class="filters width liHeight" :class="themeMxn">
    <button @click="filterTodos($event, 'all')" :class="themeMxn">All</button>
    <button @click="filterTodos($event, 'active')" :class="themeMxn">Active</button>
    <button @click="filterTodos($event, 'completed')" :class="themeMxn">Completed</button>
  </div>
</template>

<script>
export default {
  methods: {
    filterTodos(e, filterVal){
      this.$store.commit('changeFilter', filterVal)
      this.$el.querySelectorAll('button').forEach(element => {
        element.classList.remove('blue');
      });
      e.target.classList.add('blue');
    },
  }
};
</script>

<style scoped>
div {
  position: relative;
  top: -30px;
  display: flex;
  justify-content: center;
  box-shadow: 0 5px 20px 5px rgba(34, 34, 34, 0.048);
  border-radius: 5px;
}
button {
  margin: 0 10px;
  font-weight: 600;
}
button.light{
  color:hsla(236, 6%, 47%, 0.842)
}
button.dark{
  color: hsl(234, 39%, 85%);
}
button.blue{
  color: hsl(220, 98%, 60%) !important;
}
@media (min-width: 650px) {
  div{
    top: -100px;
    background:none;
    width: 30%;
    box-shadow: none;
  }
}
</style>
