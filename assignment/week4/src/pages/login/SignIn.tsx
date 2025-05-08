/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "react-router";
import Container from "../../components/styled/Container";
import Input from "../../components/styled/Input";
import Button from "../../components/styled/Button";

const linkstyle = css`
  text-decoration: none;
`;

const SignIn = () => {
  return (
    <Container>
      <h1>로그인</h1>
      <Input placeholder="아이디" />
      <Input placeholder="비밀번호" />
      <Link to="/mypage/info" css={linkstyle}>
        <Button>로그인</Button>
      </Link>
      <Link to="/signup">회원가입</Link>
    </Container>
  );
};

export default SignIn;
