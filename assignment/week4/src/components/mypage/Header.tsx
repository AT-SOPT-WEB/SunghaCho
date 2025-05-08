/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router";

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

const Header = () => {
  return (
    <div css={wrapper}>
      <div css={tabBox}>
        <Link to="/mypage/info" css={linkstyle}>
          내 정보
        </Link>
        <Link to="/mypage/search" css={linkstyle}>
          회원 조회
        </Link>
        <Link to="/signin" css={linkstyle}>
          로그아웃
        </Link>
      </div>
      <p>닉네임</p>
    </div>
  );
};

export default Header;
