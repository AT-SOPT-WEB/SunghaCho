import { Link } from "react-router";

const SignUpName = () => {
  return (
    <>
      <h2>닉네임</h2>
      <input type="text" placeholder="닉네임을 입력해주세요" />
      <Link to="/signin">
        <button>회원가입 하기</button>
      </Link>
    </>
  );
};

export default SignUpName;
