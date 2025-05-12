import { useState, useEffect } from "react";
import Button from "../styled/Button";
import Input from "../styled/Input";
import ErrorMessage from "../styled/ErrorMessage";
import Subtitle from "../styled/Subtitle";
import type { SignUpPwdProps } from "@/types/props/auth";

const SignUpPwd = ({ newPwd, setNewPwd, handleSignupStep }: SignUpPwdProps) => {
  const [checkPwd, setCheckPwd] = useState<string>("");
  const [isBtnDisable, setIsBtnDisable] = useState<boolean>(true);
  const [errorMsg, setErrorMsg] = useState<string>("");

  useEffect(() => {
    if (newPwd.length > 20) {
      setIsBtnDisable(true);
      setErrorMsg("최대 길이는 20자 이하로 입력해주세요.");
      return;
    }

    if (!newPwd || !checkPwd) {
      setIsBtnDisable(true);
      setErrorMsg("");
      return;
    }

    if (newPwd !== checkPwd) {
      setIsBtnDisable(true);
      setErrorMsg("비밀번호가 일치하지 않습니다.");
      return;
    }

    setIsBtnDisable(false);
    setErrorMsg("");
  }, [newPwd, checkPwd]);

  return (
    <>
      <Subtitle>비밀번호</Subtitle>
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
        disabled={isBtnDisable}
      >
        다음
      </Button>
    </>
  );
};

export default SignUpPwd;
