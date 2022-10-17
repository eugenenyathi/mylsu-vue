import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { ref } from "vue";

//composables
import useAxiosError from "../composables/useAxiosError.js";
import useAuth from "../composables/useAuth.js";

const useLogin = (error) => {
	const store = useStore();
	const router = useRouter();
	const isLoading = ref(false);
	const setAuthUser = useAuth();

	const login = async (studentNumber, password) => {
		try {
			isLoading.value = true;

			const { status, data: user } = await axios.post("/login", {
				studentNumber,
				password,
			});

			if (status === 200) {
				//update cookies
				setAuthUser(user);

				//update global state
				store.dispatch("login", user);

				//redirect to homepage
				router.push({
					name: "Home",
				});

				isLoading.value = false;
			}
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
