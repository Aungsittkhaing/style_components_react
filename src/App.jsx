import React, { useState } from "react";
import ACompo from "./components/ACompo";
import BCompo from "./components/BCompo";
import TextContextProvider from "./components/TextContextProvider";
const App = () => {
  const [title, setTitle] = useState("Title");
  return (
    <TextContextProvider>
      <div className="container">
        <h1 className="text-primary">Context API</h1>
        <ACompo title={title} />
        <BCompo title={title} />
      </div>
    </TextContextProvider>
  );
};

export default App;
