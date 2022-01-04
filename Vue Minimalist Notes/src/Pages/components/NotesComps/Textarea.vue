<template>
  <textarea :cols="cols" :rows="rows" @input="$emit('textarea-input', $event.target.value)"></textarea>
</template>

<script>
export default {
  props: [ 'cols', 'rows', 'otherProps' ],

}
</script>

<style scoped>
textarea{
  padding:5px;
  min-width:270px;
  max-width:270px;
  outline-color: gray;
  color: #555;
}
</style>