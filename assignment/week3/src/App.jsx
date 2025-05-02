import React, { useState } from "react";
import Header from "./components/Header";
import Game from "./components/Game";
import Github from "./components/Github";
/** @jsxImportSource @emotion/react */
import { Global, css } from "@emotion/react";

const container = css`
  width: 100vw;
  display: grid;
  background-color: #eaeaea;
`;

const wrapper = css`
  display: grid;
  width: 100vw;
  height: 100vh;
  justify-items: center;
  margin-top: 10px;
  background-color: #eaeaea;
`;

function App() {
  const [activeTab, setActiveTab] = useState("github");
  return (
    <div css={container}>
      <Global
        styles={css`
          @import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable.min.css");
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: "Pretendard Variable", Pretendard, sans-serif;
          }

          body {
            background-color: #fff;
            color: #000;
          }
        `}
      />
      <Header onTabChange={setActiveTab} tab={activeTab} />
      <div css={wrapper}>
        {activeTab === "github" && <Github />}
        {activeTab === "game" && <Game />}
      </div>
    </div>
  );
}

export default App;
