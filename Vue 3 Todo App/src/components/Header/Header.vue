<template>
  <header :class="headerBackground">
    <div class="width">
      <div class="title flex-a-center flex-spc-between">
        <h1 class="no-select">TODO</h1>
        <Button v-if="themeMxn === 'light'" @click="toggleTheme">
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26">
            <path
              fill="#FFF"
              fill-rule="evenodd"
              d="M13 21a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-5.657-2.343a1 1 0 010 1.414l-2.121 2.121a1 1 0 01-1.414-1.414l2.12-2.121a1 1 0 011.415 0zm12.728 0l2.121 2.121a1 1 0 01-1.414 1.414l-2.121-2.12a1 1 0 011.414-1.415zM13 8a5 5 0 110 10 5 5 0 010-10zm12 4a1 1 0 110 2h-3a1 1 0 110-2h3zM4 12a1 1 0 110 2H1a1 1 0 110-2h3zm18.192-8.192a1 1 0 010 1.414l-2.12 2.121a1 1 0 01-1.415-1.414l2.121-2.121a1 1 0 011.414 0zm-16.97 0l2.121 2.12A1 1 0 015.93 7.344L3.808 5.222a1 1 0 011.414-1.414zM13 0a1 1 0 011 1v3a1 1 0 11-2 0V1a1 1 0 011-1z"
            />
          </svg>
        </Button>
        <Button v-else @click="toggleTheme">
          <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26">
            <path
              fill="#FFF"
              fill-rule="evenodd"
              d="M13 0c.81 0 1.603.074 2.373.216C10.593 1.199 7 5.43 7 10.5 7 16.299 11.701 21 17.5 21c2.996 0 5.7-1.255 7.613-3.268C23.22 22.572 18.51 26 13 26 5.82 26 0 20.18 0 13S5.82 0 13 0z"
            />
          </svg>
        </Button>
      </div>
      <form @submit.prevent='formSubmit' class="flex-a-center liHeight" :class="themeMxn">
        <Checkbox id="formCheckbox" :isChecked="completed"  @is-checked='isChecked'/>
        <input :class="themeMxn" type="text" v-model='todoText' placeholder="Create a new todo..." />
      </form>
    </div>
  </header>
</template>

<script>
export default {
  data(){
    return{
      todoText: '',
      completed: false,
    }
  },
  computed: {
    headerBackground() {
      return this.themeMxn === "dark" ? "header-bg-dark" : "header-bg-light";
    },
  },
  methods: {
    toggleTheme() {
      this.$store.commit("changeTheme");
    },
    formSubmit(){
      if(this.todoText.length < 1) return;
      const addedTodo = {
        completed: this.completed,
        text: this.todoText,
        id: Math.random()
      };
      this.$store.commit('addTodo', addedTodo);
      this.todoText = '';
      this.completed = false;
    },
    isChecked(payload){
      this.completed = !payload;  
    }
  },
};
</script>

<style scoped>
header {
  height: 210px;
  padding-top: 40px;
  background-size: cover;
  /* background-position: center center; */
}
.title {
  margin-bottom: 20px;
}
.header-bg-light {
  background-image: url("../../assets/bg-mobile-light.jpg");
}
.header-bg-dark {
  background-image: url("../../assets/bg-mobile-dark.jpg");
}
h1 {
  color: white;
  letter-spacing: 10px;
}
form {
  border-radius: 5px;
}
form input {
  height: 100%;
  width: 85%;
  outline: none;
  border: none;
  background: none;
  font-size: 16px;
}
@media (min-width: 650px) {
  .header-bg-light {
    background-image: url("../../assets/bg-desktop-light.jpg");
  }
  .header-bg-dark {
    background-image: url("../../assets/bg-desktop-dark.jpg");
  }
}
</style>
