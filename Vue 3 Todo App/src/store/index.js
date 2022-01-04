import { createStore } from 'vuex'

export default createStore({
  state: {
    todos: [
      {text: 'This is a sample todo.', completed: true, id: Math.random()},
      {text: 'Check out the features of this app.', completed: false, id: Math.random()},
      {text: 'Try toggling the theme.', completed: false, id: Math.random()},
      {text: 'The drag and drop functionality is under maintenance.', completed: true, id: Math.random()},
      {text: 'I used Vue 3 along with Vuex.', completed: false, id: Math.random()},
      {text: 'I have done this same project before! Except in vanilla Javascript!', completed: false, id: Math.random()},
    ],
    theme: 'light',
    filter: 'all'
  },
  getters:{
    todos(state){
      console.log(state.todos)
      return state.todos;
    },
    theme(state){
      return state.theme;
    },
    filteredTodos(state){
      if(state.filter === 'completed'){
        return state.todos.filter(todo => {
          return todo.completed === true;
        });
      }else if(state.filter === 'active'){
        return state.todos.filter(todo => {
          return todo.completed === false;
        });
      }else return state.todos;
    }
  },
  mutations: {
    changeTheme(state){
      state.theme === 'dark' ? state.theme = 'light' : state.theme = 'dark';
    },
    toggleCompleted(state, todo){
      const modifiedTodo = {...todo, completed: !todo.completed};
      let newTodos = state.todos;
      const todoIndex = newTodos.findIndex(t => {
        return todo.id === t.id;
      })
      newTodos = newTodos.splice(todoIndex, 1, modifiedTodo);
    },
    deleteTodo(state, todo){
      let newTodos = state.todos;
      const todoIndex = newTodos.findIndex(t => {
        return todo.id === t.id;
      })
      newTodos = newTodos.splice(todoIndex, 1);
    },
    clearCompleted(state){
      state.todos = state.todos.filter( todo =>{
        return todo.completed === false;
      })
    },
    changeFilter(state, filterVal){
      state.filter = filterVal;
    },
    addTodo(state, todo){
      state.todos.push(todo);
    },
    reorderList(state, dropData){
      const dragged = dropData.draggedId;
      const draggedover = dropData.draggedoverId;
      const draggedIndex = state.todos.findIndex(t => {
        return t.id === dragged;
      })
      const draggedoverIndex = state.todos.findIndex(t => {
        return t.id === draggedover;
      })
      console.log(dragged, draggedover)
      console.log(draggedIndex, draggedoverIndex)
    }
  },
  actions: {
  },
  modules: {
  }
})
