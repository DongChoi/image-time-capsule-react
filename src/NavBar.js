import { NavLink } from "react-router-dom";
import { useContext } from "react";
import UserContext from "./userContext";
// import "./NavBar.css";

/** shows the routes based on if the current user exists
 *  prop: logout function
 *
 */
function NavBar({ logOutUser }) {
  const { currUser } = useContext(UserContext);
  if (!currUser) {
    return (
      <nav className="NavBar d-flex justify-content-between">
        <div style={{ width: "1px" }}>
          <NavLink to="/">Image Time Capsule</NavLink>
        </div>
        <div>
          <NavLink to="/login">Login </NavLink>
          <NavLink to="/signup">Sign Up</NavLink>
          <NavLink to="/upload">Upload</NavLink>
          <NavLink to="/Progress">Progress</NavLink>
        </div>
      </nav>
    );
  } else {
    return (
      <nav className="NavBar d-flex justify-content-between">
        <div style={{ width: "1px" }}>
          <NavLink to="/">Jobly</NavLink>
        </div>
        <div>
          <NavLink to="/companies">Companies</NavLink>
          <NavLink to="/jobs">Jobs</NavLink>
          <NavLink to="/profile">Profile</NavLink>
          <NavLink to="/" onClick={logOutUser}>
            {" "}
            Log Out {currUser.username}
          </NavLink>
        </div>
      </nav>
    );
  }
}

export default NavBar;
