import React from "react";
import '../css/bootstrap.min.css'
import '../css/font-awesome.min.css'
import '../css/themify-icons.css'
import '../css/style.css'

function Homenew(){
    return(
        <div>
            <div className="container">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-size">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  src="https://www.pace.edu.vn/uploads/news/2023/12/5-cac-yeu-to-trong-moi-truong-vi-mo.jpg"
                  className="d-block w-100"
                  alt="..."
                  height={400}
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://www.pace.edu.vn/uploads/news/2023/12/1-moi-truong-vi-mo-la-gi.jpg"
                  className="d-block w-100"
                  alt="..."
                  height={400}
                />
              </div>
              <div className="carousel-item">
                <img
                  src="https://www.pace.edu.vn/uploads/news/2023/12/3-tac-dong-cua-moi-truong-vi-mo.jpg"
                  className="d-block w-100"
                  alt="..."
                  height={400}
                />
              </div>
            </div>
          </div>

          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
    </div>
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
              <button class="btn boxed-btn3" onclick="filterJobs()">
                Tìm Kiếm
              </button>
            </div>
          </div>
        </div>
        </div>

            <div class="catagory_area">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="popular_search d-flex align-items-center">
                                <span>Popular Search:</span>
                                <ul>
                                    <li><a href="#">Design & Creative</a></li>
                                    <li><a href="#">Marketing</a></li>
                                    <li><a href="#">Administration</a></li>
                                    <li><a href="#">Teaching & Education</a></li>
                                    <li><a href="#">Engineering</a></li>
                                    <li><a href="#">Software & Web</a></li>
                                    <li><a href="#">Telemarketing</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="popular_catagory_area">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="section_title mb-40">
                                <h3>Popolar Categories</h3>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-4 col-xl-3 col-md-6">
                            <div class="single_catagory">
                                <a href="jobs.html"><h4>Design & Creative</h4></a>
                                <p> <span>50</span> Available position</p>
                            </div>
                        </div>
                        <div class="col-lg-4 col-xl-3 col-md-6">
                            <div class="single_catagory">
                                <a href="jobs.html"><h4>Marketing</h4></a>
                                <p> <span>50</span> Available position</p>
                            </div>
                        </div>
                        <div class="col-lg-4 col-xl-3 col-md-6">
                            <div class="single_catagory">
                                <a href="jobs.html"><h4>Telemarketing</h4></a>
                                <p> <span>50</span> Available position</p>
                            </div>
                        </div>
                        <div class="col-lg-4 col-xl-3 col-md-6">
                            <div class="single_catagory">
                                <a href="jobs.html"><h4>Software & Web</h4></a>
                                <p> <span>50</span> Available position</p>
                            </div>
                        </div>
                        <div class="col-lg-4 col-xl-3 col-md-6">
                            <div class="single_catagory">
                                <a href="jobs.html"><h4>Administration</h4></a>
                                <p> <span>50</span> Available position</p>
                            </div>
                        </div>
                        <div class="col-lg-4 col-xl-3 col-md-6">
                            <div class="single_catagory">
                                <a href="jobs.html"><h4>Teaching & Education</h4></a>
                                <p> <span>50</span> Available position</p>
                            </div>
                        </div>
                        <div class="col-lg-4 col-xl-3 col-md-6">
                            <div class="single_catagory">
                                <a href="jobs.html"><h4>Engineering</h4></a>
                                <p> <span>50</span> Available position</p>
                            </div>
                        </div>
                        <div class="col-lg-4 col-xl-3 col-md-6">
                            <div class="single_catagory">
                                <a href="jobs.html"><h4>Garments / Textile</h4></a>
                                <p> <span>50</span> Available position</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="job_listing_area">
                <div class="container">
                    <div class="row align-items-center">
                        <div class="col-lg-6">
                            <div class="section_title">
                                <h3>Job Listing</h3>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <div class="brouse_job text-right">
                                <a href="jobs.html" class="boxed-btn4">Browse More Job</a>
                            </div>
                        </div>
                    </div>
                    {/* <div class="job_lists">
                        <div class="row">
                            <div class="col-lg-12 col-md-12">
                                <div class="single_jobs white-bg d-flex justify-content-between">
                                    <div class="jobs_left d-flex align-items-center">
                                        <div class="thumb">
                                            <img src="img/svg_icon/1.svg" alt=""></img>
                                        </div>
                                        <div class="jobs_conetent">
                                            <a href="job_details.html"><h4>Software Engineer</h4></a>
                                            <div class="links_locat d-flex align-items-center">
                                                <div class="location">
                                                    <p> <i class="fa fa-map-marker"></i> California, USA</p>
                                                </div>
                                                <div class="location">
                                                    <p> <i class="fa fa-clock-o"></i> Part-time</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="jobs_right">
                                        <div class="apply_now">
                                            <a class="heart_mark" href="#"> <i class="ti-heart"></i> </a>
                                            <a href="job_details.html" class="boxed-btn3">Apply Now</a>
                                        </div>
                                        <div class="date">
                                            <p>Date line: 31 Jan 2020</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-12 col-md-12">
                                <div class="single_jobs white-bg d-flex justify-content-between">
                                    <div class="jobs_left d-flex align-items-center">
                                        <div class="thumb">
                                            <img src="img/svg_icon/2.svg" alt=""></img>
                                        </div>
                                        <div class="jobs_conetent">
                                            <a href="job_details.html"><h4>Digital Marketer</h4></a>
                                            <div class="links_locat d-flex align-items-center">
                                                <div class="location">
                                                    <p> <i class="fa fa-map-marker"></i> California, USA</p>
                                                </div>
                                                <div class="location">
                                                    <p> <i class="fa fa-clock-o"></i> Part-time</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="jobs_right">
                                        <div class="apply_now">
                                            <a class="heart_mark" href="#"> <i class="ti-heart"></i> </a>
                                            <a href="job_details.html" class="boxed-btn3">Apply Now</a>
                                        </div>
                                        <div class="date">
                                            <p>Date line: 31 Jan 2020</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-12 col-md-12">
                                <div class="single_jobs white-bg d-flex justify-content-between">
                                    <div class="jobs_left d-flex align-items-center">
                                        <div class="thumb">
                                            <img src="img/svg_icon/3.svg" alt=""></img>
                                        </div>
                                        <div class="jobs_conetent">
                                            <a href="job_details.html"><h4>Wordpress Developer</h4></a>
                                            <div class="links_locat d-flex align-items-center">
                                                <div class="location">
                                                    <p> <i class="fa fa-map-marker"></i> California, USA</p>
                                                </div>
                                                <div class="location">
                                                    <p> <i class="fa fa-clock-o"></i> Part-time</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="jobs_right">
                                        <div class="apply_now">
                                            <a class="heart_mark" href="#"> <i class="ti-heart"></i> </a>
                                            <a href="job_details.html" class="boxed-btn3">Apply Now</a>
                                        </div>
                                        <div class="date">
                                            <p>Date line: 31 Jan 2020</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-12 col-md-12">
                                <div class="single_jobs white-bg d-flex justify-content-between">
                                    <div class="jobs_left d-flex align-items-center">
                                        <div class="thumb">
                                            <img src="img/svg_icon/4.svg" alt=""></img>
                                        </div>
                                        <div class="jobs_conetent">
                                            <a href="job_details.html"><h4>Visual Designer</h4></a>
                                            <div class="links_locat d-flex align-items-center">
                                                <div class="location">
                                                    <p> <i class="fa fa-map-marker"></i> California, USA</p>
                                                </div>
                                                <div class="location">
                                                    <p> <i class="fa fa-clock-o"></i> Part-time</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="jobs_right">
                                        <div class="apply_now">
                                            <a class="heart_mark" href="#"> <i class="ti-heart"></i> </a>
                                            <a href="job_details.html" class="boxed-btn3">Apply Now</a>
                                        </div>
                                        <div class="date">
                                            <p>Date line: 31 Jan 2020</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-12 col-md-12">
                                <div class="single_jobs white-bg d-flex justify-content-between">
                                    <div class="jobs_left d-flex align-items-center">
                                        <div class="thumb">
                                            <img src="img/svg_icon/5.svg" alt=""></img>
                                        </div>
                                        <div class="jobs_conetent">
                                            <a href="job_details.html"><h4>Software Engineer</h4></a>
                                            <div class="links_locat d-flex align-items-center">
                                                <div class="location">
                                                    <p> <i class="fa fa-map-marker"></i> California, USA</p>
                                                </div>
                                                <div class="location">
                                                    <p> <i class="fa fa-clock-o"></i> Part-time</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="jobs_right">
                                        <div class="apply_now">
                                            <a class="heart_mark" href="#"> <i class="ti-heart"></i> </a>
                                            <a href="job_details.html" class="boxed-btn3">Apply Now</a>
                                        </div>
                                        <div class="date">
                                            <p>Date line: 31 Jan 2020</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-12 col-md-12">
                                <div class="single_jobs white-bg d-flex justify-content-between">
                                    <div class="jobs_left d-flex align-items-center">
                                        <div class="thumb">
                                            <img src="img/svg_icon/1.svg" alt=""></img>
                                        </div>
                                        <div class="jobs_conetent">
                                            <a href="job_details.html"><h4>Creative Designer</h4></a>
                                            <div class="links_locat d-flex align-items-center">
                                                <div class="location">
                                                    <p> <i class="fa fa-map-marker"></i> California, USA</p>
                                                </div>
                                                <div class="location">
                                                    <p> <i class="fa fa-clock-o"></i> Part-time</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="jobs_right">
                                        <div class="apply_now">
                                            <a class="heart_mark" href="#"> <i class="ti-heart"></i> </a>
                                            <a href="job_details.html" class="boxed-btn3">Apply Now</a>
                                        </div>
                                        <div class="date">
                                            <p>Date line: 31 Jan 2020</p>
                                        </div>
                                    </div>
                                </div> */}
                            {/* </div> */}
                        {/* </div> */}
                    {/* </div> */}
                    <div class="container my-5 row" id="jobContainer">
                        <div className="col-md-6 mb-3">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Web Developer</h5>
                                    <img src="" alt="" class="mb-2"></img>
                                    <p className="card-text"><strong>Công Ty:</strong> AMC Company</p>
                                    <p className="card-text"><strong>Địa Điểm:</strong> Hà Nội</p>
                                    <p className="card-text"><strong>Mức Lương:</strong> $50,000 - $70,000</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 mb-3">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Web Developer</h5>
                                    <img src="" alt="" class="mb-2"></img>
                                    <p className="card-text"><strong>Công Ty:</strong> AMC Company</p>
                                    <p className="card-text"><strong>Địa Điểm:</strong> Hà Nội</p>
                                    <p className="card-text"><strong>Mức Lương:</strong> $50,000 - $70,000</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 mb-3">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Web Developer</h5>
                                    <img src="" alt="" class="mb-2"></img>
                                    <p className="card-text"><strong>Công Ty:</strong> AMC Company</p>
                                    <p className="card-text"><strong>Địa Điểm:</strong> Hà Nội</p>
                                    <p className="card-text"><strong>Mức Lương:</strong> $50,000 - $70,000</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 mb-3">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title">Web Developer</h5>
                                    <img src="" alt="" class="mb-2"></img>
                                    <p className="card-text"><strong>Công Ty:</strong> AMC Company</p>
                                    <p className="card-text"><strong>Địa Điểm:</strong> Hà Nội</p>
                                    <p className="card-text"><strong>Mức Lương:</strong> $50,000 - $70,000</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="top_companies_area">
                <div class="container">
                    <div class="row align-items-center mb-40">
                        <div class="col-lg-6 col-md-6">
                            <div class="section_title">
                                <h3>Top Companies</h3>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6">
                            <div class="brouse_job text-right">
                                <a href="jobs.html" class="boxed-btn4">Browse More Companies</a>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-lg-4 col-xl-3 col-md-6">
                            <div class="single_company">
                                <div class="thumb">
                                    <img src="img/svg_icon/5.svg" alt=""></img>
                                </div>
                                <a href="jobs.html"><h3>Snack Studio</h3></a>
                                <p> <span>50</span> Available position</p>
                            </div>
                        </div>
                        <div class="col-lg-4 col-xl-3 col-md-6">
                            <div class="single_company">
                                <div class="thumb">
                                    <img src="img/svg_icon/4.svg" alt=""></img>
                                </div>
                                <a href="jobs.html"><h3>Snack Studio</h3></a>
                                <p> <span>50</span> Available position</p>
                            </div>
                        </div>
                        <div class="col-lg-4 col-xl-3 col-md-6">
                            <div class="single_company">
                                <div class="thumb">
                                    <img src="img/svg_icon/3.svg" alt=""></img>
                                </div>
                                <a href="jobs.html"><h3>Snack Studio</h3></a>
                                <p> <span>50</span> Available position</p>
                            </div>
                        </div>
                        <div class="col-lg-4 col-xl-3 col-md-6">
                            <div class="single_company">
                                <div class="thumb">
                                    <img src="img/svg_icon/1.svg" alt=""></img>
                                </div>
                                <a href="jobs.html"><h3>Snack Studio</h3></a>
                                <p> <span>50</span> Available position</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
            <div class="job_searcing_wrap overlay">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-5 offset-lg-1 col-md-6">
                            <div class="searching_text">
                                <h3>Looking for a Job?</h3>
                                <p>We provide online instant cash loans with quick approval </p>
                                <a href="#" class="boxed-btn3">Browse Job</a>
                            </div>
                        </div>
                        <div class="col-lg-5 offset-lg-1 col-md-6">
                            <div class="searching_text">
                                <h3>Looking for a Expert?</h3>
                                <p>We provide online instant cash loans with quick approval </p>
                                <a href="#" class="boxed-btn3">Post a Job</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Homenew