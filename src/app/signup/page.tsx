"use client";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

function SignupPage() {
  const [user, setUser] = useState({
    email: "",
    username: "",
    password: "",
  });

  const onSignup = async () => {};

  return (
    <div className="text-white">
      <h1 className="text-2xl text-center bg-blue-500 p-4">SignUp</h1>
      <div className="m-10 w-1/3 bg-gray-600 flex flex-col text-center p-4 rounded-lg">
        <label htmlFor="username">Username </label>
        <br />
        <input
          className="border-none rounded-lg mx-1 px-1 text-cyan-600"
          type="text"
          value={user.username}
          onChange={(e) => setUser({ ...user, username: e.target.value })}
          placeholder="Username"
          name=""
          id="username"
        />
        <br />
        <br />
        <label htmlFor="email">email </label>
        <br />
        <input
          className="border-none rounded-lg mx-1 px-1 text-cyan-600"
          type="text"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          placeholder="email"
          name=""
          id="email"
        />
        <br />
        <br />
        <label htmlFor="password">Password </label>
        <br />
        <input
          className="border-none rounded-lg mx-1 px-1 text-cyan-600"
          type="password"
          value={user.password}
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          placeholder="password"
          name=""
          id="password"
        />
        <br />
        <br />
        <button
          className="bg-green-500 p-2 border-none rounded-lg hover:bg-blue-400"
          onClick={onSignup}
        >
          Sign Up
        </button>
        <br />
        
        <Link className="text-gray-400" href='/login' target="#"> Visit Login </Link>
      </div>
    </div>
  );
}

export default SignupPage;
