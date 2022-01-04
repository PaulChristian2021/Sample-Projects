<template>
  <div class="width">
    <ul>
      <TodoLi v-for="todo in filteredTodos" :key="todo.id" :todo='todo' :text="todo.text" :completed='todo.completed' />
    </ul>
    <TodosFooter />
  </div>
</template>

<script>
import TodoLi from "./TodoLi.vue";
import TodosFooter from './TodosFooter/TodosFooter.vue';
export default {
  components: {
    TodoLi, TodosFooter,
  },
  data() {
    return {
      
    };
  },
  computed:{
    filteredTodos(){
      return this.$store.getters.filteredTodos;
    }
  }
};
</script>

<style scoped>
div.width{
  position:relative;
  top: -50px;
  box-shadow: 0 5px 20px 5px rgba(34, 34, 34, 0.123);
}
/* ul{} */


</style>