import React, { useState } from "react";
import Header from "./components/Header";
import Game from "./components/Game";
import Github from "./components/Github";

function App() {
  const [activeTab, setActiveTab] = useState(null);
  return (
    <>
      <Header onTabChange={setActiveTab} />

      {activeTab === "github" && <Github />}
      {activeTab === "game" && <Game />}
    </>
  );
}

export default App;
