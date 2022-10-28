import React, { useContext } from "react";
import UserContext from "./userContext";
import Capsule from "./Capsule";
import CreateCapsuleForm from "./CreateCapsuleForm";

function Capsules({ createCapsule }) {
  const { currUser } = useContext(UserContext);
  const capsules = currUser.capsules;
  return (
    <div>
      <CreateCapsuleForm createCapsule={createCapsule} />
      {capsules.length === 0 ? (
        <div className="msg"> "You have no capsules yet!"</div>
      ) : (
        currUser.capsules.map((capsule) => {
          return (
            <Capsule
              capsuleName={capsule.capsuleName}
              openDate={capsule.openDate}
              message={capsule.message}
            />
          );
        })
      )}
    </div>
  );
}

export default Capsules;
