// src/components/Signup.js
import  'react';
import '../styles/Signup.css';

const Signup = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">Sign Up</h1>
      <form className="mt-4">
        <input type="text" placeholder="Username" className="p-2 border border-gray-300 rounded" />
        <input type="email" placeholder="Email" className="mt-2 p-2 border border-gray-300 rounded" />
        <input type="password" placeholder="Password" className="mt-2 p-2 border border-gray-300 rounded" />
        <button type="submit" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;