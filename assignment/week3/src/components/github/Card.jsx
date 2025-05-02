import { useState, useEffect } from "react";
/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react";

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const spinner = css`
  width: 50px;
  height: 50px;
  border: 5px solid #f3f3f3;
  border-top: 5px solid #7a7a7a;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

const divBox = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 500px;
`;

const container = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #ffffff;
  border-radius: 30px;
  margin-top: 20px;
  text-align: center;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
`;

const btnWrapper = css`
  width: 94%;
  margin-top: 20px;
  display: flex;
  justify-content: right;
`;

const closeBtn = css`
  border: none;
  background-color: #ffffff;
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const iconStyle = css`
  width: 25px;
  height: 25px;
  cursor: pointer;
`;

const imgBox = css`
  width: 300px;
  height: 300px;
  border-radius: 300px;
  border: 2px solid #e2e2e2;
  overflow: hidden;
  justify-content: center;
  margin-top: 20px;
`;

const img = css`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const aStyle = css`
  color: inherit;
  text-decoration: none;
`;

const idText = css`
  margin: 15px 0px;
  font-size: 26px;
  font-weight: 600;
`;

const nameText = css`
  font-size: 20px;
  font-weight: 400;
  color: #7a7a7a;
`;

const bioText = css`
  margin: 10px 0px;
  font-size: 15px;
  color: #7a7a7a;
`;

const followBox = css`
  display: flex;
  gap: 12px;
  justify-content: center;
  margin: 0;
  font-size: 16px;
  font-weight: 400;
  color: #4a4a4a;
`;

const followText = css`
  margin: 10px 0px 5px 0px;
`;

const urlStyle = css`
  margin: 5px 0px 25px 0px;
  color: #878787;
`;

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
    <>
      {userInfo.status === "resolved" && (
        <div css={container}>
          <div css={btnWrapper}>
            <button onClick={onClose} css={closeBtn}>
              <img src="/close.png" css={iconStyle} />
            </button>
          </div>
          <div>
            <a href={userInfo.data.html_url} css={aStyle} target="_blank">
              <div css={imgBox}>
                <img css={img} src={userInfo.data.avatar_url} />
              </div>
              <p css={idText}>{userInfo.data.login}</p>
              <p css={nameText}>{userInfo.data.name}</p>
            </a>
            <p css={bioText}>{userInfo.data.bio}</p>
            <div css={followBox}>
              <p css={followText}>{userInfo.data.followers} followers </p>
              <p css={followText}>{userInfo.data.following} following </p>
            </div>
            <p css={urlStyle}>
              <a href={userInfo.data.html_url} css={aStyle}>
                {userInfo.data.html_url}
              </a>
            </p>
          </div>
        </div>
      )}
      <div css={divBox}>
        {userInfo.status === "pending" && <div css={spinner}></div>}
        {userInfo.status === "rejected" && <div>검색 결과가 없습니다.</div>}
      </div>
    </>
  );
};

export default Card;
