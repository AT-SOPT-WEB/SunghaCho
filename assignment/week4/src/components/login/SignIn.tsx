type SignInProps = {
  handleCurrentStep: (step: "signin" | "signup") => void;
};

const SignIn = ({ handleCurrentStep }: SignInProps) => {
  return (
    <>
      <h1>로그인</h1>
      <input type="text" placeholder="아이디" />
      <input type="text" placeholder="비밀번호" />
      <button>로그인</button>
      <button onClick={() => handleCurrentStep("signup")}>회원가입</button>
    </>
  );
};

export default SignIn;
