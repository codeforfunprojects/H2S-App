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
    { evaluation: { goal } }
  );
  return response.data;
};

const updateEvaluation = async (login, evaluation) => {
  const response = await authAxios.patch(
    `https://h2s-sms-api.herokuapp.com/evaluations/${login}`,
    { evaluation }
  );
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
