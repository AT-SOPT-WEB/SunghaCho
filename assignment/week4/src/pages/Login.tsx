import { useState } from "react";
import SignIn from "../components/login/SignIn";
import SignUp from "../components/login/SignUp";

const Login = () => {
  type LoginStep = "signin" | "signup";
  const [currentStep, setCurrentStep] = useState<LoginStep>("signin");

  return (
    <div>
      {currentStep == "signin" && <SignIn handleCurrentStep={setCurrentStep} />}
      {currentStep == "signup" && <SignUp handleCurrentStep={setCurrentStep} />}
    </div>
  );
};

export default Login;
