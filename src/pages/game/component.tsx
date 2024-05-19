import React from "react";
import xIcon from "../../assets/x.svg";
import oIcon from "../../assets/o.svg";
import { Link } from "react-router-dom";

interface Props {
  yourIcon: "X" | "O";
  currentPlayer: "X" | "O";
  yourCount: number;
  cpuCount: number;
}

export const Component: React.FC<Props> = (props) => {
  const { yourIcon, currentPlayer, yourCount, cpuCount } = props;

  return (
    <>
      <div
        className="flex flex-col justify-between items-center"
        style={{ width: "500px" }}
      >
        <div className="flex flex-row justify-between items-center py-8 px-2 w-full">
          <div className="flex flex-row">
            <img src={xIcon} alt="x" width="64" />
            <img src={oIcon} alt="o" width="64" />
          </div>
          <div className="flex flex-row justify-center p-4 w-48 rounded-lg bg-slate-100">
            <img
              src={currentPlayer === "X" ? xIcon : oIcon}
              width="32"
              alt="currentPlayer"
            />
            TURN
          </div>
        </div>
        <div
          className="grid gap-2 p-4 rounded-lg bg-slate-100"
          style={{
            gridTemplateColumns: "repeat(3, 150px)",
          }}
        >
          {[...Array(9)].map((_, i) => {
            return (
              <div
                className="relative h-0 bg-white"
                style={{ paddingBottom: "100%" }}
                key={i}
              >
                <div className="absolute inset-0 w-full h-full"></div>
              </div>
            );
          })}
        </div>
        <div className="flex flex-row gap-4 p-4 w-full text-center">
          <div className="p-4 w-full bg-lime-200 rounded-lg grow">
            {yourIcon === "X" ? (
              <>
                <p>X (YOU)</p>
                <p>{yourCount}</p>
              </>
            ) : (
              <>
                <p>X (CPU)</p>
                <p>{cpuCount}</p>
              </>
            )}
          </div>
          <div className="p-4 w-full bg-orange-200 rounded-lg grow">
            {yourIcon === "O" ? (
              <>
                <p>O (YOU)</p>
                <p>{yourCount}</p>
              </>
            ) : (
              <>
                <p>O (CPU)</p>
                <p>{cpuCount}</p>
              </>
            )}
          </div>
        </div>
        <Link
          className="py-2 m-4 w-full text-center rounded-3xl bg-slate-300 hover:bg-slate-400"
          to={"/new_game"}
        >
          Reset Game
        </Link>
      </div>
    </>
  );
};