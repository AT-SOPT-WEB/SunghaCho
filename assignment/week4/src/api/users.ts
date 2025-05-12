import axios from "axios";
import type {
  UserResponse,
  PatchNicknameRequest,
  NicknameListResponse,
} from "@/types/api/users";

export const getMyNickname = async (
  userId: string | null
): Promise<UserResponse> => {
  try {
    const response = await axios.get<UserResponse>(
      `${import.meta.env.VITE_API_BASE_URL}/api/v1/users/me`,
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
    await axios.patch(
      `${import.meta.env.VITE_API_BASE_URL}/api/v1/users`,
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
    const response = await axios.get<NicknameListResponse>(
      `${import.meta.env.VITE_API_BASE_URL}/api/v1/users?keyword=${keyword}`
    );
    return response.data;
  } catch (error) {
    console.error("검색 실패", error);
    throw error;
  }
};
