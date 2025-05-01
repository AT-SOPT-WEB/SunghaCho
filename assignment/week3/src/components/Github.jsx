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

  const handleClose = () => {
    setProfile("");
  };

  return (
    <>
      <Input onSubmit={handleSearch} />
      {profile && <Card profile={profile} onClose={handleClose} />}
    </>
  );
};

export default Github;
