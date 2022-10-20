import { ref } from "vue";

const useAxiosError = (err, error, isLoading) => {
	console.log(err);

	const {
		response: { data },
	} = err;

	// error.axiosError = data.error || data.err;
	error.axios = err.response.statusText;
	isLoading.value = false;
};

export default useAxiosError;
