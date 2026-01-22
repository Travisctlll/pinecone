"use client";
import { useState } from "react";

export const PasswordInput = ({
  label,
  name,
  value,
  onChange,
  error,
  errorMessage,
}) => {
  const [show, setShow] = useState(false);

  return (
    <div className="w-full mb-4 relative">
      <p className="text-sm mb-1 font-medium">
        {label} <span className="text-red-500">*</span>
      </p>

      <input
        type={show ? "text" : "password"}
        name={name}
        value={value}
        onChange={onChange}
        className={`w-full px-3 py-2 rounded-md border outline-none pr-10 ${
          error
            ? "border-red-500 bg-red-50 focus:ring-red-300"
            : "border-gray-300 focus:ring-blue-300"
        }`}
        placeholder={`Enter ${label.toLowerCase()}`}
      />

      <button
        type="button"
        onClick={() => setShow(!show)}
        className="absolute right-3 top-[34px] text-gray-500 text-sm"
      >
        {show ? "🙈" : "👁️"}
      </button>

      {error && <p className="text-red-500 text-sm mt-1">{errorMessage}</p>}
    </div>
  );
};
