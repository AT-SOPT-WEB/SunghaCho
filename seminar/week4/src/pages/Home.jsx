import React from "react";
import { Link } from "react-router";

const Home = () => {
  return (
    <div>
      <h1>포켓몬 도감</h1>
      <Link to="/pokemon/피카츄">
        <p>피카츄</p>
      </Link>
      <Link to="/pokemon/이상해씨">
        <p>이상해씨</p>
      </Link>
    </div>
  );
};

export default Home;
