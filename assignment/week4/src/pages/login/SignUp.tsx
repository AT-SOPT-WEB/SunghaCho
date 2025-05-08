import { useState } from "react";
import { Link } from "react-router";
import Container from "../../components/styled/Container";
import SignUpId from "../../components/login/SignUpId";
import SignUpPwd from "../../components/login/SignUpPwd";
import SignUpName from "../../components/login/SignUpName";

const SignUp = () => {
  type SignUpStep = "signupid" | "signuppwd" | "signupname" | "done";
  const [signupStep, setSignupStep] = useState<SignUpStep>("signupid");
  return (
    <Container>
      <h1>회원가입</h1>
      {signupStep == "signupid" && (
        <SignUpId handleSignupStep={setSignupStep} />
      )}
      {signupStep == "signuppwd" && (
        <SignUpPwd handleSignupStep={setSignupStep} />
      )}
      {signupStep == "signupname" && <SignUpName />}
      <p>이미 회원이신가요?</p>
      <Link to="/signin">로그인</Link>
    </Container>
  );
};

export default SignUp;
