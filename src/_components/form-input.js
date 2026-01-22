export const FormInput = ({
  error,
  value,
  handleChange,
  inputTag,
  name,
  errorMessage,
  type = "text",
}) => {
  return (
    <div className="w-full">
      <p className="mb-1 text-sm font-medium">
        {inputTag} <span className="text-red-500">*</span>
      </p>

      {type === "file" ? (
        <label className="relative w-full h-[160px] border-2 border-black rounded-xl flex flex-col items-center justify-center cursor-pointer gap-2 overflow-hidden">
          <input
            type="file"
            name={name}
            accept="image/*"
            onChange={handleChange}
            className="hidden"
          />

          {!value ? (
            <>
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                📷
              </div>
              <p className="text-sm text-gray-500">Add image</p>
            </>
          ) : (
            <div className="w-16 h-16 rounded-full overflow-hidden border">
              <img
                src={URL.createObjectURL(value)}
                className="absolute  inset-0 w-full h-full object-cover"
              />
            </div>
          )}
        </label>
      ) : (
        <input
          type={type}
          onChange={handleChange}
          name={name}
          value={value}
          className={`w-full px-3 py-2 rounded-md border outline-none ${
            error
              ? "border-red-500 bg-red-50 focus:ring-red-300"
              : "border-gray-300 focus:ring-blue-300"
          }`}
          placeholder="placeholder"
        />
      )}

      {error && <p className="text-red-500 text-sm mt-1">{errorMessage}</p>}
    </div>
  );
};
