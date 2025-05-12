import { useState } from "react";
import Header from "../../components/mypage/Header";
import Container from "../../components/styled/Container";
import Input from "../../components/styled/Input";
import Button from "../../components/styled/Button";
import { searchUsers } from "../../api/users";
import type { NicknameListResponse } from "@/types/api/users";

const MySearch = () => {
  const [searchVal, setSearchVal] = useState<string>("");
  const [nicknameList, setNicknameList] = useState<string[]>([]);

  const getSearch = async () => {
    try {
      const res: NicknameListResponse = await searchUsers(searchVal);
      setNicknameList(res.data.nicknameList);
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
        <Button onClick={getSearch}>조회</Button>
        <div>{nicknameList.join(", ")}</div>
      </Container>
    </>
  );
};

export default MySearch;
