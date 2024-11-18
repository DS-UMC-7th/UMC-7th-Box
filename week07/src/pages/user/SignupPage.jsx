import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import * as A from "./UserPage.style";

// useForm을 이용한 유효성 검사
export default function SignupPage() {
  const navigate = useNavigate();
  const schema = yup.object().shape({
    email: yup
      .string()
      .email("이메일을 형식으로 작성해주세요.")
      .required("이메일을 반드시 입력해주세요."),
    password: yup
      .string()
      .required("비밀번호를 반드시 입력해주세요.")
      .min(8, "비밀번호는 8자 이상이어야 합니다.")
      .max(16, "비밀번호는 16자 이하여야 합니다."),
    passwordCheck: yup
      .string()
      .required("비밀번호 검증 또한 필수 입력요소입니다.")
      .oneOf([yup.ref("password"), null], "비밀번호가 일치하지 않습니다."),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  // api 연결
  const api = axios.create({
    baseURL: "http://localhost:3000/",
  });

  async function signupUser({ email, password }) {
    try {
      // console.log("회원가입 email: ", email); //
      // console.log("회원가입 password: ", password); //

      const response = await api.post("auth/register", {
        email: email,
        // "dydals34403@gmail.com"
        password: password,
        passwordCheck: password,
      });

      console.log("회원가입 성공:", response.data);
      return true;
    } catch (error) {
      console.error("회원가입 실패:", error.response?.data || error.message);
      return false;
    }
  }

  // 제출
  const onSubmit = async (data) => {
    // console.log("email: ", data.email); //
    // console.log("password: ", data.password); //

    const isSuccess = await signupUser({
      email: data.email,
      password: data.password,
      // "email123@gmail.com"
      // "password123"
    });

    if (isSuccess) {
      navigate(`/login`);
      // console.log("회원가입 성공");
    }
  };

  const [isValid, setIsValid] = useState(true); //

  return (
    <A.Container>
      <A.Contents>회원가입</A.Contents>

      <A.FormContainer onSubmit={handleSubmit(onSubmit)}>
        {/* 이메일 */}
        <A.InputBox
          type="email"
          placeholder="이메일을 입력해주세요."
          {...register("email", { required: true })}
        />
        <A.SpanText>{errors.email?.message}</A.SpanText>

        {/* 비밀번호 */}
        <A.InputBox
          type="password"
          placeholder="비밀번호를 입력해주세요."
          {...register("password", { required: true })}
        />
        <A.SpanText>{errors.password?.message}</A.SpanText>

        {/* 비밀번호 확인 */}
        <A.InputBox
          type="password"
          placeholder="비밀번호를 다시 입력해주세요."
          {...register("passwordCheck", { required: true })}
        />
        <A.SpanText>{errors.passwordCheck?.message}</A.SpanText>

        {/* 제출 */}
        <A.SubmitBox type="submit" value="회원가입" $isValid={isValid} $hoverColor="#a51a36" />
      </A.FormContainer>
    </A.Container>
  );
}
