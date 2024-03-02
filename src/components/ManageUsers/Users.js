import { useEffect } from "react";
import { useHistory } from "react-router-dom";

const Users = (props) => {
  let history = useHistory();
  useEffect(() => {
    let session = sessionStorage.getItem("account");
    if (!session) {
      history.push("/login");
    }
  }, []);
  return <div>User componemts</div>;
};

export default Users;
