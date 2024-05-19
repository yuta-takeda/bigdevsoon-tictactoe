import React from "react";
import xIcon from "../../assets/x.svg";
import oIcon from "../../assets/o.svg";
import { Link } from "react-router-dom";

interface Props {
  isPlayerXFirst: boolean;
  handleSetIsPlayerXFirst: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Component: React.FC<Props> = (props) => {
  const { isPlayerXFirst, handleSetIsPlayerXFirst } = props;

  return (
    <>
      <h1 className="my-8 text-xl font-bold">Pick player 1st mark</h1>
      <div className="flex flex-col justify-center items-center py-8 px-16 rounded-xl bg-slate-100">
        <div className="flex flex-row pb-8">
          <div className="flex flex-col justify-center items-center">
            <img src={xIcon} alt={"x player"} />
            <input
              type="radio"
              name="player"
              value="true"
              onChange={(event) => {
                handleSetIsPlayerXFirst(event);
              }}
            />
          </div>
          <div className="flex flex-col justify-center items-center">
            <img src={oIcon} alt={"o player"} />
            <input
              type="radio"
              name="player"
              value="false"
              onChange={(event) => {
                handleSetIsPlayerXFirst(event);
              }}
            />
          </div>
        </div>
        <p className="font-bold">
          {`REMEMBER: ${isPlayerXFirst ? "X" : "O"} IS GOING FIRST`}
        </p>
      </div>
      <Link
        className="py-2 px-32 m-4 my-8 rounded-3xl bg-sky-300 hover:bg-sky-200"
        to={"/new_game"}
      >
        Start Game
      </Link>
    </>
  );
};
