<template>
  <label :for="id" class="round flex-center" :class="[theme, gradientBg]" @click="toggleCheck">
    <svg
      class="round flex-center"
      :class="checked" 
      xmlns="http://www.w3.org/2000/svg"
      width="11"
      height="9"
    >
      <path :style="{opacity: checked ? 0 : 1}"
        fill="none"
        stroke="#FFF"
        stroke-width="2"
        d="M1 4.304L3.696 7l6-6"
      />
    </svg>
  </label>
  <input type="checkbox" name="" :id="id" checkInput/>
</template>

<script>
export default {
  emits: ['on-toggle', 'is-checked'],
  props: ["id", 'isChecked', ],
  computed: {
    checked() {
      return this.isChecked ? "" : this.themeMxn;
    },
    checkInput(){
      return  this.isChecked ? 'checked' : '' || this.headerCheck ? 'checked' : '';
    },
    gradientBg(){
      return this.isChecked ? 'gradientBg' : '';
    },
    theme(){
      return this.themeMxn === 'light' ? 'light' : 'dark';
    }
  },
  methods: {
    toggleCheck(){
      this.$emit('on-toggle')
      this.$emit('is-checked', this.isChecked)
    }
  },
};
</script>

<style scoped>
label {
  width: 20px;
  height: 20px;
  margin: 0 20px;
}
label.light{
  background: rgb(218, 216, 216);
}
label.dark{
  background: rgba(218, 216, 216, 0.226);
}
.gradientBg{
  background: linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%)) !important;
}
label:hover{
  cursor: pointer;
  background: linear-gradient(hsl(192, 100%, 67%), hsl(280, 87%, 65%));
}
svg {
  height: 16px;
  width: 16px;
  padding: 4px 0 0 3px ;
}
input{
  display: none;
}
.flex-center {
  display: flex;
  justify-content: center;
  align-items: center;
}
.round {
  border-radius: 50%;
}
/* .invisible {
  opacity: 0;
} */
</style>
