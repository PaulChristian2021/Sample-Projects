<template>
  <li
  :id='todo.id'
    class="liHeight flex-a-center"
    :class="themeMxn"
    draggable="true"
    @drag.prevent="drag"
    @dragover.prevent="dragover"
    @drop="dropped"
  >
    <span class="flex-a-center">
      <Checkbox :isChecked="todo.completed" @on-toggle="toggleCompleted" />
      <p @click="toggleCompleted" :class="strike">{{ text }}</p>
    </span>
    <Button @click="deleteTodo">
      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18">
        <path
          fill="#494C6B"
          fill-rule="evenodd"
          d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
        />
      </svg>
    </Button>
  </li>
</template>

<script>
import Checkbox from "../Checkbox.vue";
export default {
  data() {
    return {
      dragged: null,
      draggedover: null,
      droppedon: null,
    };
  },
  props: ["text", "completed", "todo"],
  components: { Checkbox },
  methods: {
    toggleCompleted() {
      this.$store.commit("toggleCompleted", this.todo);
    },
    deleteTodo() {
      this.$store.commit("deleteTodo", this.todo);
    },
    drag() {
      this.dragged = this.todo.id;
      console.log(this.dragged);
    },
    dragover(e) {
      if (
        e.target.tagName == "P" ||
        e.target.tagName == "LABEL" ||
        e.target.tagName == "SVG"
      ) {
        this.draggedover = e.target.parentNode.parentNode.id
      } else if (e.target.tagName == "BUTTON" || e.target.tagName == "SPAN") {
        this.draggedover = e.target.parentNode.id
      } else if (e.target.tagName == "PATH") {
        this.draggedover = e.target.parentNode.parentNode.parentNode.id
      } else {
        this.draggedover = e.target.id
      }
      // console.log(this.draggedover);
    },
    dropped() {
      // if (
      //   e.target.tagName == "P" ||
      //   e.target.tagName == "LABEL" ||
      //   e.target.tagName == "SVG"
      // ) {
      //   this.droppedon = e.target.parentNode.parentNode.id;
      // } else if (e.target.tagName == "BUTTON" || e.target.tagName == "SPAN") {
      //   this.droppedon = e.target.parentNode.id;
      // } else if (e.target.tagName == "PATH") {
      //   this.droppedon = e.target.parentNode.parentNode.parentNode.id;
      // }
      console.log(this.dragged)
      console.log( this.draggedover);
      const dropData = {
        draggedId : this.dragged, draggedoverId: +this.draggedover
      }
      console.log(dropData)
      this.$store.commit('reorderList', dropData)
    },
  },
  computed: {
    strike() {
      return this.completed ? "strikethru" : "";
    },
  },
};
</script>

<style scoped>
li {
  list-style: none;
  justify-content: space-between;
  overflow: auto;
}
li:nth-of-type(1) {
  border-radius: 5px 5px 0 0;
}
li.light {
  border-bottom: 1px solid rgba(34, 34, 34, 0.123);
}
li.dark {
  border-bottom: 1px solid hsla(240, 13%, 86%, 0.281);
}
li:hover button {
  opacity: 1;
}
.strikethru {
  text-decoration: line-through;
  opacity: 0.6;
}
li p:hover {
  cursor: pointer;
}
button {
  margin-right: 15px;
  opacity: 0;
}
</style>
