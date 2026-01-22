"use client";
import { useState } from "react";
import "./index.css";
import { FormInput } from "@/_components/form-input";
import { useRouter } from "next/navigation";

const checkIfInputHasSpeccialCharacters = (string) => {
  return /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(string);
};
const checkIfInputHasNumber = (string) => {
  return /\d/.test(string);
};

export default function Home() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    userName: "",
  });
  const [errorState, setErrorState] = useState({});

  const handleInputChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    setFormValues({ ...formValues, [inputName]: inputValue });
  };

  const validateInput = () => {
    const errors = {};

    if (!formValues.firstName.trim()) {
      errors.firstName = "First name is required";
    } else if (
      checkIfInputHasNumber(formValues.firstName) ||
      checkIfInputHasSpeccialCharacters(formValues.firstName)
    ) {
      errors.firstName = "First name should contain only letters";
    }

    if (!formValues.lastName.trim()) {
      errors.lastName = "Last name is required";
    } else if (
      checkIfInputHasNumber(formValues.lastName) ||
      checkIfInputHasSpeccialCharacters(formValues.lastName)
    ) {
      errors.lastName = "Last name should contain only letters";
    }

    if (!formValues.userName.trim()) {
      errors.userName = "User name is required";
    } else if (
      checkIfInputHasNumber(formValues.userName) ||
      checkIfInputHasSpeccialCharacters(formValues.userName)
    ) {
      errors.userName = "User name should contain only letters";
    }

    return errors;
  };

  const handleButtonClick = () => {
    setLoading(true);
    const errors = validateInput();

    if (Object.keys(errors).length === 0) {
      setErrorState({});
      setTimeout(() => {
        router.push("/pass");
      }, 800);
    } else {
      setErrorState(errors);
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <div className="main">
        <div className="box">
          <img className="logo" src="Main 1.png" />

          <div className="small">
            <div style={{ display: "flex" }}>
              <h1 style={{ fontSize: "24px" }} className="text">
                Join Us! 😎
              </h1>
            </div>
            <p style={{ color: "#8E8E8E", marginBottom: "28px" }}>
              Please provide all current information accurately.
            </p>
          </div>
          <div>
            <FormInput
              inputTag={"first Name"}
              handleChange={handleInputChange}
              name={"firstName"}
              value={formValues.firstName}
              error={errorState.firstName}
              errorMessage={"first Name error"}
            />
            <FormInput
              inputTag={"Last Name"}
              name={"lastName"}
              handleChange={handleInputChange}
              value={formValues.lastName}
              error={errorState.lastName}
              errorMessage={"last Name error"}
            />
            <FormInput
              inputTag={"User Name"}
              name={"userName"}
              handleChange={handleInputChange}
              value={formValues.userName}
              error={errorState.userName}
              errorMessage={"user Name error"}
            />
          </div>
        </div>
        <div className="button1">
          <button
            onClick={handleButtonClick}
            disabled={loading}
            className={`button flex items-center justify-center cursor-pointer gap-3 hover:bg-gray-800 transition ${
              loading ? "opacity-80 " : ""
            }`}
          >
            {loading ? (
              <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              "Continue 1/3"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
