import authAxios from "./AuthAxios";
import { API_URL } from "./index";

const getAllGroups = async () => {
  const response = await authAxios.get(`${API_URL}/groups`);
  return response.data;
};

const getGroup = async code => {
  const response = await authAxios.get(`${API_URL}/groups/${code}`);
  return response.data;
};

const addStudentToGroup = async (login, code) => {
  const response = await authAxios.patch(
    `${API_URL}/groups/students/${login}`,
    { code }
  );
  return response.data;
};

const updateMentor = async (code, mentor) => {
  const response = await authAxios.patch(`${API_URL}/groups/${code}`, {
    mentor
  });
  return response.data;
};

export { getAllGroups, getGroup, addStudentToGroup, updateMentor };
