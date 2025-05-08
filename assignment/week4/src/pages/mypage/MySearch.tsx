import Header from "../../components/mypage/Header";

const MySearch = () => {
  return (
    <>
      <Header />
      <h2>Sopt 회원 조회하기</h2>
      <p>닉네임</p>
      <input type="text" placeholder="검색할 닉네임을 입력하세요" />
      <button>확인</button>
    </>
  );
};

export default MySearch;
