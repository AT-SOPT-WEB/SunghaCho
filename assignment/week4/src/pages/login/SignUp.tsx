import { useState } from "react";
import { Link } from "react-router";
import SignUpId from "../../components/login/SignUpId";
import SignUpPwd from "../../components/login/SignUpPwd";
import SignUpName from "../../components/login/SignUpName";

const SignUp = () => {
  type SignUpStep = "signupid" | "signuppwd" | "signupname";
  const [signupStep, setSignupStep] = useState<SignUpStep>("signupid");
  return (
    <>
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
    </>
  );
};

export default SignUp;
