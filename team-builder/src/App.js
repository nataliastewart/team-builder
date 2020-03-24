import React, { useState } from "react";
import "./App.css";
import SubmitName from "./components/SubmitName";
import Form from "./components/FormFile";

function App() {
  const [team, setTeam] = useState([
    {
      name: "Natalia Stewart",
      email: "natalia@email.com",
      role: "Web Developer"
    }
  ]);

  const update = info => {
    // console.log(info);
    const newName = {
      name: info.name,
      id: Date.now(),
      email: info.email,
      role: info.role
    };

    setTeam([...team, newName]);
  };

  return (
    <div className="App">
      <Form update={update} />
      <SubmitName team={team} />
    </div>
  );
}

export default App;
