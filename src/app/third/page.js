"use client";
import { useState } from "react";
import "./index.css";
import { FormInput } from "@/_components/form-input";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const [formValues, setFormValues] = useState({
    birth: "",
    image: null,
  });

  const [errorState, setErrorState] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setFormValues({ ...formValues, [name]: files ? files[0] : value });
  };

  const validateInput = () => {
    const errors = {};

    if (!formValues.birth) {
      errors.birth = "Please select a date.";
    }

    if (!formValues.image) {
      errors.image = "Image cannot be blank";
    }

    return errors;
  };

  const handleSubmit = async () => {
    const errors = validateInput();

    if (Object.keys(errors).length > 0) {
      setErrorState(errors);
      return;
    }

    setErrorState({});
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      router.push("/success");
    }, 1500);
  };

  return (
    <div className="container">
      <div className="main ">
        <div className="box ">
          <img className="logo" src="Main 1.png" />

          <div className="small">
            <h1 className="text" style={{ fontSize: "24px" }}>
              Join Us! 😎
            </h1>
            <p style={{ color: "#8E8E8E", marginBottom: "28px" }}>
              Please provide all current information accurately.
            </p>
          </div>

          <div>
            <FormInput
              inputTag="Date of birth"
              type="date"
              name="birth"
              handleChange={handleInputChange}
              value={formValues.birth}
              error={errorState.birth}
              errorMessage={errorState.birth}
            />

            <FormInput
              inputTag="Profile image"
              type="file"
              name="image"
              handleChange={handleInputChange}
              value={formValues.image}
              error={errorState.image}
              errorMessage={errorState.image}
            />
          </div>
        </div>

        <div className="flex justify-center items-center gap-3">
          <button
            className="border w-[128px] h-[44px] rounded-[10px] cursor-pointer"
            onClick={() => router.back()}
          >
            back
          </button>
          <button
            onClick={handleSubmit}
            className="w-[280px] border bg-black h-[44px] text-white rounded-[10px] cursor-pointer hover:bg-gray-700 transition"
          >
            submit 3/3
          </button>{" "}
        </div>
      </div>
    </div>
  );
}
