import "./App.scss";
import Login from "./components/Login/Login";
import Nav from "./components/Navigation/Nav";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Register from "./components/Register/Register";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Router>
        <div className="app-contanier">
          {/* <Nav /> */}
          <Switch>
            <Route path="/news">news</Route>
            <Route path="/about">about</Route>
            <Route path="/contact">contact</Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/" exact>
              Home
            </Route>
            <Route path="*">404 Not Found</Route>
          </Switch>
        </div>
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
