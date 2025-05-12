import { useState, useEffect } from "react";
import Button from "../styled/Button";
import Input from "../styled/Input";
import ErrorMessage from "../styled/ErrorMessage";
import type { SignUpPwdProps } from "@/types/props/auth";

const SignUpPwd = ({ newPwd, setNewPwd, handleSignupStep }: SignUpPwdProps) => {
  const [checkPwd, setCheckPwd] = useState<string>("");
  const [isBtnEnable, setIsBtnEnable] = useState<boolean>(false);
  const [errorMsg, setErrorMsg] = useState<string>("");

  useEffect(() => {
    if (newPwd.length > 20) {
      setIsBtnEnable(true);
      setErrorMsg("최대 길이는 20자 이하로 입력해주세요.");
      return;
    }

    if (!newPwd || !checkPwd) {
      setIsBtnEnable(true);
      setErrorMsg("");
      return;
    }

    if (newPwd !== checkPwd) {
      setIsBtnEnable(true);
      setErrorMsg("비밀번호가 일치하지 않습니다.");
      return;
    }

    setIsBtnEnable(false);
    setErrorMsg("");
  }, [newPwd, checkPwd]);

  return (
    <>
      <h2>비밀번호</h2>
      <Input
        placeholder="비밀번호를 입력해주세요"
        value={newPwd}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setNewPwd(e.target.value)
        }
      />
      <Input
        placeholder="비밀번호 확인"
        value={checkPwd}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setCheckPwd(e.target.value)
        }
      />
      <ErrorMessage message={errorMsg} />
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
