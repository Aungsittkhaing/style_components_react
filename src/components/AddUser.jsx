import React, { useState } from "react";

const AddUser = (props) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const addUser = (e) => {
    e.preventDefault();
    let user = {
      name,
      password,
    };
    props.addUser(user);
  };
  return (
    <div>
      <form onSubmit={addUser}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="text"
            className="form-control"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="">
          <button className="btn btn-primary btn-sm">Login</button>
        </div>
      </form>
    </div>
  );
};

export default AddUser;
