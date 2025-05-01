import { useState, useEffect } from "react";

const Card = ({ profile, onClose }) => {
  const [userInfo, setUserInfo] = useState({ status: "idle", data: null });

  const getUserInfo = async (user) => {
    setUserInfo({ status: "pending", data: null });
    try {
      const response = await fetch(`https://api.github.com/users/${user}`, {
        headers: {
          Authorization: `token ${import.meta.env.VITE_GITHUB_TOKEN}`,
        },
      });
      if (!response.ok) throw new Error("Network response was not ok");
      const data = await response.json();
      setUserInfo({ status: "resolved", data });
    } catch {
      setUserInfo({ status: "rejected", data: null });
    }
  };

  console.log(userInfo);

  useEffect(() => {
    if (profile) {
      getUserInfo(profile);
    }
  }, [profile]);

  return (
    <div>
      <button onClick={onClose}>x</button>
      {userInfo.status === "resolved" && (
        <div>
          <a href={userInfo.data.html_url} target="_blank">
            <img src={userInfo.data.avatar_url} />
            <p>{userInfo.data.name}</p>
          </a>
          <p>한줄소개: {userInfo.data.bio}</p>
          <p>팔로워: {userInfo.data.followers}</p>
          <p>팔로잉: {userInfo.data.following}</p>

          <p>
            깃허브 프로필 링크:
            <a href={userInfo.data.html_url}>{userInfo.data.html_url}</a>
          </p>
        </div>
      )}
    </div>
  );
};

export default Card;
