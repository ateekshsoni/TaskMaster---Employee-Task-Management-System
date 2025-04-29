import React, { useState } from "react";

const LoginPage = (props) => {
  // State variables for form inputs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login attempted with:", { email, password });
    props.handleLogin(email, password); // Call the parent function to handle login
    // Reset form fields after submission
    setEmail("");
    setPassword("");
  };

  return (
    <>
      <div className="w-screen h-screen flex-col items-center justify-center bg-[#030303] relative text-white">
        <h1 className="text-center py-5 text-4xl font-bold drop-shadow-[0_0_8px_rgba(47,148,255,0.5)]">
          Welcome Back !!
        </h1>
        <div className="w-4/5 h-4/5 mx-auto my-auto flex justify-between items-center rounded-lg p-5">
          <div className="w-1/2">
            <img
              className=""
              src="https://cdni.iconscout.com/illustration/premium/thumb/task-management-4439170-3726785.png"
              alt=""
            />
          </div>
          <div className="flex flex-col gap-5 items-center w-1/2 justify-center">
            <h2 className="text-4xl font-bold">Login</h2>
            <form onSubmit={handleSubmit} className="flex w-2/4 flex-col gap-5">
              <input
                className="py-2 border-b-2 border-white bg-transparent outline-none"
                type="email"
                placeholder="example@email.com"
                aria-label="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className="border-b-2 border-white py-2 bg-transparent outline-none"
                type="password"
                placeholder="password"
                aria-label="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <a
                href="#"
                className="text-sm text-blue-800 hover:underline text-right"
              >
                forgot password
              </a>
              <input
                type="submit"
                value="Submit"
                className="bg-[#2f94ff] hover:scale-105 hover:bg-[#346090] transition-all font-bold px-4 m-auto cursor-pointer py-2 rounded-md w-1/2 "
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
