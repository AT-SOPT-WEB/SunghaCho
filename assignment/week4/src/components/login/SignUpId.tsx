import Button from "../styled/Button";
import Input from "../styled/Input";
import ErrorMessage from "../styled/ErrorMessage";
import { useState, useEffect } from "react";
import type { SignUpIdProps } from "@/types/auth";

const SignUpId = ({ newId, setNewId, handleSignupStep }: SignUpIdProps) => {
  const [isBtnEnable, setIsBtnEnable] = useState<boolean>(false);

  useEffect(() => {
    setIsBtnEnable(newId.length < 8 || newId.length > 20);
  }, [newId]);

  return (
    <>
      <h2>아이디</h2>
      <Input
        placeholder="아이디를 입력해주세요(8~20자 대소문자/숫자만 가능)"
        value={newId}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setNewId(e.target.value)
        }
      />
      {isBtnEnable && newId && (
        <ErrorMessage message="8~20자 대소문자/숫자만 가능합니다." />
      )}
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
