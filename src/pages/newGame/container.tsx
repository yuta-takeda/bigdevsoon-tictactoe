import React, { useState } from "react";
import { Component } from "./component";

export const Container: React.FC = () => {
  const [isPlayerXFirst, setIsPlayerXFirst] = useState(true);

  const handleSetIsPlayerXFirst = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setIsPlayerXFirst(event.target.value === "true");
  };

  return (
    <Component
      isPlayerXFirst={isPlayerXFirst}
      handleSetIsPlayerXFirst={handleSetIsPlayerXFirst}
    />
  );
};
