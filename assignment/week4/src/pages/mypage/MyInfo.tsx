import Header from "../../components/mypage/Header";
import Container from "../../components/styled/Container";
import Input from "../../components/styled/Input";
import Button from "../../components/styled/Button";

const MyInfo = () => {
  return (
    <>
      <Header />
      <Container>
        <h2>내 정보 수정하기</h2>
        <p>새 닉네임</p>
        <Input placeholder="새 닉네임을 입력하세요" />
        <Button>저장</Button>
      </Container>
    </>
  );
};

export default MyInfo;
