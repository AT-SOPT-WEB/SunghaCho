/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState, useEffect } from "react";
import Button from "../styled/Button";
import Input from "../styled/Input";
import ErrorMessage from "../styled/ErrorMessage";
import Subtitle from "../styled/Subtitle";
import type { SignUpPwdProps } from "@/types/props/auth";
import hideIcon from "../../assets/hideIcon.svg"
import showIcon from "../../assets/showIcon.svg"

const divStyle = css`
  position: relative;
  display: flex;
  align-items: center;
  width: 30rem;
`;

const showPwdStyle = css`
  position: absolute;
  width : 25px;
  height : 25px;
  right : 1.1rem;
`;

const hidePwdStyle = css`
  position: absolute;
  width : 28px;
  height : 27px;
  right : 1rem;
`;

const SignUpPwd = ({ newPwd, setNewPwd, handleSignupStep }: SignUpPwdProps) => {
  const [checkPwd, setCheckPwd] = useState<string>("");
  const [isBtnDisable, setIsBtnDisable] = useState<boolean>(true);
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [isVisiblePwd, setIsVisiblePwd] = useState<boolean>(false)

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

  const handleClickShowPwd = () => {
    setIsVisiblePwd(prev => !prev);
  }

  return (
    <>
      <Subtitle>비밀번호</Subtitle>
      <div css={divStyle}>
      <Input
        type={isVisiblePwd ? "text" : "password"} 
        placeholder="비밀번호를 입력해주세요"
        value={newPwd}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setNewPwd(e.target.value)
        }
      />
{ isVisiblePwd ? <img src={hideIcon} css={hidePwdStyle} onClick={() => handleClickShowPwd()}  alt="비밀번호 감추기 아이콘"/> : <img src={showIcon} css={showPwdStyle} onClick={() => handleClickShowPwd()} alt="비밀번호 표시 아이콘"/> }</div>
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
