/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router";
import { useState, useEffect } from "react";
import { getMyNickname } from "../../api/users";
import menuIcon from "../../assets/menuIcon.svg"
import closeIcon from "../../assets/closeIcon.svg"
import MenuBar from "./MenuBar";


const wrapper = css`
  position: fixed;
  top: 0;
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

const iconstyle = css`
  width : 18px;
  cursor: pointer;
`;

const Header = () => {
  const [myNickname, setMyNickname] = useState<string | undefined>(undefined);
  const [isMenuOpen, setIsMeuOpen] = useState<boolean>(false);

  const handleMenuClick = () => {
    setIsMeuOpen(!isMenuOpen)
  }

  useEffect(() => {
    const userId = localStorage.getItem("userId");

    const fetchNickname = async () => {
      if (userId) {
        try {
          const data = await getMyNickname(userId);
          setMyNickname(data.data.nickname);
        } catch (error) {
          console.error("닉네임 조회 실패", error);
        }
      }
    };

    fetchNickname();
  }, []);

  return (
    <>
    <div css={wrapper}>
      <div css={tabBox}>
        { isMenuOpen ? 
        <img src={closeIcon} css={iconstyle} onClick={() => handleMenuClick()}/> :
        <img src={menuIcon} css={iconstyle} onClick={() => handleMenuClick()}/>}
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
      { isMenuOpen && <MenuBar/>}
    </div>
    </>
  );
};

export default Header;
