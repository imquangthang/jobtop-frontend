import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom/cjs/react-router-dom.min";
import { getUserApplyJob } from "../../services/companyServive";
import "./CompanyJobInfoStatus.scss";
import { getUserAccount } from "../../services/userService";
import { toast } from "react-toastify";

const CompanyJobInfoStatus = (props) => {
  let { id } = useParams();
  const [userApplyJob, setUserApplyJob] = useState({});
  const [userValid, setUserValid] = useState(false);
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    handleGetUserApplyJob();
    checkUser();
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [id]);

  const handleGetUserApplyJob = async () => {
    let response = await getUserApplyJob(id);
    if (response && response.EC === 0) {
      setUserApplyJob(response.DT);
    }
  };

  const checkUser = async () => {
    let response = await getUserAccount();
    if (response && response.EC === 0) {
      let group = response.DT.groupWithRoles.name;
      if (group === "Customer") {
        setUserValid(true);
        setUserEmail(response.DT.email);
      } else {
        setUserValid(false);
        setUserEmail("");
      }
    } else {
      setUserValid(false);
      setUserEmail("");
    }
  };

  return (
    <>
      {userValid ? (
        <>
          {userApplyJob && userApplyJob.length > 0 ? (
            <>
              <div class="container rounded bg-white">
                <div class="h2 font-weight-bold">Recruitment</div>
                <div class="table-responsive">
                  <table class="table">
                    <thead>
                      <tr>
                        <th scope="col">UserName</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr id="spacing-row">
                        <td></td>
                      </tr>
                      {userApplyJob.map((item, index) => {
                        return (
                          <>
                            <tr class="bg-blue">
                              <td>
                                <div class="pl-lg-5 pl-md-3 pl-1 name">
                                  {item.User && item.User.username
                                    ? item.User.username
                                    : "Chưa có"}
                                </div>
                              </td>
                              <td>
                                <div class="pl-lg-5 pl-md-3 pl-1 name">
                                  {item.User && item.User.email
                                    ? item.User.email
                                    : "Chưa có"}
                                </div>
                              </td>
                              <td>
                                <div class="pl-lg-5 pl-md-3 pl-1 name">
                                  {item.User && item.User.phone
                                    ? item.User.phone
                                    : "Chưa có"}
                                </div>
                              </td>
                              <td>
                                <div class="pl-lg-5 pl-md-3 pl-1 name">
                                  {item.User && item.User.sex
                                    ? item.User.sex
                                    : "Chưa có"}
                                </div>
                              </td>
                              <td>
                                {item.status ? (
                                  <div class="d-inline-flex align-items-center active">
                                    <div class="circle mx-1"></div>
                                    <span>Đã Xử Lí</span>
                                  </div>
                                ) : (
                                  <div class="d-inline-flex align-items-center waiting">
                                    <div class="circle mx-1"></div>
                                    <span>Đang Chờ Xử Lí</span>
                                  </div>
                                )}
                              </td>
                              <td>
                                <i class="fa fa-eye"></i>
                              </td>
                            </tr>
                            <tr id="spacing-row">
                              <td></td>
                            </tr>
                          </>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
              {/* <div className="mb-5">
                      {item.status ? item.status : "Chưa có"}
                      <br />
                      {item.coverletter ? item.coverletter : "Chưa có"}
                      <br />
                      {item.CV ? item.CV : "Chưa có"}
                      <br />
                      <span>user apply:</span>
                      <br />
                      {item.User && item.User.username
                        ? item.User.username
                        : "Chưa có"}
                      <br />
                      {item.User && item.User.email
                        ? item.User.email
                        : "Chưa có"}
                      <br />
                      {item.User && item.User.phone
                        ? item.User.phone
                        : "Chưa có"}
                      <br />
                      {item.User && item.User.sex ? item.User.sex : "Chưa có"}
                      <br />
                    </div> */}
            </>
          ) : (
            <>chưa có người nào applied</>
          )}
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default CompanyJobInfoStatus;
