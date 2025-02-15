import { useNavigate } from "react-router-dom";

function Logo() {
  const nav = useNavigate();
  return (
    <div
      onClick={() => nav("/Layout")}
      className="font-semibold text-[22px] text-blue-600 sm:text-4xl"
    >
      MORENT
    </div>
  );
}

export default Logo;
