import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function LoginPage() {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await login(email, password);
    setLoading(false);
    if (res.success) {
      navigate("/dashboard");
    } else {
      setError(res.message);
    }
  };

  return (
    <div
      className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-10 md:gap-28 opacity-80  px-4 py-8 bg-center bg-cover bg-no-repeat font-[Quicksand] bg-[url(https://cdn.pixabay.com/photo/2015/09/21/17/54/rope-950355_1280.jpg)]"
    >
      

      <h1 className="text-center text-4xl md:text-5xl  lg:text-6xl font-bold text-black select-none">
        SHIPS <br /> MAINTENANCE
      </h1>



      <form
        onSubmit={handleLogin}
        className="w-full max-w-md bg-white/10 border-white/10 backdrop-blur-2xl rounded-[17px] p-6 text-white flex flex-col shadow-lg"
      >
        {error && <p className="text-red-400 text-center text-sm mb-2">{error}</p>}

        <label htmlFor="email" className="mt-2 text-lg font-bold select-none">
          Email
        </label>
        <input
          id="email"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mt-2 mb-4 px-4 py-3 text-sm font-light bg-black/20 border border-[#38363654] rounded placeholder:text-[#e5e5e5] hover:bg-[#434343] focus:bg-[#434343] focus:shadow-[0px_2px_2px_#0002,0px_5px_10px_#0006] outline-none transition-all duration-500"
          required
        />

        <label htmlFor="password" className="text-lg font-bold select-none">
          Password
        </label>
        <input
          id="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mt-2 mb-6 px-4 py-3 text-sm font-light bg-black/20 border border-[#38363654] rounded placeholder:text-[#e5e5e5] hover:bg-[#434343] focus:bg-[#434343] focus:shadow-[0px_2px_2px_#0002,0px_5px_10px_#0006] outline-none transition-all duration-500"
          required
        />

        <button
          type="submit"
          className="w-full px-4 py-3 text-lg font-semibold text-white bg-black/20 rounded-full hover:bg-[#3A59D1] focus:bg-[#629677] focus:outline-none focus:ring-4 focus:ring-[#676e6782] transition-all duration-500 disabled:opacity-50 select-none"
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
}