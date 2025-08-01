/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState, useEffect, type SetStateAction } from "react";
import { Link, useNavigate } from "react-router";
import Container from "../../components/styled/Container";
import Input from "../../components/styled/Input";
import Button from "../../components/styled/Button";
import Title from "../../components/styled/Title";
import { postSignIn } from "../../api/auth";
import { ROUTES } from "../../router/routesPath"

const linkstyle = css`
  color: black;
  font-weight: 500;
`;

const SignIn = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [isBtnDisable, setIsBtnDisable] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setIsBtnDisable(!(id && password));
  }, [id, password]);

  const handleSignIn = async () => {
    try {
      const data = await postSignIn({ loginId: id, password });
      const userId = data.data.userId;
      localStorage.setItem("userId", userId);
      navigate(ROUTES.MYPAGE_INFO);
    } catch (error) {
      console.error("로그인 실패", error);
      alert("로그인 실패");
    }
  };

  return (
    <Container>
      <Title>로그인</Title>
      <Input
        placeholder="아이디"
        value={id}
        onChange={(e: { target: { value: SetStateAction<string>; }; }) => setId(e.target.value)}
      />
      <Input
        placeholder="비밀번호"
        value={password}
        onChange={(e: { target: { value: SetStateAction<string>; }; }) => setPassword(e.target.value)}
      />
      <Button disabled={isBtnDisable} onClick={handleSignIn}>
        로그인
      </Button>
      <Link to={ROUTES.SIGN_UP} css={linkstyle}>
        회원가입
      </Link>
    </Container>
  );
};

export default SignIn;
