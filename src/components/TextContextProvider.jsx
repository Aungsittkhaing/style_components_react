import React, { createContext, useContext, useState } from "react";

const TitleContext = createContext();

export const useTitleContext = () => useContext(TitleContext);
const TextContextProvider = (props) => {
  const [title, setTitle] = useState("testing");

  const changeBtn = () => {
    let d = "Testing" + Math.ceil(Math.random(0, 1) * 1000);
    setTitle(d);
  };
  const data = { title, changeBtn };

  return (
    <TitleContext.Provider value={data}>{props.children}</TitleContext.Provider>
  );
};

export default TextContextProvider;
