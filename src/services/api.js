// API methods
import axios from "axios";

const getAllStudents = async () => {
  const response = await axios.get("http://localhost:3000/students");
  return response.data;
};

const getAllGroups = async () => {
  const response = await axios.get("http://localhost:3000/groups");
  return response.data;
};

export { getAllStudents, getAllGroups };
