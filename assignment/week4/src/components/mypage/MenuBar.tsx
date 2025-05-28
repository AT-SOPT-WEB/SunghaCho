/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router";

const wrapper = css`
  position: fixed;
  top : 5rem;
  left : 0rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width : 20rem;
  height: 12rem;
  padding : 1rem 0;
  align-items: center;
  font-size: 18px;
  background-color: black;
  color: white;
`;

const linkstyle = css`
  color: white;
  text-decoration: none;
`;

const MenuBar = () => {

  return (
    <div css={wrapper}>
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
  );
};

export default MenuBar;
