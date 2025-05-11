import { useState, useEffect } from "react";
import Header from "../../components/mypage/Header";
import Container from "../../components/styled/Container";
import Input from "../../components/styled/Input";
import Button from "../../components/styled/Button";

const MySearch = () => {
  const [searchVal, setSearchVal] = useState("");
  const [isBtnEnable, setIsBtnEnable] = useState(false);

  useEffect(() => {
    setIsBtnEnable(!searchVal);
  }, [searchVal]);
  return (
    <>
      <Header />
      <Container>
        <h2>Sopt 회원 조회하기</h2>
        <p>닉네임</p>
        <Input
          placeholder="검색할 닉네임을 입력하세요"
          value={searchVal}
          onChange={(e) => setSearchVal(e.target.value)}
        />
        <Button disabled={isBtnEnable}>조회</Button>
      </Container>
    </>
  );
};

export default MySearch;
