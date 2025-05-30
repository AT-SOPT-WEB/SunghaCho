import { useState } from "react";
import Header from "../../components/mypage/Header";
import Container from "../../components/styled/Container";
import Input from "../../components/styled/Input";
import Button from "../../components/styled/Button";
import Title from "../../components/styled/Title";
import Subtitle from "../../components/styled/Subtitle";
import List from "../../components/styled/List";
import { getSearchUsers } from "../../api/users";
import type { NicknameListResponse } from "@/types/api/users";

const MySearch = () => {
  const [searchVal, setSearchVal] = useState("");
  const [nicknameList, setNicknameList] = useState<string[]>([]);

  const getSearch = async () => {
    try {
      const res: NicknameListResponse = await getSearchUsers(searchVal);
      setNicknameList(res.data.nicknameList);
    } catch (error) {
      console.error("검색 실패", error);
    }
  };

  return (
    <>
      <Header />
      <Container>
        <Title>Sopt 회원 조회하기</Title>
        <Subtitle>닉네임</Subtitle>
        <Input
          placeholder="검색할 닉네임을 입력하세요"
          value={searchVal}
          onChange={(e) => setSearchVal(e.target.value)}
        />
        <Button onClick={getSearch}>조회</Button>
        {nicknameList.map((nickname, index) => (
          <List key={index}>{nickname}</List>
        ))}
      </Container>
    </>
  );
};

export default MySearch;
