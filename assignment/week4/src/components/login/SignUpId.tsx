import Button from "../styled/Button";
import Input from "../styled/Input";
import { useState, useEffect } from "react";

type SignUpIdProps = {
  newId: string;
  setNewId: React.Dispatch<React.SetStateAction<string>>;
  handleSignupStep: (step: "signupid" | "signuppwd" | "signupname") => void;
};

const SignUpId = ({ newId, setNewId, handleSignupStep }: SignUpIdProps) => {
  const [isBtnEnable, setIsBtnEnable] = useState(false);

  useEffect(() => {
    setIsBtnEnable(newId.length < 8 || newId.length > 20);
  }, [newId]);

  return (
    <>
      <h2>아이디</h2>
      <Input
        placeholder="아이디를 입력해주세요(8~20자 대소문자/숫자만 가능)"
        value={newId}
        onChange={(e) => setNewId(e.target.value)}
      />
      <Button
        onClick={() => handleSignupStep("signuppwd")}
        disabled={isBtnEnable}
      >
        다음
      </Button>
    </>
  );
};

export default SignUpId;
