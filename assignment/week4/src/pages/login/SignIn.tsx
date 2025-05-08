import { Link } from "react-router";

const SignIn = () => {
  return (
    <>
      <h1>로그인</h1>
      <input type="text" placeholder="아이디" />
      <input type="text" placeholder="비밀번호" />
      <button>로그인</button>
      <Link to="/signup">회원가입</Link>
    </>
  );
};

export default SignIn;
