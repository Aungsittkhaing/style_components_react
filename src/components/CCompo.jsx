import React, { useContext } from "react";
import { useTitleContext } from "./TextContextProvider";

const CCompo = () => {
  const { title, changeBtn } = useTitleContext();
  return (
    <>
      <h2>C Compo</h2>
      <p>{title}</p>
      <button onClick={changeBtn} className="btn btn-danger">
        Change
      </button>
    </>
  );
};

export default CCompo;
