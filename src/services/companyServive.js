import axios from "../setup/axios";

const getUserApplyJob = (id) => {
  return axios.get(`/api/v1/company/read/job-info-status?id=${id}`);
};

export { getUserApplyJob };
