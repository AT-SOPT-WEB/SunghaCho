/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState, useEffect } from "react";
import { Link } from "react-router";
import Container from "../../components/styled/Container";
import Input from "../../components/styled/Input";
import Button from "../../components/styled/Button";

const btnLink = css`
  text-decoration: none;
`;

const linkstyle = css`
  color: black;
`;

const SignIn = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [isBtnEnable, setIsBtnEnable] = useState(false);

  useEffect(() => {
    setIsBtnEnable(!(id && password));
  }, [id, password]);

  return (
    <Container>
      <h1>로그인</h1>
      <Input
        placeholder="아이디"
        value={id}
        onChange={(e) => setId(e.target.value)}
      />
      <Input
        placeholder="비밀번호"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Link to="/mypage/info" css={btnLink}>
        <Button disabled={isBtnEnable}>로그인</Button>
      </Link>
      <Link to="/signup" css={linkstyle}>
        회원가입
      </Link>
    </Container>
  );
};

export default SignIn;
