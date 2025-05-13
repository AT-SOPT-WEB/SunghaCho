import axios from "axios";
import type {
  SignInRequest,
  SignInResponse,
  SignUpRequest,
  SignUpResponse,
} from "@/types/api/auth";

export const postSignIn = async (
  data: SignInRequest
): Promise<SignInResponse> => {
  const response = await axios.post<SignInResponse>(
    `${import.meta.env.VITE_API_BASE_URL}/api/v1/auth/signin`,
    data
  );
  return response.data;
};

export const postSignUp = async (
  data: SignUpRequest
): Promise<SignUpResponse> => {
  const response = await axios.post<SignUpResponse>(
    `${import.meta.env.VITE_API_BASE_URL}/api/v1/auth/signup`,
    data
  );
  return response.data;
};
