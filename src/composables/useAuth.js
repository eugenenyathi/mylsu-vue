import Cookies from "js-cookie";

const useAuth = () => {
	const setAuthUser = (user) => {
		user = JSON.stringify(user);
		Cookies.set("mylsu", user);
	};

	const getAuthUser = () => {
		const cookie = Cookies.get("mylsu");
		return cookie ? JSON.parse(cookie) : null;
	};

	const deleteAuthUser = () => {
		Cookies.remove("mylsu");
	};

	return {
		setAuthUser,
		getAuthUser,
	};
};

export default useAuth;
