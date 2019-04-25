import authAxios from "./AuthAxios";
const API_URL = "http://localhost:8080";
// https://h2s-sms-api.herokuapp.com

const getAllStudents = async () => {
  const response = await authAxios.get(`${API_URL}/students`);
  return response.data;
};

const getStudent = async login => {
  const response = await authAxios.get(`${API_URL}/students/${login}`);
  return response.data;
};

const addGoal = async (login, goal) => {
  const response = await authAxios.post(`${API_URL}/progress/${login}`, {
    progress: { goal }
  });
  console.log(response);

  return response.data;
};

const updateProgress = async (login, report, user) => {
  let { displayname, email, uid } = user;
  const progress = {
    mentor: {
      displayname,
      email,
      uid
    },
    ...report
  };
  const response = await authAxios.patch(`${API_URL}/progress/${login}`, {
    progress
  });
  return response.data;
};

const checkIn = async (login, val) => {
  const response = await authAxios.patch(`${API_URL}/checkin/${login}`, {
    checkin_status: val
  });
  return response.data;
};

export { getAllStudents, getStudent, addGoal, updateProgress, checkIn };
