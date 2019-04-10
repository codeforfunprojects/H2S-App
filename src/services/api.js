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

const newEvaluation = evaluation => {
  // axios.post()
  console.log(evaluation);
};

const getAllGroups = async () => {
  const response = await axios.get("http://localhost:3000/groups");
  return response.data;
};

export { getAllStudents, getAllGroups, getStudent, newEvaluation };
