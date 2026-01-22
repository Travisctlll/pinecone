import "../index.css";
export default function Home() {
  return (
    <div>
      <div className="w-[480px] h-[193px] border rounded-[5px] bg-white flex flex-col gap-[8px]">
        <img src="Main 1.png" className="w-[60px] h-[60px]" alt="icon" />
        <p className="font-black text-3xl">{"You're All Set 🔥"}</p>
        <p className="text-[#8E8E8E]">
          We have received your submission. Thank you!
        </p>
      </div>
    </div>
  );
}
