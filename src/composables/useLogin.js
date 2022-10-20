import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { ref } from "vue";
import axios from "axios";

//composables
import useAxiosError from "../composables/useAxiosError.js";
import useAuth from "../composables/useAuth.js";

const useLogin = (error) => {
	const store = useStore();
	const router = useRouter();
	const isLoading = ref(false);
	const { setAuthUser } = useAuth();

	const login = async (studentNumber, password) => {
		try {
			isLoading.value = true;

			const { data: user } = await axios.get("/users/1", {
				studentNumber,
				password,
			});

			//update cookies
			setAuthUser(user);

			//update global state
			store.dispatch("login", user);

			isLoading.value = false;

			//redirect to homepage
			router.push({
				name: "Home",
			});
		} catch (err) {
			useAxiosError(err, error, isLoading);
		}
	};

	return {
		error,
		isLoading,
		login,
	};
};

export default useLogin;
