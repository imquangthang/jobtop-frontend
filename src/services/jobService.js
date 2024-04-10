import axios from "../setup/axios";

const fetchAllJob = (page, limit) => {
  return axios.get(`/api/v1/job/read?page=${page}&limit=${limit}`);
};

const createNewJob = (jobData) => {
  return axios.post("/api/v1/job/create", {
    ...jobData,
  });
};

const updateCurrentJob = (jobData) => {
  return axios.put("/api/v1/job/update", {
    ...jobData,
  });
};

const getUserAccount = () => {
  return axios.get("/api/v1/account");
};

const deleteJob = (job) => {
  return axios.delete("/api/v1/job/delete", {
    data: { id: job.id },
  });
};

export {
  fetchAllJob,
  updateCurrentJob,
  createNewJob,
  getUserAccount,
  deleteJob,
};
