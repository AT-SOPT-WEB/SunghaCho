/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router";
import { useState, useEffect } from "react";
import axios from "axios";

const wrapper = css`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 5rem;
  align-items: center;
  padding: 0 3rem;
  font-size: 18px;
  background-color: black;
  color: white;
`;

const tabBox = css`
  display: flex;
  gap: 2rem;
`;

const linkstyle = css`
  color: white;
  text-decoration: none;
`;

interface UserResponse {
  data: {
    nickname: string;
  };
}

const Header = () => {
  const [myNickname, setMyNickname] = useState<string | undefined>(undefined);

  useEffect(() => {
    const userId = localStorage.getItem("userId");

    const getMyNickname = async () => {
      try {
        const res = await axios.get<UserResponse>(
          `${import.meta.env.VITE_API_BASE_URL}/api/v1/users/me`,
          {
            headers: {
              userId,
            },
          }
        );
        console.log(res.data);
        setMyNickname(res.data.data.nickname);
      } catch (error) {
        console.error("내 닉네임 조회 실패", error);
      }
    };

    getMyNickname();
  }, []);

  return (
    <div css={wrapper}>
      <div css={tabBox}>
        <Link to="/mypage/info" css={linkstyle}>
          내 정보
        </Link>
        <Link to="/mypage/search" css={linkstyle}>
          회원 조회
        </Link>
        <Link
          to="/signin"
          onClick={() => {
            localStorage.removeItem("userId");
          }}
          css={linkstyle}
        >
          로그아웃
        </Link>
      </div>
      <p>{myNickname}</p>
    </div>
  );
};

export default Header;
