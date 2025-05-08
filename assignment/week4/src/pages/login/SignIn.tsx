/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
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
  return (
    <Container>
      <h1>로그인</h1>
      <Input placeholder="아이디" />
      <Input placeholder="비밀번호" />
      <Link to="/mypage/info" css={btnLink}>
        <Button>로그인</Button>
      </Link>
      <Link to="/signup" css={linkstyle}>
        회원가입
      </Link>
    </Container>
  );
};

export default SignIn;
