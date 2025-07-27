export type SignInRequest = {
  loginId: string;
  password: string;
};

export type SignInResponse = {
  data: {
    userId: string;
  };
};

export type SignUpRequest = {
  loginId: string;
  password: string;
  nickname: string;
};

export type SignUpResponse = {
  nickname: string;
};
