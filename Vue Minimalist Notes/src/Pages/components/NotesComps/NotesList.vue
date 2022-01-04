<template>
  <ul>
    <Form />
    <Note
      v-for="note in notes"
      :key="note.id"
      :desc="note.desc"
      :date="note.date"
      :id="note.id"
      :time="note.time"
    />
  </ul>
</template>

<script>
import Form from "./Form.vue";
import Note from "./Note.vue";
export default {

  components: { Note, Form },
  computed:{
    notes(){
      return this.$store.getters.notes
    }
  }
};
</script>

<style scoped>
ul {
  height: 100%;
  width: fit-content;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}
</style>
