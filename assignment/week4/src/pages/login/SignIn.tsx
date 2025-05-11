/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router";
import axios from "axios";
import Container from "../../components/styled/Container";
import Input from "../../components/styled/Input";
import Button from "../../components/styled/Button";

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

  const postSignIn = async () => {
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/api/v1/auth/signin`,
        {
          loginId: id,
          password: password,
        }
      );
      console.log(res.data);
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
      <Button disabled={isBtnEnable} onClick={() => postSignIn()}>
        로그인
      </Button>
      <Link to="/signup" css={linkstyle}>
        회원가입
      </Link>
    </Container>
  );
};

export default SignIn;
