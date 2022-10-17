import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/";
import store from "./store/";

import "./styles/styles.css";
import "./components/fontawesome.js";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

createApp(App)
	.component("font-awesome-icon", FontAwesomeIcon)
	.use(store)
	.use(router)
	.mount("#app");
