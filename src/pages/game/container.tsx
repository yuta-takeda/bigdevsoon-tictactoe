import React from "react";
import { Component } from "./component";

export const Container: React.FC = () => {
  return (
    <Component yourIcon={"X"} currentPlayer={"X"} yourCount={0} cpuCount={0} />
  );
};
