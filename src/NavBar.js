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
          <NavLink to="/">Home</NavLink>
        </div>
        <div>
          <NavLink to="/login">Login </NavLink>
          <NavLink to="/signup">Sign Up</NavLink>
        </div>
      </nav>
    );
  } else {
    return (
      <nav className="NavBar d-flex justify-content-between">
        <div style={{ width: "1px" }}>
          <NavLink to="/">Home</NavLink>
        </div>
        <div>
          <NavLink to="/capsules">Capsules</NavLink>
          <NavLink to="/" onClick={logOutUser}>
            Log Out
          </NavLink>
        </div>
      </nav>
    );
  }
}

export default NavBar;
