/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router";
import { motion } from "framer-motion";
import { ROUTES } from "@router/routesPath"

const wrapper = css`
  position: fixed;
  top : 5rem;
  left : 0rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width : 100%;
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

  &:hover {
    text-decoration: underline;
  }
`;

const menuVariants = {
  hidden: {
    y: "-10%",
    opacity: 0,
  },
  visible: {
    y: "0%",
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
  exit: {
    y: "-10%",
    opacity: 0,
    transition: {
      duration: 0.3,
      ease: "easeInOut",
    },
  },
};

const MenuBar = () => {

  return (
    <motion.div
      css={wrapper}
      variants={menuVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
        <Link to={ROUTES.MYPAGE_INFO} css={linkstyle}>
          내 정보
        </Link>
        <Link to={ROUTES.MYPAGE_SEARCH} css={linkstyle}>
          회원 조회
        </Link>
        <Link
          to={ROUTES.SIGN_IN}
          onClick={() => {
            localStorage.removeItem("userId");
          }}
          css={linkstyle}
        >
          로그아웃
        </Link>
    </motion.div>
  );
};

export default MenuBar;
