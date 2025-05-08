import Header from "../../components/mypage/Header";

const MyInfo = () => {
  return (
    <>
      <Header />
      <h2>내 정보 수정하기</h2>
      <p>새 닉네임</p>
      <input type="text" placeholder="새 닉네임을 입력하세요" />
      <button>저장</button>
    </>
  );
};

export default MyInfo;
