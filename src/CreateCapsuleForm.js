import React, { useContext, useState } from "react";
import UserContext from "./userContext";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function CreateCapsuleForm({ createCapsule }) {
  const { currUser } = useContext(UserContext);

  let initialFormData = {
    name: "",
    message: "",
  };
  const [formData, setFormData] = useState(initialFormData);

  const [date, setStartDate] = useState(new Date());
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
      let strDate = date.toLocaleDateString();
      console.log(strDate);
      let dataWithDate = { ...formData, date: strDate };
      await createCapsule(currUser.username, dataWithDate);
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
            id={`new-capsule-${field}`}
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
        {/* <p>Pick a date!</p> */}
        {/* <b>Research recommends you to pick a date three months from now</b> */}
        <DatePicker selected={date} onChange={(date) => setStartDate(date)} />
        <button className="btn-primary rig btn btn-lrg loginForm-Btn">
          Create Capsule!
        </button>
      </form>
    </div>
  );
}

export default CreateCapsuleForm;
