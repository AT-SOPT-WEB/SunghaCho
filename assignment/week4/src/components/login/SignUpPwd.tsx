import { useState, useEffect } from "react";
import Button from "../styled/Button";
import Input from "../styled/Input";

type SignUpPwdProps = {
  newPwd: string;
  setNewPwd: React.Dispatch<React.SetStateAction<string>>;
  handleSignupStep: (step: "signupid" | "signuppwd" | "signupname") => void;
};

const SignUpPwd = ({ newPwd, setNewPwd, handleSignupStep }: SignUpPwdProps) => {
  const [checkPwd, setCheckPwd] = useState("");
  const [isBtnEnable, setIsBtnEnable] = useState(false);

  useEffect(() => {
    setIsBtnEnable(newPwd == "" || checkPwd == "" || newPwd != checkPwd);
  }, [newPwd, checkPwd]);

  return (
    <>
      <h2>비밀번호</h2>
      <Input
        placeholder="비밀번호를 입력해주세요"
        value={newPwd}
        onChange={(e) => setNewPwd(e.target.value)}
      />
      <Input
        placeholder="비밀번호 확인"
        value={checkPwd}
        onChange={(e) => setCheckPwd(e.target.value)}
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
