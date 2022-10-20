import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Signup from "../views/Signup.vue";
import ResetPassword from "../views/ResetPassword.vue";

//composables
import useRoute from "../composables/useRoute.js";

const { redirectRoute, protectHomeRoute } = useRoute();

const routes = [
	{
		path: "/",
		component: Home,
		name: "Home",
		beforeEnter: protectHomeRoute,
	},
	{
		path: "/login",
		component: Login,
		name: "Login",
		beforeEnter: redirectRoute,
	},
	{
		path: "/signup",
		component: Signup,
		name: "Signup",
		beforeEnter: redirectRoute,
	},
	{
		path: "/reset-password",
		component: ResetPassword,
		name: "ResetPassword",
		beforeEnter: redirectRoute,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
