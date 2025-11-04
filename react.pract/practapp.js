import { useState} from "react";

function App() {
    

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    function handleLogin(e) {
        e.preventDefualt();
    }

    alert(`Email: ${email}   Password: ${password}` );

}

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
       <form
       onSubmit={handleLogin}
       className="bg-white p-8  rounded-2xl shadow-md w-80">

        <h2 className="text-center font-bold text-2xl mb-6">Login</h2>

        <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) =>
setEmail(e.target.value)}
        className="border rounded  p-2 w-full mb-3"/>


        <input 
        type="password"
        placeholder="Enter Password"
        value={password}
        onChange={(e) =>
setPassword(e.target.value)}

        className="border p-2 rounded w-full mb-3"/>



        <button
        type

