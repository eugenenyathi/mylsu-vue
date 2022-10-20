import { ref } from "vue";
import axios from "axios";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import useAuth from "../composables/useAuth.js";
import useAxiosError from "../composables/useAxiosError.js";

const useSignup = (error) => {
	const isLoading = ref(false);
	const store = useStore();
	const router = useRouter();
	const { setAuthUser } = useAuth();

	const verifyIdentity = async (studentNumber, nationalId) => {
		try {
			isLoading.value = true;
			await axios.post("/users/", {
				id: 3,
				studentNumber,
				jwt: "1234567",
			});
		} catch (err) {
			useAxiosError(err, error, isLoading);
		}
	};

	const signup = async (password) => {
		try {
			isLoading.value = true;
			const { data: user } = await axios.get("/users/1");
			//update global state
			store.dispatch("login", user);
			//update cookies
			setAuthUser(user);
			//redirect to home
			router.push({ name: "Home" });
		} catch (err) {
			useAxiosError(err, error, isLoading);
		}
	};

	return {
		verifyIdentity,
		signup,
		isLoading,
	};
};

export default useSignup;
