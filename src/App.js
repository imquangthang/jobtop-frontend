import "./App.scss";
import Nav from "./components/Navigation/Nav";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useEffect, useState, useContext } from "react";
import AppRoutes from "./routes/AppRoutes";
import { Rings } from "react-loader-spinner";
import { UserContext } from "./context/UserContext";

function App() {
  const { user } = useContext(UserContext);

  return (
    <>
      <Router>
        {user && user.isLoading ? (
          <div className="loading-container">
            <Rings
              heigth="100"
              width="100"
              color="#1877f2"
              ariaLabel="loading"
            />
            <div>Loading data...</div>
          </div>
        ) : (
          <>
            <div className="app-header">
              <Nav />
            </div>

            <div className="app-container">
              <AppRoutes />
            </div>
          </>
        )}
      </Router>
      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
