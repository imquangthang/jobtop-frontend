import React from "react";
import "./Profile.css"
import '../css/themify-icons.css'

function CompanyProfile(){
    return(
        <div class="container-xl px-4 mt-4">
            <div class="row">
                <div class="col-xl-4">
                    <div class="card1 mb-4 mb-xl-0">
                        <div class="card-header">Profile Picture</div>
                        <div class="card-body text-center">
                            <img class="img-account-profile rounded-circle mb-2" src="" alt=""></img>
                            <div class="small font-italic text-muted mb-4">JPG or PNG no larger than 5 MB</div>
                            <button class="btn btn-success" type="button">Upload new image</button>
                        </div>
                    </div>
                </div>
                <div class="col-xl-8">
                    <div class="card1 mb-4">
                        <div class="card-header">Profile</div>
                        <div class="card-body">
                            <form>
                                <div class="mb-3">
                                    <label class="small mb-1" for="inputUsername">Name</label>
                                    <input class="form-control" id="inputUsername" type="text" placeholder="Enter your name"></input>
                                </div>
                                <div class="mb-3">
                                    <label class="small mb-1" for="inputEmailAddress">Email</label>
                                    <input class="form-control" id="inputEmailAddress" type="email" placeholder="Enter your email"></input>
                                </div>
                                <div class="row gx-3 mb-3">
                                    <div class="col-md-6">
                                        <label class="small mb-1" for="inputPhone">Phone number</label>
                                        <input class="form-control" id="inputPhone" type="tel" placeholder="Enter your phone number"></input>
                                    </div>
                                    <div class="col-md-6">
                                        <label class="small mb-1" for="inputEmployees">Number of Employees</label>
                                        <input class="form-control" id="inputEmployees" type="number" name="birthday" placeholder="Enter your number"></input>
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label class="small mb-1" for="inputLocation">Location</label>
                                    <input class="form-control" id="inputLocation" type="email" placeholder="Enter your Location"></input>
                                </div>
                                <div class="mb-3">
                                    <label class="small mb-1">Cover me</label>
                                    <textarea class="form-control" cols="85" rows="5" placeholder="Enter your cover"></textarea>
                                </div>
                                <button class="btn btn-success" type="button">Save changes</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompanyProfile