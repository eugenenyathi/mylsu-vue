import { ref } from "vue";

const useAxiosError = (err, error, isLoading) => {
	console.log(err);

	const {
		response: { data },
	} = err;

	// error.axiosError = data.error || data.err;

	if (error.axios) {
		error.axios = err.response.statusText;
	} else {
		error.msg = err.response.statusText;
	}

	isLoading.value = false;
};

export default useAxiosError;
