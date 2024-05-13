import { Switch, Route } from "react-router-dom";
import Login from "../components/Login/Login2";
import Register from "../components/Register/Register2";
import Users from "../components/ManageUsers/Users";
import PrivateRoutes from "./PrivateRoutes";
import Role from "../components/Role/Role";
import Home from "../components/Home/Home";
import CvTemplate from "../components/CvTemplate/CvTemplate";
import GroupRole from "../components/GroupRole/GroupRole";
import EditJob from "../components/Job/EditJob";
import Job from "../components/Job/Job";
import CompanyJob from "../components/Company/CompanyJob";
import CompanyJobStatus from "../components/Company/CompanyJobStatus";
import JobInfo from "../components/Job/JobInfo";
import NotFound from "../components/NotFound/NotFound";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";
import Footer from "../components/Footer/Footer";
import Profile from "../components/Profile/Profile";
import CVForm from "../components/Profile/CVForm";

const AppRoutes = (props) => {
  const location = useLocation();
  return (
    <>
      <Switch>
        <PrivateRoutes path="/cv-template" component={CvTemplate} />
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
          <CVForm />
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
