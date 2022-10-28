import React, { useContext, useState } from "react";
import UserContext from "./userContext";

function CreateCapsuleForm({ createCapsule }) {
  const { currUser } = useContext(UserContext);
  let initialFormData = {
    name: "",
    message: "",
    date: "",
  };
  const [formData, setFormData] = useState(initialFormData);
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData((fData) => ({
      ...fData,
      [name]: value,
    }));
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      console.log("lets make this capsule bro");
      await createCapsule(currUser.username, formData);
      setFormData(initialFormData);
    } catch (error) {
      console.log("There was an error trying to create a capsule!!");
    }
  }

  function renderForm() {
    return Object.keys(initialFormData).map((field) => {
      return (
        <div className="mb-3 card-body" key={field}>
          <input
            id={`login-${field}`}
            name={field}
            type={field === "password" ? "password" : "text"}
            className="form-control"
            placeholder={field}
            onChange={handleChange}
            value={formData[field]}
            aria-label={field}
          />
        </div>
      );
    });
  }
  return (
    <div>
      <form className="capsuleForm" onSubmit={handleSubmit}>
        {renderForm()}

        <button className="btn-primary rig btn btn-lrg loginForm-Btn">
          Create Capsule
        </button>
      </form>
    </div>
  );
}

export default CreateCapsuleForm;
