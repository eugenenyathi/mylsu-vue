import { createStore } from "vuex";

const store = createStore({
	state() {
		return {
			user: null,
		};
	},

	getters: {
		getUser(state) {
			return state.user;
		},
	},

	mutations: {
		login(state, payload) {
			state.user = payload;
		},
		logout(state, payload) {
			state.user = null;
		},
	},

	actions: {
		login(context, payload) {
			context.commit("login", payload);
		},
		logout(context) {
			context.commit("logout");
		},
	},
});

export default store;
