import "./HomePage.css";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "./userContext";

function Homepage() {
  const { currUser } = useContext(UserContext);
  return (
    <div className="welcome-msg">
      {currUser ? (
        <div>Welcome Back {currUser.username}!</div>
      ) : (
        <div>
          <div>
            image time capsule, where you can forget memories for a while.
          </div>
          <div className="description">
            Going through a breakup can be tough, and sometimes it's hard to let
            go of the past. But holding onto old photos can be a painful
            reminder of what's been lost. Our application is here to help. By
            storing your photos securely, you can have the peace of mind that
            comes with knowing they're safe and out of reach. Take the first
            step towards moving on and start using our application today.
          </div>
        </div>
      )}
    </div>
  );
}

export default Homepage;
