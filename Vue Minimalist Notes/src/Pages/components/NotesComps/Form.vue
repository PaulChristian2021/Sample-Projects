<template>
  <BaseCard>
    <form @click.prevent="">
      <Textarea
        cols="20"
        rows="4"
        placeholder="Enter a new note...
        

        Ctrl + Enter to add"
        @textarea-input="changeText"
        ref="textarea"
        @keydown.ctrl.enter="addNoteBtnClick"
      />
      <BaseButton
        type="submit"
        text="Add Note"
        class="add-note"
        @button-clicked="addNoteBtnClick"
      />
    </form>
  </BaseCard>
</template>

<script>
import Textarea from "./Textarea.vue";
export default {
  components: { Textarea },
  data() {
    return {
      textarea: "",
    };
  },
  methods: {
    changeText(val) {
      this.textarea = val;
    },
    addNoteBtnClick() {
      if (!this.textarea) return;
      else {
        const note = {
          desc: this.textarea,
          id: Math.random(),
          date: Date.now(),
          time: Date.now(),
        };
        this.$store.commit("addNote", note);
        this.$refs.textarea.$el.value = "";
        this.$refs.textarea.$el.focus();
        console.log(this.$refs.textarea.$el);
      }
    },
  },
};
</script>

<style scoped>
.card {
  margin: 20px 0;
}
form {
  padding: 5px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}
.add-note {
  background-color: #555;
  color: white;
  padding: 10px;
  margin-top: 3px;
  border: 2px solid #444;
  transition: all 0.1s;
}

.add-note:hover {
  background-color: whitesmoke;
  color: #444;
}
</style>
