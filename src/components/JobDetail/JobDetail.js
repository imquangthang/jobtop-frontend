import React from "react";
import '../css/bootstrap.min.css'
import '../css/font-awesome.min.css'
import '../css/themify-icons.css'
import '../css/style.css'

function JobDetail(){
    return (
        <div className="job_details_area">
        <div className="container">
            <div className="row">
                <div className="col-lg-8">
                    <div className="job_details_header">
                        <div className="single_jobs white-bg d-flex justify-content-between">
                            <div className="jobs_left d-flex align-items-center">
                                <div className="thumb">
                                    <img src="https://cdn1.vieclam24h.vn/tvn/images/employer_avatar/2021/10/27/images/163530524363.jpeg" alt=""></img>
                                </div>
                                <div className="jobs_conetent">
                                    <a href="#"><h4>Kế Toán Tổng Hợp (Biết Tiếng Trung)</h4></a>
                                    <div className="location">
                                            <p>Công Ty TNHH Công Nghiệp Swan Việt Nam</p>
                                    </div>
                                    <div className="links_locat d-flex align-items-center">
                                        
                                        <div className="location">
                                            <p> <i className="fa fa-map-marker"></i> Đồng Nai, TP.HCM</p>
                                        </div>
                                        <div class="location">
                                            <p> <i className="fa fa-clock-o"></i> 05/05/2024</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="jobs_right">
                                <div className="apply_now">
                                    <a className="heart_mark" href="#"> <i class="ti-heart"></i> </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="descript_wrap white-bg">
                        <div className="single_wrap">
                            <h4>Description</h4>
                            <p>Nhận phiếu xuất hàng từ BP.Bán hàng và ra hoá đơn Đối chiếu báo cáo ngày từ Phòng Kinh Doanh Thu tiền hàng và ghi chứng từ Nhập và đối chiếu công nợ Nhập quỹ tiền mặt và báo cáo Làm báo cáo công nợ Nhập hóa đơn đầu vào Quản lý thu – chi Báo cáo thuế Báo cáo tài chính Quyết toán thuế Theo dõi tài sản cố định Phân bổ chi phí, trích khấu hao Trích lương, bảo hiểm Và những công việc liên quan khác.</p>
                        </div>
                        <div className="single_wrap">
                            <h4>Requirement</h4>
                            <p>Tốt nghiệp đại học trở lên chuyên ngành liên quan Có kinh nghiệm 02 năm trở lên ở vị trí tương đương Tiếng Trung Vi tính văn phòng Chịu được áp lực công việc Cẩn thận, tỉ mỉ trong công việc kiểm tra chứng từ Có khả năng làm việc độc lập và làm việc nhóm Tinh thần trách nhiệm cao và giữ bí mật thông tin công ty Có kỹ năng giao tiếp, đàm phán để giải quyết các vấn đề về tài chính với các đối tác, đối tượng liên quan</p>
                        </div>
                        <div className="single_wrap">
                            <h4>Right</h4>
                            <p>Lương tháng 13 và thưởng theo tình hình kinh doanh của công ty Chế độ tăng lương định kỳ hàng năm ; Phụ cấp công tác và chuyên cần; Nghỉ hàng tuần và lễ tết theo luật lao động Việt Nam. Đóng BHXH, BHYT, BHTN theo quy định nhà nước Môi trường làm việc năng động, hòa đồng Du lịch hàng năm Bảo hiểm 24 giờ Nhận hồ sơ ứng viên bằng ngôn ngữ: Tiếng Trung (Quan Thoại) và tiếng Việt</p>
                        </div>
                        <div className="single_wrap">
                            <h4>Company</h4>
                            <p>Place: <span>ĐƯỜNG SỐ 3, KCN NHƠN TRẠCH 1, ĐỒNG NAI</span></p>
                            <p>Scale: <span>10 - 150 người</span></p>
                        </div>
                    </div>
                    <div className="apply_job_form white-bg">
                        <h4>Apply for the job</h4>      
                        <form action="#">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="input_field">
                                        <input type="text" placeholder="Your name"></input>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="input_field">
                                        <input type="text" placeholder="Email"></input>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="input_field">
                                        <input type="text" placeholder="Website/Portfolio link"></input>
                                    </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="input-group">
                                        <div className="input-group-prepend">
                                          <button type="button" id="inputGroupFileAddon03"><i class="fa fa-cloud-upload" aria-hidden="true"></i>
                                          </button>
                                        </div>
                                        <div className="custom-file">
                                          <input type="file" class="custom-file-input" id="inputGroupFile03" aria-describedby="inputGroupFileAddon03"></input>
                                          <label className="custom-file-label" for="inputGroupFile03">Upload CV</label>
                                        </div>
                                      </div>
                                </div>
                                <div className="col-md-12">
                                    <div className="input_field">
                                        <textarea id="" cols="30" rows="10" placeholder="Coverletter"></textarea>
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div className="submit_btn">
                                        <button className="boxed-btn3 w-100" type="submit">Apply Now</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div className="job_sumary">
                        <div className="job_content">
                            <ul>
                                <li>DateSub: <span> 17/04/2024</span></li>
                                <li>Salary: <span> 12 - 20 triệu</span></li>
                                <li>Place: <span> Đồng Nai , TP.HCM</span></li>
                                <li>Quantity: <span> 2</span></li>
                                <li>Level: <span> 2 năm</span></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default JobDetail