import useAuth from "./useAuth.js";

const useRoute = () => {
	const { getAuthUser } = useAuth();

	const protectHomeRoute = (to, from, next) => {
		let isAuthenticated = getAuthUser();
		if (isAuthenticated) next();
		else next("/login");
	};

	const redirectRoute = (to, from, next) => {
		let isAuthenticated = getAuthUser();
		if (isAuthenticated) next("/");
		else next();
	};

	return {
		protectHomeRoute,
		redirectRoute,
	};
};

export default useRoute;
