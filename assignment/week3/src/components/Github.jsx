import React, { useState } from "react";
import Input from "./github/Input";
import Recent from "./github/Recent";
import Card from "./github/Card";

const Github = () => {
  const [profile, setProfile] = useState("");
  const [recentList, setRecentList] = useState(() => {
    return JSON.parse(localStorage.getItem("recentSearches")) || [];
  });

  const handleSearch = (value) => {
    setProfile(value);
    console.log(value);

    const prev = JSON.parse(localStorage.getItem("recentSearches")) || [];
    if (prev.includes(value)) return;
    const recentLog = [value, ...prev.filter((item) => item !== value)].slice(
      0,
      3
    );
    localStorage.setItem("recentSearches", JSON.stringify(recentLog));
    setRecentList(recentLog);
  };

  const handleSearchRecent = (value) => {
    setProfile(value);
  };

  const handleClose = () => {
    setProfile("");
  };

  return (
    <div>
      <Input onSubmit={handleSearch} />
      <Recent
        recent={recentList}
        setRecentList={setRecentList}
        onSearch={handleSearchRecent}
      />
      {profile && <Card profile={profile} onClose={handleClose} />}
    </div>
  );
};

export default Github;
