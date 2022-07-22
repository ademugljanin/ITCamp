import React from "react";
import { useState } from "react";

function Form() {
  let formValue = {
    name: "",
    lastName: "",
    email: "",
  };
  const [value, setValue] = useState({
    name: "",
    lastName: "",
    email: "",
  });
  return (
    <div className="formica">
      <div className="formulilica">
        <input
          type="text"
          className="formulica"
          placeholder="First Name"
          onChange={(e) => {
            formValue.name = e.target.value;
          }}
        />
        <input
          type="text"
          className="formulica"
          placeholder="Last Name"
          onChange={(e) => {
            formValue.lastName = e.target.value;
          }}
        />
        <input
          type="text"
          className="formulica"
          placeholder="Email"
          onChange={(e) => {
            formValue.email = e.target.value;
          }}
        />
        <button
          type="submit"
          className="dugmence"
          onClick={() => {
            if (formValue.name && formValue.lastName && formValue.email)
              console.log(formValue);
            setValue(formValue);
          }}
        >
          REGISTER
        </button>
      </div>
      <h1>{value.name}</h1>
      <h1>{value.lastName}</h1>
      <h1>{value.email}</h1>
    </div>
  );
}

export default Form;
