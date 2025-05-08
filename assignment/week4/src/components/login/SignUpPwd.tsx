import Button from "../styled/Button";
import Input from "../styled/Input";

type SignUpPwdProps = {
  handleSignupStep: (step: "signupid" | "signuppwd" | "signupname") => void;
};

const SignUpPwd = ({ handleSignupStep }: SignUpPwdProps) => {
  return (
    <>
      <h2>비밀번호</h2>
      <Input placeholder="비밀번호를 입력해주세요" />
      <Input placeholder="비밀번호 확인" />
      <Button onClick={() => handleSignupStep("signupname")}>다음</Button>
    </>
  );
};

export default SignUpPwd;
