import { useEffect, useState } from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { getJobInfo } from "../../services/jobService";
import "./JobInfo.scss";
import "tailwindcss/tailwind.css";

const JobInfo = (props) => {
  let { id } = useParams();
  const [job, setJob] = useState({});

  useEffect(() => {
    // setJob(jobs[id ?? 0]);
    handleGetJob();
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [id]);

  const handleGetJob = async () => {
    let response = await getJobInfo(id);
    if (response && response.EC === 0) {
      setJob(response.DT);
      console.log(job);
    }
  };
  return (
    <div className="container mx-auto">
      {job ? (
        <>
          <div>
            <span className="color">title:</span> {job.title}
          </div>
          <div>
            <span className="color">companyId: </span> {job.companyId}
          </div>
          <div>
            <span className="color">careerId: </span> {job.careerId}
          </div>
          <div>
            <span className="color">address: </span> {job.address}
          </div>
          <div>
            <span className="color">numberEmployee:</span> {job.numberEmployee}
          </div>
          <div>
            <span className="color">experience: </span> {job.experience}
          </div>
          <div>
            <span className="color">level: </span> {job.level}
          </div>
          <div>
            <span className="color">salary: </span> {job.salary}
          </div>
          <div>
            <span className="color">education: </span> {job.education}
          </div>
          <div>
            <span className="color">description: </span> {job.description}
          </div>
          <div>
            <span className="color">requirements: </span> {job.requirements}
          </div>
          <div>
            <span className="color">deadline: </span> {job.deadline}
          </div>
          <div>
            <span className="color">sourcePicture: </span> {job.sourcePicture}
          </div>{" "}
        </>
      ) : (
        <>not found job</>
      )}
    </div>
  );
};

export default JobInfo;
