import { Switch, Route } from "react-router-dom";
import Login from "../components/Login/Login2";
import Register from "../components/Register/Register2";
import PrivateRoutes from "./PrivateRoutes";
import Home from "../components/Home/Home";
import Job from "../components/Job/Job";
import JobInfo from "../components/Job/JobInfo";
import NotFound from "../components/NotFound/NotFound";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import Footer from "../components/Footer/Footer";
import Profile from "../components/Profile/Profile";
import CVTemplate from "../components/Profile/CVTemplate";
import { PDFViewer } from "@react-pdf/renderer";

const AppRoutes = (props) => {
  const location = useLocation();
  const {
    name,
    jobTitle,
    email,
    phone,
    aboutMe,
    skills,
    education,
    experience,
    imageSrc,
  } = location.state ? location.state : {};

  console.log(location.state);

  return (
    <>
      <Switch>
        {/* <PrivateRoutes path="/cv-template" component={CvTemplate} /> */}
        <PrivateRoutes path="/job" component={Job} />

        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/job-info/:id">
          <JobInfo />
        </Route>
        <Route path="/user-profile/:username">
          <Profile />
        </Route>
        <Route path="/CV-Template">
          <PDFViewer width="1000" height="1920">
            <CVTemplate
              name={name}
              jobTitle={jobTitle}
              email={email}
              phone={phone}
              aboutMe={aboutMe}
              skills={skills}
              education={education}
              experience={experience}
              imageSrc={imageSrc}
            />
          </PDFViewer>
        </Route>
        <Route path="*">
          <NotFound />
        </Route>
      </Switch>

      {location &&
        location.pathname !== "/login" &&
        location.pathname !== "/register" && (
          <div>
            <Footer />
          </div>
        )}
    </>
  );
};

export default AppRoutes;
