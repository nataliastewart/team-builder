import React from "react";
import { useState } from "react";

const Form = props => {
  const [team, setTeam] = useState({
    name: "",
    email: "",
    role: ""
  });

  const handleChange = event => {
    setTeam({
      ...team,
      [event.target.name]: event.target.value
    });
  };

  // const handleEmailChange = event => {
  //   setTeam({ ...team, [event.target.name]: event.target.value });
  // };

  // const handleRoleChange = event => {
  //   setTeam({ ...team, [event.target.name]: event.target.value });
  // };

  const handleSubmit = event => {
    event.preventDefault();
    props.update(team);

    setTeam({
      name: "",
      email: "",
      role: ""
    });
  };

  return (
    <div>
      {console.log(team)}
      <form onSubmit={event => handleSubmit(event)}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={team.name}
            onChange={handleChange}
          />
        </label>

        <label>
          Email:
          <input
            type="text"
            name="email"
            value={team.email}
            onChange={handleChange}
          />
        </label>
        <label>
          Role:
          <input
            type="text"
            name="role"
            value={team.role}
            onChange={handleChange}
          />
        </label>
        <button onSubmit={() => handleSubmit()}>Submit!</button>
      </form>
    </div>
  );
};

export default Form;
