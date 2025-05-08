import { useState } from "react";
import SignIn from "../components/login/SignIn";
import SignUpId from "../components/login/SignUpId";
import SignUpPwd from "../components/login/SignUpPwd";
import SignUpName from "../components/login/SignUpName";

const Login = () => {
  type loginStep = "signin" | "signupid" | "signuppwd" | "signupname";
  const [currentStep, setCurrentStep] = useState<loginStep>("signin");

  return (
    <div>
      {currentStep == "signin" && <SignIn />}
      {currentStep == "signupid" && <SignUpId />}
      {currentStep == "signuppwd" && <SignUpPwd />}
      {currentStep == "signupname" && <SignUpName />}
    </div>
  );
};

export default Login;
