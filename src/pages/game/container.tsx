import React, { useState } from "react";
import { Component } from "./component";
import { useSearchParams } from "react-router-dom";

type Icon = "X" | "O";

export const Container: React.FC = () => {
  const [searchParams] = useSearchParams();
  const player = searchParams.get("player") as Icon;
  const [currentPlayer, setCurrentPlayer] = useState<Icon>(player);

  return (
    <Component
      yourIcon={player}
      currentPlayer={currentPlayer}
      yourCount={0}
      cpuCount={0}
    />
  );
};
