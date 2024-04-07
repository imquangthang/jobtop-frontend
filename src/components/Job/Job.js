import { useEffect, useState } from "react";
import "./Job.scss";
import { fetchAllJob } from "../../services/jobService";
import ReactPaginate from "react-paginate";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

const Job = (props) => {
  const location = useLocation();
  const [listJobs, setListJobs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentLimit, setCurrentLimit] = useState(12);
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    fetchJob();
  }, [currentPage]);

  const fetchJob = async () => {
    if (location.pathname === "/") {
      setCurrentLimit(3);
    }
    let response = await fetchAllJob(currentPage, currentLimit);

    if (response && response.EC === 0) {
      console.log(response.DT);
      setTotalPages(response.DT.totalPages);
      setListJobs(response.DT.jobs);
    }
  };

  const handlePageClick = async (event) => {
    setCurrentPage(+event.selected + 1);
  };
  return (
    <>
      <div className="container mt-3">
        <div class="input-group mb-3">
          <span class="input-group-text">
            <i class="fa fa-search"></i>
          </span>
          <input
            type="text"
            id="keywordInput"
            class="form-control"
            placeholder="Tìm công việc"
            onkeypress="searchOnEnter(event)"
          />
        </div>

        <div class="my-3">
          <div class="row">
            <div class="col-lg-4 col-md-6">
              <label for="locationFilter" class="form-label">
                Chọn Địa Điểm:
              </label>
              <select
                id="locationFilter"
                class="form-select"
                onchange="handleLocationFilter()"
              >
                <option value="">Tất Cả</option>
                <option value="Hà Nội, Việt Nam">Hà Nội, Việt Nam</option>
                <option value="TP. Hồ Chí Minh, Việt Nam">
                  TP. Hồ Chí Minh, Việt Nam
                </option>
                <option value="Đà Nẵng, Việt Nam">Đà Nẵng, Việt Nam</option>
              </select>
            </div>
            <div class="col-lg-4 col-md-6">
              <label for="salaryFilter" class="form-label">
                Mức lương:
              </label>
              <select
                id="salaryFilter"
                class="form-select"
                onchange="handleSalaryFilter()"
              >
                <option value="">Tất Cả</option>
                <option value="Tăng dần">Tăng dần</option>
                <option value="Giảm dần">Giảm dần</option>
              </select>
            </div>
            <div class="col-lg-4 col-md-6">
              <label for="experienceFilter" class="form-label">
                Kinh nghiệm:
              </label>
              <select
                id="experienceFilter"
                class="form-select"
                onchange="handleExperienceFilter()"
              >
                <option value="">Tất Cả</option>
                <option value="Chưa có kinh nghiệm">Chưa có kinh nghiệm</option>
                <option value="Dưới 1 năm">Dưới 1 năm</option>
                <option value="Từ 1 đến 2 năm">Từ 1 đến 2 năm</option>
                <option value="Trên 2 năm">Trên 2 năm</option>
              </select>
            </div>
            <div class="col-lg-12 mt-3">
              <button class="btn btn-primary" onclick="filterJobs()">
                Tìm Kiếm
              </button>
            </div>
          </div>
        </div>

        <div
          className="row row-cols-1 row-cols-md-1 
              row-cols-lg-3 g-3"
        >
          {listJobs && listJobs.length > 0 ? (
            <>
              {listJobs.map((item, index) => {
                return (
                  <div className="col">
                    <div className="card mb-0">
                      <div className="row g-0">
                        <div className="col-md-3 text-center">
                          <img
                            src={item.sourcePicture}
                            className="img-fluid rounded-start"
                            alt="..."
                          ></img>
                        </div>
                        <div className="col-md-9">
                          <div className="card-body">
                            <h5 className="card-title">{item.title}</h5>
                            <p className="card-text">{item.description}</p>
                            <small className="text-muted">
                              <p className="card-tag">
                                <div className="card-tag--salary text_ellipsis">
                                  {item.salary}
                                </div>
                                <div className="card-tag--address text_ellipsis">
                                  {item.address}
                                </div>
                              </p>
                            </small>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </>
          ) : (
            <>
              <tr>
                <td>Not Found User</td>
              </tr>
            </>
          )}
        </div>

        {totalPages > 0 && (
          <div className="job-footer mt-3">
            <ReactPaginate
              nextLabel="next >"
              onPageChange={handlePageClick}
              pageRangeDisplayed={3}
              marginPagesDisplayed={2}
              pageCount={totalPages}
              previousLabel="< previous"
              pageClassName="page-item"
              pageLinkClassName="page-link"
              previousClassName="page-item"
              previousLinkClassName="page-link"
              nextClassName="page-item"
              nextLinkClassName="page-link"
              breakLabel="..."
              breakClassName="page-item"
              breakLinkClassName="page-link"
              containerClassName="pagination"
              activeClassName="active"
              renderOnZeroPageCount={null}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default Job;
