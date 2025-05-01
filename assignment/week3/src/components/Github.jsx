import React, { useState } from "react";
import Input from "./github/Input";
import Card from "./github/Card";

const Github = () => {
  const [profile, setProfile] = useState("");
  const handleSearch = (value) => {
    setProfile(value);
    console.log(value);
  };

  console.log(profile);

  return (
    <>
      <Input onSubmit={handleSearch} />
      <Card profile={profile} />
    </>
  );
};

export default Github;
