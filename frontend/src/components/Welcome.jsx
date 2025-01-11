// src/components/Welcome.js
import 'react';
import { Link } from 'react-router-dom';
import '../styles/Welcome.css';

const Welcome = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">Welcome to Your Daily Journal</h1>
      <p className="mt-4 text-lg">A place to capture your thoughts and activities.</p>
      <Link to="/introduction" className="mt-6 px-4 py-2 bg-blue-500 text-white rounded">
        Get Started
      </Link>
    </div>
  );
};

export default Welcome;