import Button from "../styled/Button";
import Input from "../styled/Input";
import ErrorMessage from "../styled/ErrorMessage";
import Subtitle from "../styled/Subtitle";
import { useState, useEffect } from "react";
import type { SignUpIdProps } from "@/types/props/auth";

const MIN_ID_LENGTH = 8
const MAX_ID_LENGTH = 20;

const SignUpId = ({ newId, setNewId, handleSignupStep }: SignUpIdProps) => {
  const [isBtnDisable, setIsBtnDisable] = useState<boolean>(true);

  useEffect(() => {
    setIsBtnDisable(newId.length < MIN_ID_LENGTH || newId.length > MAX_ID_LENGTH);
  }, [newId]);

  return (
    <>
      <Subtitle>아이디</Subtitle>
      <Input
        placeholder="아이디를 입력해주세요(8~20자 대소문자/숫자만 가능)"
        value={newId}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setNewId(e.target.value)
        }
      />
      {isBtnDisable && newId && (
        <ErrorMessage message="8~20자 대소문자/숫자만 가능합니다." />
      )}
      <Button
        onClick={() => handleSignupStep("signuppwd")}
        disabled={isBtnDisable}
      >
        다음
      </Button>
    </>
  );
};

export default SignUpId;
