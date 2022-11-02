import React, { useContext, useState } from "react";
import UserContext from "./userContext";
import Capsule from "./Capsule";
import CreateCapsuleForm from "./CreateCapsuleForm";
import { Link } from "react-router-dom";

function Capsules() {
  const { currUser } = useContext(UserContext);
  const [capsules, setCapsules] = useState(currUser.capsules);

  const today = new Date();
  const currentMonth = today.getMonth();
  const currentDate = today.getDate();
  const currentYear = today.getFullYear();

  //86400000 milliseconds = 1 Day
  function getDaysRemaining(psqlDate) {
    const returnDateInMilliseconds = new Date(psqlDate).getTime();
    const millisecondsRemaining = returnDateInMilliseconds - today.getTime();
    const daysRemaining = Math.ceil(millisecondsRemaining / 86400000) + 1;
    return daysRemaining;
  }

  console.log(capsules);
  return (
    <div>
      <p>Today's Date</p>
      <p>
        {currentMonth + 1}, {currentDate}, {currentYear}
      </p>
      <Link className="btn btn-primary" to="/create-capsule">
        Create a new capsule
      </Link>

      {capsules.length === 0 ? (
        <div className="msg"> "You have no capsules yet!"</div>
      ) : (
        currUser.capsules.map((capsule) => {
          return (
            <Capsule
              capsuleName={capsule.name}
              openDate={capsule.return_date}
              message={capsule.message}
              daysRemaining={getDaysRemaining(capsule.return_date)}
            />
          );
        })
      )}
    </div>
  );
}

export default Capsules;
