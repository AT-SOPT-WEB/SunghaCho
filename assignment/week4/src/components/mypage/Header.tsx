/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link, useNavigate } from "react-router";
import { AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import { ROUTES } from "../../router/routesPath"
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
  padding: 0 2rem;
  font-size: 1.125rem;
  background-color: black;
  color: white;
`;

const menuBox = css`
  display: flex;
  gap: 2rem;

    @media (min-width: 768px) {
    display: none;
  }
`;

const tabBox = css`
  display: flex;
  gap: 2rem;

    @media (max-width: 768px) {
    display: none;
  }
`;

const linkstyle = css`
  color: white;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

const iconstyle = css`
  width : 18px;
  cursor: pointer;
`;

const Header = () => {
  const [myNickname, setMyNickname] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  const handleMenuClick = () => {
    setIsMenuOpen(prev => !prev)
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

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("userId");
    navigate(ROUTES.SIGN_IN);
  };

  return (
    <>
    <div css={wrapper}>
      <div css={menuBox}>
              { isMenuOpen ? 
        <img src={closeIcon} css={iconstyle} onClick={() => handleMenuClick()}/> :
        <img src={menuIcon} css={iconstyle} onClick={() => handleMenuClick()}/>}</div>
      <div css={tabBox}>
        <Link to={ROUTES.MYPAGE_INFO} css={linkstyle}>
          내 정보
        </Link>
        <Link to={ROUTES.MYPAGE_SEARCH} css={linkstyle}>
          회원 조회
        </Link>
        <div onClick={handleLogout}
          css={linkstyle}
        >
          로그아웃
        </div>
      </div>
      <p>{myNickname}</p>
      <AnimatePresence>
        {isMenuOpen && <MenuBar />}
      </AnimatePresence>
    </div>
    </>
  );
};

export default Header;
