export const StepButton = ({
  step = 1,
  total = 3,
  loading = false,
  disabled = false,
  onClick,
}) => {
  const isLast = step === total;

  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      className={`w-[280px] h-[44px] rounded-[12px] flex items-center justify-center gap-2 font-medium transition
        ${
          disabled
            ? "bg-gray-200 text-gray-400 cursor-not-allowed"
            : "bg-black text-white hover:opacity-90"
        }`}
    >
      {loading ? (
        <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
      ) : (
        <>
          {isLast ? "Submit" : "Continue"} {step}/{total}
          <span className="text-lg">›</span>
        </>
      )}
    </button>
  );
};
