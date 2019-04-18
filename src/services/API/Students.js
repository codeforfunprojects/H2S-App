import authAxios from "./AuthAxios";

const getAllStudents = async () => {
  const response = await authAxios.get(
    "https://h2s-sms-api.herokuapp.com/students"
  );
  return response.data;
};

const getStudent = async login => {
  const response = await authAxios.get(
    `https://h2s-sms-api.herokuapp.com/students/${login}`
  );
  return response.data;
};

const addGoal = async (login, goal) => {
  const response = await authAxios.post(
    `https://h2s-sms-api.herokuapp.com/evaluations/${login}`,
    { progress: { goal } }
  );
  return response.data;
};

const updateEvaluation = async (login, evaluation, user) => {
  let { displayname, email, uid } = user;
  const progress = {
    mentor: {
      displayname,
      email,
      uid
    },
    ...evaluation
  };
  const response = await authAxios.patch(
    `http://localhost:8080/evaluations/${login}`,
    { progress }
  );
  // `https://h2s-sms-api.herokuapp.com/evaluations/${login}`,
  return response.data;
};

const checkIn = async (login, val) => {
  const response = await authAxios.patch(
    `https://h2s-sms-api.herokuapp.com/checkin/${login}`,
    {
      checkin_status: val
    }
  );
  return response.data;
};

export { getAllStudents, getStudent, addGoal, updateEvaluation, checkIn };
