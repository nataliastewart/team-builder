import React from "react";

const SubmitName = props => {
  console.log("SUbmitName", props);
  return (
    <div>
      {props.team.map(e => (
        <div>
          <h2>{e.name}</h2>
          <h2>{e.email}</h2>
          <h2>{e.role}</h2>
        </div>
      ))}
    </div>
  );
};

export default SubmitName;
