import authAxios from "./AuthAxios";
import auth from "./firebase";

const login = async (email, password) => {
  try {
    const authResponse = await auth.signInWithEmailAndPassword(email, password);
    console.log(authResponse);

    let { displayName, uid, refreshToken } = authResponse.user;
    let userResponse = await authAxios.get(
      `http://localhost:8080/user/${email}`
    );
    // `https://h2s-sms-api.herokuapp.com/user/${email}`
    let user = { ...userResponse.data, displayName, uid, refreshToken };

    localStorage.setItem("user", JSON.stringify(user));
    return user;
  } catch (error) {
    throw error;
  }
};

const logout = () => {
  localStorage.removeItem("user");
  return auth.signOut();
};

const register = async (email, password) => {
  await this.auth.createUserWithEmailAndPassword(email, password);
  // TODO: Add to API and return full user
};

export { login, logout, register };
