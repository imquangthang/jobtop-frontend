import { Switch, Route } from "react-router-dom";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Users from "../components/ManageUsers/Users";
import PrivateRoutes from "./PrivateRoutes";
import Role from "../components/Role/Role";
import Home from "../components/Home/Home";
import CvTemplate from "../components/CvTemplate/CvTemplate";
import GroupRole from "../components/GroupRole/GroupRole";
import Job from "../components/Job/Job";

const AppRoutes = (props) => {
  return (
    <>
      <Switch>
        <PrivateRoutes path="/accounts" component={Users} />
        <PrivateRoutes path="/roles" component={Role} />
        <PrivateRoutes path="/group-role" component={GroupRole} />
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
        <Route path="*">404 Not Found</Route>
      </Switch>
    </>
  );
};

export default AppRoutes;
