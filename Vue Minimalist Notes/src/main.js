import { createApp } from "vue";
import { createStore } from "vuex";
import App from "./App.vue";

import BaseButton from "./BaseComponents/BaseButton.vue";
import BaseCard from "./BaseComponents/BaseCard.vue";

const app = createApp(App);

const store = createStore({
  state() {
    return {
      notes: [
        {
          id: Math.random(),
          desc: "Sample noteSample noteSample noteSample noteSample noteSample note",
          date: Date.now(),
          time: Date.now(),
        },
        {
          id: Math.random(),
          desc: "Sample note",
          date: Date.now(),
          time: Date.now(),
        },
        {
          id: Math.random(),
          desc: "a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a ",
          date: Date.now(),
          time: Date.now(),
        },
      ],
    };
  },
  getters: {
    notes(state){
      return state.notes
    }
  },
  mutations: {
    addNote(state, note){
      state.notes.push(note);
    },
    deleteNote(state, noteId){
      const newNotes = state.notes.filter(note => {
        return note.id !== noteId;
      })
      state.notes = newNotes;
    }
  }
});

app.component("BaseButton", BaseButton);
app.component("BaseCard", BaseCard);
app.use(store);
app.mount("#app");
