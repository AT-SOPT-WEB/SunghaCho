export type UserResponse = {
  data: {
    nickname: string;
  };
};

export type PatchNicknameRequest = {
  nickname: string;
};

export type NicknameListResponse = {
  data: {
    nicknameList: string[];
  };
};
