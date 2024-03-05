import React, { createContext, useContext, useState } from "react";

let UserDetailsContext = createContext(null);

export function FirstLevelComponent() {
  const user = useContext(UserDetailsContext);
  return (
    <div className="bg-warning p-4 text-dark">
      <h3>First Level Component-{user}</h3>
      <SecondLevelComponent />
    </div>
  );
}

export function SecondLevelComponent() {
  const user = useContext(UserDetailsContext);
  return (
    <div className="bg-danger p-4 text-white">
      <h3>Scond Level Component-{user}</h3>
    </div>
  );
}

function Context() {
  const [username, setUsername] = useState("John");

  function UserChange(e) {
    setUsername(e.target.value);
  }
  return (
    <div className="container-fluid p-4 bg-dark text-white">
      <UserDetailsContext.Provider value={username}>
        <div>
          Username: <input type="text" onChange={UserChange} />
        </div>
        <h3>Context Parent -{username}</h3>
        <FirstLevelComponent />
      </UserDetailsContext.Provider>
    </div>
  );
}

export default Context;
