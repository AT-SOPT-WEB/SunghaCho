import { Link } from "react-router";

const Header = () => {
  return (
    <>
      <Link to="/mypage/info">내 정보</Link>
      <Link to="/mypage/search">회원 조회</Link>
      <Link to="/signin">로그아웃</Link>
      <p>닉네임</p>
    </>
  );
};

export default Header;
