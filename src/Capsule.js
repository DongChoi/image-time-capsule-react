import React from "react";

function Capsule({ capsuleName, openDate, message, daysRemaining }) {
  console.log("openDate", openDate);
  console.log("Capsule daysremaining", daysRemaining);

  return (
    <div>
      {capsuleName}, {message}, {openDate}{" "}
      {daysRemaining > 0 ? (
        <span>{daysRemaining} days left!!</span>
      ) : (
        "Capsule has been delivered!"
      )}
    </div>
  );
}

export default Capsule;
