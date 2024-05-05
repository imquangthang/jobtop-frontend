import axios from "../setup/axios";

const getUserApplyJob = (id, statusQuery, page, limit) => {
  return axios.get(
    `/api/v1/company/read/job-info-status?id=${id}&statusQuery=${statusQuery}&page=${page}&limit=${limit}`
  );
};

const rejectRecruitment = (data) => {
  return axios.put("/api/v1/company/update/reject-recruitment", { ...data });
};

const acceptRecruitment = (data) => {
  return axios.put("/api/v1/company/update/accept-recruitment", { ...data });
};

export { getUserApplyJob, rejectRecruitment, acceptRecruitment };
