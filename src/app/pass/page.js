"use client";
import { useState } from "react";
import "./index.css";
import { FormInput } from "@/_components/form-input";
import { useRouter } from "next/navigation";
import { PasswordInput } from "@/_components/password";

export default function Home() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const [formValues, setFormValues] = useState({
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [errorState, setErrorState] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const validateInput = () => {
    const errors = {};

    if (!formValues.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      errors.email = "Invalid email format";
    }

    if (!formValues.phone.trim()) {
      errors.phone = "Phone number is required";
    } else if (!/^\d+$/.test(formValues.phone)) {
      errors.phone = "Phone must contain only numbers";
    }

    if (!formValues.password.trim()) {
      errors.password = "Password is required";
    } else if (formValues.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }

    if (!formValues.confirmPassword.trim()) {
      errors.confirmPassword = "Confirm your password";
    } else if (formValues.confirmPassword !== formValues.password) {
      errors.confirmPassword = "Passwords do not match";
    }

    return errors;
  };

  const handleButtonClick = () => {
    setLoading(true);
    const errors = validateInput();

    if (Object.keys(errors).length === 0) {
      setErrorState({});
      setTimeout(() => {
        router.push("/third");
      }, 700);
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
            <h1 className="text text-[24px]">Join Us! 😎</h1>
            <p className="text-[#8E8E8E] mb-[28px]">
              Please provide all current information accurately.
            </p>
          </div>

          <div>
            <FormInput
              inputTag="Email"
              name="email"
              handleChange={handleInputChange}
              value={formValues.email}
              error={errorState.email}
              errorMessage={errorState.email}
            />

            <FormInput
              inputTag="Phone number"
              name="phone"
              handleChange={handleInputChange}
              value={formValues.phone}
              error={errorState.phone}
              errorMessage={errorState.phone}
            />

            <PasswordInput
              label="Password"
              name="password"
              value={formValues.password}
              onChange={handleInputChange}
              error={errorState.password}
              errorMessage={errorState.password}
            />

            <PasswordInput
              label="Confirm password"
              name="confirmPassword"
              value={formValues.confirmPassword}
              onChange={handleInputChange}
              error={errorState.confirmPassword}
              errorMessage={errorState.confirmPassword}
            />
          </div>
        </div>

        <div className="flex justify-center items-center gap-3">
          <button
            className="border w-[128px] h-[44px] rounded-[10px]"
            onClick={() => router.back()}
            disabled={loading}
          >
            Back
          </button>

          <button
            onClick={handleButtonClick}
            disabled={loading}
            className="w-[280px] h-[44px] rounded-[10px] bg-black text-white flex items-center justify-center gap-2 disabled:opacity-80 hover:bg-gray-700 cursor-pointer transition"
          >
            {loading ? (
              <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              "Continue 2/3"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
