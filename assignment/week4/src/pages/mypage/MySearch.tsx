import { useState } from "react";
import axios from "axios";
import Header from "../../components/mypage/Header";
import Container from "../../components/styled/Container";
import Input from "../../components/styled/Input";
import Button from "../../components/styled/Button";

const MySearch = () => {
  const [searchVal, setSearchVal] = useState("");
  const [nicknameList, setNicknameList] = useState([]);

  const getSearch = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_API_BASE_URL}/api/v1/users?keyword=${searchVal}`
      );
      console.log(res.data);
      setNicknameList(res.data.data.nicknameList);
    } catch (error) {
      console.error("검색 실패", error);
    }
  };

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
        <Button onClick={() => getSearch()}>조회</Button>
        <div>{nicknameList}</div>
      </Container>
    </>
  );
};

export default MySearch;
