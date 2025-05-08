import Header from "../../components/mypage/Header";
import Container from "../../components/styled/Container";
import Input from "../../components/styled/Input";
import Button from "../../components/styled/Button";

const MySearch = () => {
  return (
    <>
      <Header />
      <Container>
        <h2>Sopt 회원 조회하기</h2>
        <p>닉네임</p>
        <Input placeholder="검색할 닉네임을 입력하세요" />
        <Button>확인</Button>
      </Container>
    </>
  );
};

export default MySearch;
