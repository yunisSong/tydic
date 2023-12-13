import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import yunis_command from "./command/index";
const app = createApp(App);
app.use(yunis_command);
app.mount("#app");
