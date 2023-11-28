import { PaginatorInfo, QueryOptions } from './general';

export interface User {
  FirstName: string;
  SecondName: string;
  Shenime: string;
  Status_user: boolean;
  UserId: number;
  UserName: string;
  exp_date?: string;
  district_name: string;
  region_code: string;
  region_name: string;
  usr_birthdate: string;
  usr_city: string;
  usr_diploma: string;
  usr_email: string;
  usr_fax: string;
  usr_gender: string;
  usr_mobile: string;
  usr_phone?: string;
  usr_postcode: string;
  usr_short: string;
  usr_street: string;
  usr_titile: string;
  permissions: [];
  role_ids: number[];
  role_names: string[];
}

export interface UpdateUserInput extends Partial<User> {
  id: string;
}

export interface LoginUserInput {
  username: string;
  password: string;
}

export type SocialLoginInputType = {
  provider: string;
  access_token: string;
};

export type SendOtpCodeInputType = {
  phone_number: string;
};

export interface RegisterUserInput {
  name: string;
  email: string;
  password: string;
}

export interface ForgotPasswordUserInput {
  email: string;
}

export interface ResetPasswordUserInput {
  email: string;
  token: string;
  password: string;
}

export interface VerifyForgotPasswordUserInput {
  token: string;
  email: string;
}

export interface ChangePasswordUserInput {
  oldPassword: string;
  newPassword: string;
}

export interface PasswordChangeResponse {
  success: boolean;
  message: string;
}

export interface AuthResponse {
  data: {
    access_token: string;
    refresh_token: string;
    user: User;
  };
  message: string;
  meta: [];
}

export interface OTPResponse {
  message: string;
  success: boolean;
  provider: string;
  id: string;
  phone_number: string;
  is_contact_exist: boolean;
}

export interface VerifyOtpInputType {
  phone_number: string;
  code: string;
  otp_id: string;
}

export interface OtpLoginInputType {
  phone_number: string;
  code: string;
  otp_id: string;
  name?: string;
  email?: string;
}

export interface OTPVerifyResponse {
  success: string;
  message: string;
}

export interface CreateContactUsInput {
  name: string;
  email: string;
  subject: string;
  description: string;
}

export interface RegisterQueryOptions extends QueryOptions {
  name: string;
  orderBy: string;
  'page-size': number;
}

export type RegisterPaginator = PaginatorInfo<User>;
