import authAxios from "./AuthAxios";

const addStudentToGroup = async (login, code) => {
  const response = await authAxios.patch(
    `https://h2s-sms-api.herokuapp.com/groups/students/${login}`,
    { code }
  );
  return response.data;
};

const getAllGroups = async () => {
  const response = await authAxios.get(
    "https://h2s-sms-api.herokuapp.com/groups"
  );
  return response.data;
};

const getGroup = async code => {
  const response = await authAxios.get(
    `https://h2s-sms-api.herokuapp.com/groups/${code}`
  );
  return response.data;
};

const updateMentor = async (code, mentor) => {
  const response = await authAxios.patch(
    `https://h2s-sms-api.herokuapp.com/groups/${code}`,
    {
      mentor
    }
  );
  return response.data;
};

export { addStudentToGroup, getGroup, updateMentor, addGoal };
