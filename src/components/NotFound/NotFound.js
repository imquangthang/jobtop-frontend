import "./NotFound.scss";
import "bootstrap/dist/css/bootstrap.min.css";

const NotFound = (props) => {
  return (
    <>
      <div class="wrapper bg" id='error'>
        <div class="error-404 d-flex align-items-center justify-content-center">
          <div class="container">
            <div class="card my-5">
              <div class="row g-0">
                <div class="col col-xl-5">
                  <div class="card-body p-4">
                    <h1 class="display-1">
                      <span class="text-primary">4</span>
                      <span class="text-danger">0</span>
                      <span class="text-success">4</span>
                    </h1>
                    <h2 class="font-weight-bold display-4">Lost in Space</h2>
                    <p>
                      You have reached the edge of the universe. The page you
                      requested could not be found. 
                    </p>
                  </div>
                </div>
                <div class="col-xl-7">
                  <img
                    src="https://cdn.searchenginejournal.com/wp-content/uploads/2019/03/shutterstock_1338315902.png"
                    class="img-fluid"
                    alt=""
                  ></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
