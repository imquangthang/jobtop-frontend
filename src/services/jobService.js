import axios from "../setup/axios";

const fetchAllJob = (page, limit) => {
  return axios.get(`/api/v1/job/read?page=${page}&limit=${limit}`);
};

export { fetchAllJob };
