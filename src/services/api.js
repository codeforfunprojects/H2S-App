// API methods
import axios from "axios";

const getAllStudents = async () => {
  const response = await axios.get("http://localhost:3000/students");
  return response.data;
};

const getStudent = async login => {
  const response = await axios.get(`http://localhost:3000/students/${login}`);
  return response.data;
};

const newEvaluation = async (evaluation, login) => {
  const response = await axios.post(
    `http://localhost:3000/evaluations/${login}`,
    { evaluation }
  );
  return response.data;
};

const checkIn = async (login, val) => {
  const response = await axios.patch(`http://localhost:3000/checkin/${login}`, {
    checkin_status: val
  });
  console.log(login, response.data);
  return response.data;
};

const updateStudent = async (login, update) => {
  const { displayname, group } = update;
  const response = await axios.patch(
    `http://localhost:3000/students/${login}`,
    { displayname, group }
  );
  return response.data;
};

const getAllGroups = async () => {
  const response = await axios.get("http://localhost:3000/groups");
  return response.data;
};

const getGroup = async code => {
  const response = await axios.get(`http://localhost:3000/groups/${code}`);
  return response.data;
};

const updateMentor = async (code, mentor) => {
  const response = await axios.patch(`http://localhost:3000/groups/${code}`, {
    mentor
  });
  return response.data;
};

export {
  getAllStudents,
  getAllGroups,
  getStudent,
  updateStudent,
  getGroup,
  updateMentor,
  newEvaluation,
  checkIn
};
