import { ref } from "vue";

const useError = (err, error, isLoading) => {
	console.log(err);

	const {
		response: { data },
	} = err;

	error.value = data.error || data.err;
	isLoading.value = false;
};

export default useError;
