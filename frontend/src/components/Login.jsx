// src/components/Login.js
import 'react';
import '../styles/Login.css';

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">Login</h1>
      <form className="mt-4">
        <input type="text" placeholder="Username" className="p-2 border border-gray-300 rounded" />
        <input type="password" placeholder="Password" className="mt-2 p-2 border border-gray-300 rounded" />
        <button type="submit" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;