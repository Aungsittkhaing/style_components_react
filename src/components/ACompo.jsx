import React, { useContext } from "react";
import { useTitleContext } from "./TextContextProvider";

const ACompo = () => {
  const { title } = useTitleContext();
  return (
    <>
      <h2>A Compo : {title}</h2>
      <p></p>
    </>
  );
};

export default ACompo;
