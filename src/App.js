import "./App.scss";
import NavHeader from "./components/Navigation/NavHeader";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useEffect, useState, useContext } from "react";
import AppRoutes from "./routes/AppRoutes";
import { Rings } from "react-loader-spinner";
import { UserContext } from "./context/UserContext";
import Scrollbars from "react-custom-scrollbars";
import Home from "./components/Home/Home";
import Homenew from "./components/Homenew/Homenew"
import JobDetail from "./components/JobDetail/JobDetail"
import UserProfile from "./components/Profile/UserProfile";
import CompanyProfile from "./components/Profile/CompanyProfile";
import CVForm from "./components/Profile/CVForm";
import AdminLayout from "./components/Admin/Admin";


const App = () => {
  return (
    <div>
        <AdminLayout/>
    </div>
  );
};

export default App;