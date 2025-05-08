type SignUpIdProps = {
  handleSignupStep: (step: "signupid" | "signuppwd" | "signupname") => void;
};

const SignUpId = ({ handleSignupStep }: SignUpIdProps) => {
  return (
    <>
      <h2>아이디</h2>
      <input
        type="text"
        placeholder="아이디를 입력해주세요(8~20자 대소문자/숫자만 가능)"
      />
      <button onClick={() => handleSignupStep("signuppwd")}>다음</button>
    </>
  );
};

export default SignUpId;
