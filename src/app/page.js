"use client";
import { useState } from "react";
import "./index.css";

export default function Home() {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastname: "",
    username: "",
  });
  const [errorState, setErrorState] = useState({});
  const handleInputChange = (e) => {
    const inputName = e.target.name;
    const InputValue = e.target.value;
    console.log(inputName);
    console.log(inputName);
  };

  // const handleChangeLastNameInput = (e) => {
  //   setLastName(e.target.value);
  // };
  // const handleChangeFirstNameInput = (e) => {
  //   setFirstName(e.target.value);
  // };
  // const handleChangeUserNameInput = (e) => {
  //   setUserName(e.target.value);
  // };
  // const handleButtonClick = () => {
  //   if (firstName.length < 3) {
  //     setFirstnameError(true);
  //   } else {
  //     setFirstnameError(false);
  //   }

  //   if (lastname.length < 3) {
  //     setLastnameError(true);
  //   } else {
  //     setLastnameError(false);
  //   }
  //   if (username.length < 3) {
  //     setUsernameError(true);
  //   } else {
  //     setUsernameError(false);
  //   }
  // };
  return (
    <div className="container">
      <div className="main">
        <div className="box">
          <img className="logo" src="Mylog.svg"></img>

          <div className="small">
            <div style={{ display: "flex" }}>
              <h1 style={{ fontSize: "24px" }} className="text">
                Join Us!
              </h1>
              <img className="emoji" src="cool.avif"></img>
            </div>
            <p style={{ color: "#8E8E8E", marginBottom: "28px" }}>
              Please provide all current information accurately.
            </p>
          </div>
          <div className="first">
            <p>
              First name <span style={{ color: "red" }}>*</span>
            </p>
            <input
              onChange={handleInputChange}
              value={firstName}
              // className="prace"
              placeholder="Placeholder"
              onClick={() => setFilter("firstname")}
              // style={{
              //   borderColor: firstNameError !== true ? "#8E8E8E" : "red",
              // }}
        //     ></input>
        //     {firstNameError && (
        //       <p style={{ color: "red" }}>
        //         First name cannot contain special characters or numbers.
        //       </p>
        //     )}
        //     <p>
        //       Last name <span style={{ color: "red" }}>*</span>
        //     </p>
        //     <input
        //       onChange={handleChangeLastNameInput}
        //       value={lastname}
        //       className="prace"
        //       placeholder="Placeholder"
        //       onClick={() => setFilter("lastname")}
        //       style={{
        //         borderColor: lastNameError !== true ? "#8E8E8E" : "red",
        //       }}
        //     ></input>
        //     {lastNameError && (
        //       <p style={{ color: "red" }}>
        //         Last name cannot contain special characters or numbers.
        //       </p>
        //     )}
        //     <p>
        //       Username name <span style={{ color: "red" }}>*</span>
        //     </p>
        //     <input
        //       onChange={handleChangeUserNameInput}
        //       value={username}
        //       className="prace"
        //       placeholder="Placeholder"
        //       onClick={() => setFilter("username")}
        //       style={{
        //         borderColor: userNameError !== true ? "#8E8E8E" : "red",
        //       }}
        //     ></input>
        //     {userNameError && (
        //       <p style={{ color: "red" }}>
        //         "This username is already taken. Please choose another one."
        //       </p>
        //     )}
        //   </div>
        // </div>
        // <div className="button1">
        //   <button onClick={handleButtonClick} className="button">
        //     Continue
        //   </button>
        // </div>
    //   </div>
    // </div>
  );
}
