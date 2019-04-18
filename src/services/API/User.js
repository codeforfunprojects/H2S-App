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

const register = async (user, code) => {
  let role;
  if (code === process.env.REACT_APP_ADMIN_CODE) {
    role = "admin";
  } else if (code === process.env.REACT_APP_MENTOR_CODE) {
    role = "mentor";
  } else {
    throw new Error("Invalid registration code");
  }
  try {
    const authResponse = await auth.createUserWithEmailAndPassword(
      user.email,
      user.password
    );
    delete user.password;
    delete user.confirmPassword;
    const userResponse = await authAxios.post(`http://localhost:8080/user`, {
      user: { ...user, role }
    });
    let newUser = { ...userResponse.data, uid: authResponse.user.uid };
    localStorage.setItem("user", JSON.stringify(newUser));
    return newUser;
  } catch (error) {
    throw error;
  }
};

export { login, logout, register };
