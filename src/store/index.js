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
	},

	actions: {
		login(context, payload) {
			context.commit("setUser", payload);
		},
	},
});

export default store;
