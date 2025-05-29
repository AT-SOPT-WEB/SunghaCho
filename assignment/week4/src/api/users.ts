import { instance } from "./instance";
import type {
  UserResponse,
  PatchNicknameRequest,
  NicknameListResponse,
} from "@/types/api/users";

export const getMyNickname = async (
  userId: string | null
): Promise<UserResponse> => {
  try {
    const response = await instance.get<UserResponse>(
      "/api/v1/users/me",
      {
        headers: {
          userId,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("내 닉네임 조회 실패", error);
    throw error;
  }
};

export const patchNickname = async (
  userId: string,
  data: PatchNicknameRequest
): Promise<void> => {
  try {
    await instance.patch(
      "/api/v1/users",
      data,
      {
        headers: {
          userId,
        },
      }
    );
  } catch (error) {
    console.error("닉네임 수정 실패", error);
    throw error;
  }
};

export const getSearchUsers = async (
  keyword: string
): Promise<NicknameListResponse> => {
  try {
    const response = await instance.get<NicknameListResponse>(
      `/api/v1/users?keyword=${keyword}`
    );
    return response.data;
  } catch (error) {
    console.error("검색 실패", error);
    throw error;
  }
};
