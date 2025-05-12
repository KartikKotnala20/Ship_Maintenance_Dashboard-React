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
      className="min-h-screen flex items-center gap-50 bg-center bg-cover bg-no-repeat font-[Quicksand] bg-[url(D:\ENTNT_PROJECT\Ship_Maintenance_Dashboard-React\src\assets\ship.jpg)]"
      // style={{
      //   backgroundImage:
      //     URL("../assets/ship"),
      // }}
    >
      <form
        onSubmit={handleLogin}
        className="w-[400px] h-[390px] ml-30 mt-10 bg-white/10  border-white/10 backdrop-blur-2xl rounded-[17px]  p-5 text-white flex flex-col "
      >
        {/* <h2 className="text-[40px] font-semibold text-center leading-[50px] mb-3">
          Login Here
        </h2> */}

        {error && <p className="text-red-400 text-center text-sm mb-2">{error}</p>}

        <label htmlFor="email" className="mt-6 text-[20px] font-extrabold select-none">
          Email
        </label>
        <input
          id="email"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mt-2 mb-4 px-4 py-[11px] text-sm font-light bg-black/20 border border-[#38363654] rounded placeholder:text-[#e5e5e5] hover:bg-[#434343] focus:bg-[#434343] focus:shadow-[0px_2px_2px_#0002,0px_5px_10px_#0006] outline-none transition-all duration-500"
          required
        />

        <label htmlFor="password" className="mt-4 text-[20px] font-extrabold select-none">
          Password
        </label>
        <input
          id="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full  mt-2 mb-4 px-4 py-[11px] text-sm font-light bg-black/20 border border-[#38363654] rounded placeholder:text-[#e5e5e5] hover:bg-[#434343] focus:bg-[#434343] focus:shadow-[0px_2px_2px_#0002,0px_5px_10px_#0006] outline-none transition-all duration-500"
          required
        />
        
       

        <button
          type="submit"
          className="w-64 mt-10 mb-4 ml-10 px-4 py-2 text-lg font-semibold text-[#e1e1e1] bg-black/20  rounded-full  cursor-pointer hover:bg-[#3A59D1] focus:bg-[#629677] focus:outline-none focus:ring-4 focus:ring-[#676e6782] transition-all duration-500 disabled:opacity-50 select-none"
          disabled={loading}
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        {/* <p className="text-white text-[18px] text-center">Login with a social media account</p> */}
      </form>
      <h1 className="flex text-center text-[60px] font-light select-none">SHIPS <br />MAINTENANCE</h1>
    </div>
  );
}