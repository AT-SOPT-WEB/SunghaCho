import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import Header from "../../components/mypage/Header";
import Container from "../../components/styled/Container";
import Input from "../../components/styled/Input";
import Button from "../../components/styled/Button";
import axios from "axios";

const MyInfo = () => {
  const [newNickname, setNewNickname] = useState<string>("");
  const [isBtnEnable, setIsBtnEnable] = useState<boolean>(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsBtnEnable(!newNickname);
  }, [newNickname]);

  const patchNickname = async () => {
    try {
      const userId = localStorage.getItem("userId");
      if (!userId) {
        alert("사용자 정보를 찾을 수 없습니다.");
        return;
      }
      const res = await axios.patch(
        `${import.meta.env.VITE_API_BASE_URL}/api/v1/users`,
        {
          nickname: newNickname,
        },
        {
          headers: {
            userId,
          },
        }
      );
      console.log(res.data);
      alert("닉네임 변경이 완료되었습니다.");
      navigate(0);
    } catch (error) {
      console.error("닉네임 수정 실패", error);
      alert("닉네임 변경 실패. 다시 시도해주세요!");
    }
  };

  return (
    <>
      <Header />
      <Container>
        <h2>내 정보 수정하기</h2>
        <p>새 닉네임</p>
        <Input
          placeholder="새 닉네임을 입력하세요"
          value={newNickname}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setNewNickname(e.target.value)
          }
        />
        <Button disabled={isBtnEnable} onClick={patchNickname}>
          변경사항 저장
        </Button>
      </Container>
    </>
  );
};

export default MyInfo;
