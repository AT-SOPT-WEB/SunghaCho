/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import Container from "../../components/styled/Container";
import SignUpId from "../../components/login/SignUpId";
import SignUpPwd from "../../components/login/SignUpPwd";
import SignUpName from "../../components/login/SignUpName";
import { postSignUp } from "../../api/auth";

const linkstyle = css`
  color: black;
`;

const SignUp = () => {
  type SignUpStep = "signupid" | "signuppwd" | "signupname";
  const [signupStep, setSignupStep] = useState<SignUpStep>("signupid");
  const [newId, setNewId] = useState("");
  const [newPwd, setNewPwd] = useState("");
  const [nickname, setNickname] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async () => {
    try {
      const res = await postSignUp({
        loginId: newId,
        password: newPwd,
        nickname: nickname,
      });
      alert(`${res.nickname}님, 회원 가입을 축하드립니다!`);
      navigate("/signin");
    } catch (error) {
      console.error("회원가입 실패", error);
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
          handleSignupStep={handleSignUp}
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
