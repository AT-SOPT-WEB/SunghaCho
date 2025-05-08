import { useState } from "react";
import SignUpId from "./SignUpId";
import SignUpPwd from "./SignUpPwd";
import SignUpName from "./SignUpName";

type SignUpProps = {
  handleCurrentStep: (step: "signin" | "signup") => void;
};

const SignUp = ({ handleCurrentStep }: SignUpProps) => {
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
      <button onClick={() => handleCurrentStep("signin")}>로그인</button>
    </>
  );
};

export default SignUp;
