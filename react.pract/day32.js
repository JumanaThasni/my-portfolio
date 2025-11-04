function App() {
  return (
    <div className="min-h-screen flex items-center justify-center
bg-gray-100">
    <div className="bg-white p-8 rounded-2xl shadow-lg w-80">
    <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
      Sign Up
    </h2>

    <form>
      <input
      type="text"
      placeholder="Full Name"
      className="w-full p-2 mb-3 border border-gray-300 rounded-lg"/>
      <input 
      type="email"
      placeholder="Email"
      className="w-full p-2 mb-3 border border-gray-300 rounded-lg"/>
      <input
       type="password"
       placeholder="Password"
       className="w-full p-2 mb-4 border border-gray-300 rounded-lg"/>
       <button 
       type="submit"
       className="w-full bg-blue-600 text-white py-2 rounded-lg
  hover:bg-blue-700">Create Account</button>
    </form>
    </div>
    </div>
  );
}

export default App;
