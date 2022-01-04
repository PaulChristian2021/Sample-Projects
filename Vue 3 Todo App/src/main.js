import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";

import Button from "./components/Button.vue";
import Checkbox from "./components/Checkbox.vue";

const app = createApp(App);
app.component("Button", Button);
app.component("Checkbox", Checkbox);

app.use(store);

app.mixin({
  computed: {
    themeMxn(){
      return this.$store.getters.theme;
    }
  }
})

app.mount("#app");
