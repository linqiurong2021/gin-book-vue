import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// AntDesign
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
// Main css
import "./styles/main.scss";

createApp(App)
  .use(store)
  .use(router)
  .use(Antd)
  .mount("#app");
