/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import { Link, useNavigate } from "react-router";
import { ROUTES } from "../../router/routesPath"
import Container from "../../components/styled/Container";
import Title from "../../components/styled/Title";
import SignUpId from "../../components/login/SignUpId";
import SignUpPwd from "../../components/login/SignUpPwd";
import SignUpName from "../../components/login/SignUpName";
import { postSignUp } from "../../api/auth";

const divstyle = css`
  display: flex;
  gap: 0.6rem;
`;
const linkstyle = css`
  color: black;
  font-weight: 500;
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
      await postSignUp({
        loginId: newId,
        password: newPwd,
        nickname: nickname,
      });
      alert(`${nickname}님, 회원 가입을 축하드립니다!`);
      navigate(ROUTES.SIGN_IN);
    } catch (error) {
      console.error("회원가입 실패", error);
      alert("회원가입 실패");
    }
  };

  return (
    <Container>
      <Title>회원가입</Title>
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
      <div css={divstyle}>
        <p>이미 회원이신가요?</p>
        <Link to={ROUTES.SIGN_IN} css={linkstyle}>
          로그인
        </Link>
      </div>
    </Container>
  );
};

export default SignUp;
