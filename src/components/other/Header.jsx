import React from "react";

const Header = ({ data }) => {
  return (
    <>
      <header className="flex items-end justify-between">
        <h3 className="text-xl font-medium">Hello <br /> <span className="font-semibold text-2xl">{data?.name} 👋</span> </h3>
        <button className="text-white bg-red-500 px-5 py-2 font-lg font-medium cursor-pointer rounded-lg">Log Out</button>
      </header>
    </>
  );
};

export default Header;
