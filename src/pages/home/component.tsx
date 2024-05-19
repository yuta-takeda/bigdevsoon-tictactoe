import React from "react";
import logo from "./assets/logo.svg";

export const HomeComponent: React.FC = () => {
  return (
    <div className="flex flex-col justify-center items-center w-screen h-screen">
      <img src={logo} alt={logo} width={200} className="pb-12" />
      <h1 className="m-4 font-sans text-6xl font-black">Tic Tac Toe</h1>
      <h2 className="m-4 text-lg text-center">
        Dive into the excitement now and experience
        <br />
        the timeless joy of this classic game!
      </h2>
      <button className="py-2 px-32 m-4 rounded-3xl bg-sky-300 hover:bg-sky-200">
        New Game
      </button>
    </div>
  );
};
