<template>
  <button :type="type" :text='text' @click="$emit('button-clicked')">{{ text }}</button>
</template>

<script>
export default {
  props: [ 'type', 'text',  ],
}
</script>

<style scoped>
button:hover{
  cursor: pointer;
}
button:active{
  transform: scale(.99);
}
</style>