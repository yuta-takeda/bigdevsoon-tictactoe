import React, { useState } from "react";
import { Component } from "./component";
import { useSearchParams } from "react-router-dom";
import xIcon from "../../assets/x.svg";
import oIcon from "../../assets/o.svg";

export type Icon = "X" | "O";
export type FieldIcon = Icon | null;

export const Container: React.FC = () => {
  const [searchParams] = useSearchParams();
  const player = searchParams.get("player") as Icon;
  const [currentPlayer, setCurrentPlayer] = useState<Icon>(player);
  const fieldSize = 3;
  const [field, setField] = useState<FieldIcon[][]>([
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]);
  const [yourCount, setYourCount] = useState<number>(0);
  const [cpuCount, setCpuCount] = useState<number>(0);

  const handlePlace = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLDivElement;
    const x = target.dataset.x;
    const y = target.dataset.y;
    if (field[Number(y)][Number(x)] !== null) {
      return;
    }

    const newField = field.map((row, fieldY) => {
      return row.map((val, fieldX) => {
        if (fieldY === Number(y) && fieldX === Number(x) && val === null) {
          return currentPlayer;
        } else {
          return val;
        }
      });
    });
    console.log(newField);
    setField(newField);
    setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
    setYourCount(currentPlayer === player ? yourCount + 1 : yourCount);
    setCpuCount(currentPlayer !== player ? cpuCount + 1 : cpuCount);
  };

  return (
    <Component
      yourIcon={player}
      currentPlayer={currentPlayer}
      yourCount={yourCount}
      cpuCount={cpuCount}
      handlePlace={handlePlace}
      field={field}
    />
  );
};
