import { useState, useEffect } from "react";
import "./Loading.css";

function LoadingPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed inset-0 bg-cover bg-center bg-cityscape backdrop-blur-2xl flex items-center justify-center z-50 transition-opacity duration-1000 ${
        loading ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className={`transition-all duration-1000 ease-in-out transform ${
          loading ? "scale-100" : "scale-95"
        } flex flex-col items-center justify-center space-y-6`}
      >
        <div className="w-14 h-14 sm:w-28 sm:h-28 md:w-32 md:h-32 border-5 border-t-transparent border-blue-400 border-solid rounded-full animate-spin-slow"></div>
      </div>
    </div>
  );
}

export default LoadingPage;
