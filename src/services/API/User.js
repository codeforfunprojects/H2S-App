import authAxios from "./AuthAxios";
import auth from './firebase';

const login = async (login, code) = (email, password) => {
	const authResponse = await auth.signInWithEmailAndPassword(email, password);
	if (authResponse) {
		// TODO: Error test
	}
	let user = null
	localStorage.setItem("user", JSON.stringify(user));
}

const logout = () => {
	localStorage.removeItem("user");
	return auth.signOut();
}

const register = async (email, password) => {
	await this.auth.createUserWithEmailAndPassword(email, password);
	// TODO: Add to API and return full user
}

export { login, logout }