import { instance } from "./instance";
import type {
  SignInRequest,
  SignInResponse,
  SignUpRequest,
  SignUpResponse,
} from "@/types/api/auth";

export const postSignIn = async (
  data: SignInRequest
): Promise<SignInResponse> => {
  const { data: responseData } = await instance.post<SignInResponse>(
    "/api/v1/auth/signin",
    data
  );
  return responseData;
};

export const postSignUp = async (
  data: SignUpRequest
): Promise<SignUpResponse> => {
  const { data: responseData } = await instance.post<SignUpResponse>(
    "/api/v1/auth/signup",
    data
  );
  return responseData;
};
