<template>
  <div class="wrapper" :class="themeMxn === 'dark' ? 'darker' : 'pale-light'">
    <Header />
    <TodosContainer class="no-select"/>
    <TodosFilter class="no-select"/>
    <footer :class="[themeMxn, themeMxn === 'dark' ? 'darker' : 'pale-light']">
      <!-- <p>Drag and drop to reorder list</p> Feature Under contruction -->
    </footer>
  </div>
</template>

<script>
import Header from "./components/Header/Header.vue";
import TodosContainer from "./components/Todos/TodosContainer.vue";
import TodosFilter from './components/Todos/TodosFilter.vue';

export default {
  components: { Header, TodosContainer, TodosFilter },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;700&display=swap");
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: "Josefin Sans", sans-serif;
}
/* body {
  height: 100vh;
} */
p{text-align: center}
.wrapper {
  height: 100vh;
  max-height: auto;
}
.width {
  max-width: 600px;
  margin: auto 20px;
}
.liHeight {
  height: 50px;
}
.flex-a-center {
  display: flex;
  align-items: center;
}
.flex-spc-between{
  justify-content: space-between;
}
.light {
  background-color: white;
  color: hsl(236, 6%, 47%);
}
.pale-light{
  background-color:hsl(0, 0%, 98%);
}
.dark {
  /* background-color: hsl(235, 24%, 19%);  body */
  background-color: hsl(235, 24%, 19%);
  color: hsl(234, 39%, 85%);
}
.darker{
  background-color:hsl(235, 21%, 11%);
}
@media (min-width: 650px){
  .width{
    margin:auto;
  }
}

button:hover{
  cursor: pointer;
  opacity: 1;
}
button.light:hover {
  color: rgb(39, 39, 39);
}
button.dark:hover {
  /* background-color: hsl(235, 24%, 19%);  body */
  color: hsl(0, 0%, 100%);

}
.no-select{
   user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
}
</style>
