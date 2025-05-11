import { useState, useEffect } from "react";
import Button from "../styled/Button";
import Input from "../styled/Input";

type SignUpPwdProps = {
  handleSignupStep: (step: "signupid" | "signuppwd" | "signupname") => void;
};

const SignUpPwd = ({ handleSignupStep }: SignUpPwdProps) => {
  const [newPassword, setNewPassword] = useState("");
  const [checkPassword, setCheckPassword] = useState("");
  const [isBtnEnable, setIsBtnEnable] = useState(false);

  useEffect(() => {
    setIsBtnEnable(!(newPassword && checkPassword));
  }, [newPassword, checkPassword]);

  return (
    <>
      <h2>비밀번호</h2>
      <Input
        placeholder="비밀번호를 입력해주세요"
        value={newPassword}
        onChange={(e) => setNewPassword(e.target.value)}
      />
      <Input
        placeholder="비밀번호 확인"
        value={checkPassword}
        onChange={(e) => setCheckPassword(e.target.value)}
      />
      <Button
        onClick={() => handleSignupStep("signupname")}
        disabled={isBtnEnable}
      >
        다음
      </Button>
    </>
  );
};

export default SignUpPwd;
