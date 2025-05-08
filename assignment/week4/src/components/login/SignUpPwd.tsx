type SignUpPwdProps = {
  handleSignupStep: (step: "signupid" | "signuppwd" | "signupname") => void;
};

const SignUpPwd = ({ handleSignupStep }: SignUpPwdProps) => {
  return (
    <>
      <h2>비밀번호</h2>
      <input type="text" placeholder="비밀번호를 입력해주세요" />
      <input type="text" placeholder="비밀번호 확인" />
      <button onClick={() => handleSignupStep("signupname")}>다음</button>
    </>
  );
};

export default SignUpPwd;
