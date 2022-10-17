import useAuth from "./useAuth.js";

const useRoute = () => {
	const { getAuthUser } = useAuth();

	const protectHomeRoute = (to, from, next) => {
		const isAuthenticated = getAuthUser();

		if (isAuthenticated) next();
		else next("/login");
	};

	return {
		protectHomeRoute,
	};
};

export default useRoute;
