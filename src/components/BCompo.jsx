import React, { useContext, useState } from "react";
import CCompo from "./CCompo";
import { useTitleContext } from "./TextContextProvider";

const BCompo = () => {
  const { title, changeBtn } = useTitleContext();

  return (
    <div>
      <>
        <h2>B Compo : {title}</h2>
        <button className="btn btn-primary btn-sm" onClick={changeBtn}>
          Change
        </button>
        <CCompo />
      </>
    </div>
  );
};

export default BCompo;
