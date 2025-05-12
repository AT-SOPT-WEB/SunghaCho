export type SignupStep = "signupid" | "signuppwd" | "signupname";

export type SignUpIdProps = {
  newId: string;
  setNewId: React.Dispatch<React.SetStateAction<string>>;
  handleSignupStep: (step: SignupStep) => void;
};

export type SignUpNameProps = {
  nickname: string;
  setNickname: React.Dispatch<React.SetStateAction<string>>;
  handleSignupStep: () => void;
};

export type SignUpPwdProps = {
  newPwd: string;
  setNewPwd: React.Dispatch<React.SetStateAction<string>>;
  handleSignupStep: (step: SignupStep) => void;
};
