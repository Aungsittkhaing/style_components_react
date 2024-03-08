import React, { useRef } from "react";

const UserAdd = (props) => {
  const nameRef = useRef();
  const passwordRef = useRef();

  const addUser = (e) => {
    e.preventDefault();
    const user = {
      name: nameRef.current.value,
      password: passwordRef.current.value,
    };
    props.addUser(user);
    nameRef.current.value = "";
    passwordRef.current.value = "";
    console.log(user);
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
            ref={nameRef}
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
            ref={passwordRef}
          />
        </div>
        <div className="">
          <button className="btn btn-primary btn-sm">Login</button>
        </div>
      </form>
    </div>
  );
};

export default UserAdd;
