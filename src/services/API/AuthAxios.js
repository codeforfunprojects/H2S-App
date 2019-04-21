import axios from "axios";

export default axios.create({
  headers: {
    Authorization: process.env.REACT_APP_NODE_API_KEY
  }
});
