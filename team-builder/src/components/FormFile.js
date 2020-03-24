import React from "react";
import { useState } from "react";

const Form = () => {
  const [inputValue, setInputValue] = useState({
    name: "",
    email: "",
    role: ""
  });

  const handleChange = event => {
    setInputValue({ ...inputValue, [event.target.name]: event.target.value });
  };

  // const handleEmailChange = event => {
  //   setInputValue({ ...inputValue, [event.target.name]: event.target.value });
  // };

  // const handleRoleChange = event => {
  //   setInputValue({ ...inputValue, [event.target.name]: event.target.value });
  // };

  const handleSubmit = event => {
    event.preventDefault();
    setInputValue({
      name: "",
      email: "",
      role: ""
    });
  };

  return (
    <div>
      {console.log(inputValue)}
      <form onSubmit={event => handleSubmit(event)}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={inputValue.name}
            onChange={event => handleChange(event)}
          />
        </label>
        <label>
          Email:
          <input
            type="text"
            name="email"
            value={inputValue.email}
            onChange={event => handleChange(event)}
          />
        </label>
        <label>
          Role:
          <input
            type="text"
            name="role"
            value={inputValue.role}
            onChange={event => handleChange(event)}
          />
        </label>
        <button onSubmit={() => handleSubmit()}>Submit!</button>
      </form>
    </div>
  );
};

export default Form;
