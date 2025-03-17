import React, { useState } from "react";

const Login = (props) => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    props.handleLogin(email, password);
    console.log("Form Submitted");
    setemail("");
    setpassword("");
  };

  return (
    <>
      <div className="h-screen w-full flex items-center bg-gray-900 justify-center text-white p-4">
        <div className="border-2 border-blue-500 p-8 md:p-20 rounded-xl w-full max-w-md bg-gray-800 shadow-lg">
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
            className="flex flex-col items-center justify-center "
          >
            <input
              required
              onChange={(e) => {
                setemail(e.target.value);
              }}
              value={email}
              className="border-2 outline-none bg-transparent placeholder:text-gray-400 py-4 text-lg px-5 border-blue-500 rounded-full w-full transition duration-300 ease-in-out focus:border-blue-300 focus:bg-gray-700"
              type="email"
              placeholder="Enter your email"
            />
            <input
              required
              onChange={(e) => {
                setpassword(e.target.value);
              }}
              value={password}
              className="border-2 outline-none bg-transparent mt-3 placeholder:text-gray-400 py-4 text-lg px-5 border-blue-500 rounded-full w-full transition duration-300 ease-in-out focus:border-blue-300 focus:bg-gray-700"
              type="password"
              placeholder="Enter your password"
            />
            <button
              type="submit"
              className="text-white border-none bg-blue-500 mt-4 px-5 rounded-full py-2 w-full transition duration-300 ease-in-out hover:bg-blue-400"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
export default Login;
