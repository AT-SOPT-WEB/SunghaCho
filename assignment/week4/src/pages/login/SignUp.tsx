/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import axios from "axios";
import Container from "../../components/styled/Container";
import SignUpId from "../../components/login/SignUpId";
import SignUpPwd from "../../components/login/SignUpPwd";
import SignUpName from "../../components/login/SignUpName";

const linkstyle = css`
  color: black;
`;

const SignUp = () => {
  type SignUpStep = "signupid" | "signuppwd" | "signupname";
  const [signupStep, setSignupStep] = useState<SignUpStep>("signupid");
  const [newId, setNewId] = useState<string>("");
  const [newPwd, setNewPwd] = useState<string>("");
  const [nickname, setNickname] = useState<string>("");
  const navigate = useNavigate();

  const postSignUp = async () => {
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/api/v1/auth/signup`,
        {
          loginId: newId,
          password: newPwd,
          nickname: nickname,
        }
      );
      console.log(res.data);
      alert(`${res.data.nickname}님, 회원 가입을 축하드립니다!`);
      navigate("/signin");
    } catch (error) {
      console.error("아이디 중복 확인에 실패했습니다.", error);
      alert("회원가입 실패");
    }
  };

  return (
    <Container>
      <h1>회원가입</h1>
      {signupStep === "signupid" && (
        <SignUpId
          newId={newId}
          setNewId={setNewId}
          handleSignupStep={setSignupStep}
        />
      )}
      {signupStep === "signuppwd" && (
        <SignUpPwd
          newPwd={newPwd}
          setNewPwd={setNewPwd}
          handleSignupStep={setSignupStep}
        />
      )}
      {signupStep === "signupname" && (
        <SignUpName
          nickname={nickname}
          setNickname={setNickname}
          handleSignupStep={postSignUp}
        />
      )}
      <p>이미 회원이신가요?</p>
      <Link to="/signin" css={linkstyle}>
        로그인
      </Link>
    </Container>
  );
};

export default SignUp;
