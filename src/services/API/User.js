import authAxios from "./AuthAxios";
import auth from "./firebase";

const login = async (email, password) => {
  try {
    const authResponse = await auth.signInWithEmailAndPassword(email, password);

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
  try {
    const authResponse = await this.auth.createUserWithEmailAndPassword(
      email,
      password
    );
    const userResponse = await authAxios.get(`http://localhost:8080/user`, {
      email,
      role: "mentor"
    });
    let user = { ...userResponse.data, uid: authResponse.user.uid };
    return user;
  } catch (error) {
    throw error;
  }
};

export { login, logout, register };
