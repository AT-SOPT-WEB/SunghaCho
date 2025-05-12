/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router";
import Container from "../../components/styled/Container";
import Input from "../../components/styled/Input";
import Button from "../../components/styled/Button";
import { postSignIn } from "../../api/auth";

const linkstyle = css`
  color: black;
`;

const SignIn = () => {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [isBtnEnable, setIsBtnEnable] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsBtnEnable(!(id && password));
  }, [id, password]);

  const handleSignIn = async () => {
    try {
      const data = await postSignIn({ loginId: id, password });
      const userId = data.data.userId;
      localStorage.setItem("userId", userId);
      navigate("/mypage/info");
    } catch (error) {
      console.error("로그인 실패", error);
      alert("로그인 실패");
    }
  };

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
      <Button disabled={isBtnEnable} onClick={handleSignIn}>
        로그인
      </Button>
      <Link to="/signup" css={linkstyle}>
        회원가입
      </Link>
    </Container>
  );
};

export default SignIn;
