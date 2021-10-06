import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import CreateUser from "./Components/CreateUser/CreateUser";
import EditProfile from "./Components/EditProfile/EditProfile";
import EditUser from "./Components/EditUser/EditUser";

import Header from "./Components/Header/Header";
import Profile from "./Components/Profile/Profile";
import Users from "./Components/Users/Users";
import { Context } from "./Context/Context";

function App() {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    let { data: users } = await axios.get(
      "https://611f26289771bf001785c71b.mockapi.io/users"
    );
    console.log(users);
  };

  useEffect(() => {
    console.log("Mounted");
    getUsers();
  }, []);

  return (
    <>
      <Context.provider>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/" component={Users} />
            <Route path="/createuser" component={CreateUser} />
            <Route path="edituser/:id" component={EditUser} />
            <Route path="/profile" component={Profile} />
            <Route path="/edit-profile/:id" component={EditProfile} />
          </Switch>
        </BrowserRouter>
      </Context.provider>
    </>
  );
}

export default App;
