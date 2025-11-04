import { useState } from "react";


function App() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  function handleLogin(e) {
    e.preventDefault();

    alert(`Email: ${email}  password:  ${password}`);
  }


  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <form 
      onSubmit={handleLogin}
      className="bg-white p-8 rounded-2xl shadow-md w-80">

        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

        <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) =>
setEmail(e.target.value)}
       className="border p-2 w-full rounded mb-3"/>

       <input
       type="password"
       placeholder="Enter Password"
       value={password}
       onChange={(e) =>
setPassword(e.target.value)}
       className="border p-2 w-full rounded mb-3"/>

       <button
       type="submit"
       className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700">
        Login
       </button>
        </form>
    </div>
  );
}

export default App;
