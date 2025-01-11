// src/components/Introduction.js
import 'react';
import { Link } from 'react-router-dom';
import '../styles/Introduction.css';

const Introduction = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">Introduction</h1>
      <p className="mt-4 text-lg">This journal helps you keep track of your daily activities and thoughts.</p>
      <Link to="/login" className="mt-6 px-4 py-2 bg-blue-500 text-white rounded">
        Login / Sign Up
      </Link>
    </div>
  );
};

export default Introduction;