import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./NavBar";
import Routelist from "./Routelist";
import "./App.css";
// import JoblyApi from "./api";
// import jwt_decode from "jwt-decode";
import UserContext from "./userContext";
import ImageTimeCapsuleApi from "./ImageTimeCapsuleApi";
import axios from "axios";

function App() {
  const [currUser, setcurrUser] = useState(null);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [isLoading, setIsLoading] = useState(true);
  // useEffect(
  //   function fetchUserWhenMounted() {
  //     async function addToLocal() {
  //       if (token) {
  //         localStorage.setItem("token", token);
  //         let user = await getCurrUserFromToken(token);
  //         console.log("curr usser state:", user);
  //         setcurrUser(user);
  //       } else {
  //         localStorage.removeItem("token");
  //       }
  //       setIsLoading(false);
  //     }
  //     addToLocal();
  //   },
  //   [token]
  // );

  async function upload(files) {
    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append("file", files[i]);
    }
    const images = {
      method: "POST",
      url: "http://localhost:5001/images/add",
      headers: {
        //issue
        "Content-Type": "multipart/form-data",
      },
      data: formData,
    };
    const resp = await axios.request(images);
    console.log(resp);
  }

  //calls api to register user to backend
  async function register(formData) {
    console.log("attempting to signup user");
    const resp = await ImageTimeCapsuleApi.register(formData);
    console.log("user data", resp);
    setToken(resp);
  }

  //calls api to login user to backend
  async function login(formData) {
    const resp = await ImageTimeCapsuleApi.login(formData);
    setToken(resp);
  }

  //calls api to update user to backend
  async function updateUser(formData, username) {
    const resp = await ImageTimeCapsuleApi.updateUser(formData, username);
    setcurrUser(resp);
    console.log("CURRENT USER AFTER UPDATE", currUser);
  }

  //calls api to get current user from token from backend
  // async function getCurrUserFromToken(token) {
  //   let user = jwt_decode(token);
  //   ImageTimeCapsuleApi.token = token;
  //   console.log("user", user);
  //   const currUser = await ImageTimeCapsuleApi.getCurrUser(user.username);
  //   if (!currUser.applications) {
  //     currUser.applications = [];
  //   }
  //   return currUser;
  // }

  // if (isLoading) {
  //   return (
  //     <div
  //       className="spinner-border"
  //       style={{ width: "3em", height: "3em" }}
  //     ></div>
  //   );
  // }

  //logs out user
  function logOutUser() {
    setToken(null);
    setcurrUser(null);
  }

  return (
    <div>
      <UserContext.Provider value={{ currUser }}>
        <BrowserRouter>
          <NavBar logOutUser={logOutUser} />
          <div>
            <Routelist
              // applyJobs={applyJobs}
              login={login}
              register={register}
              updateUser={updateUser}
              upload={upload}
            />
          </div>
        </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
}

export default App;
