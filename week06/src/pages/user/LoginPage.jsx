import { useContext, useState } from "react";
import useForm from "../../hooks/use-form";
import { useNavigate } from "react-router-dom";
import { validateLogin } from "../../utils/Validate";
import axios from "axios";
import * as A from "./UserPage.style";
import { UserContext } from "../../context/UserContext";

// useForm 없이 custom hook을 이용한 유효성 검사
export default function LoginPage() {
  const { setIsLogined } = useContext(UserContext);

  const navigate = useNavigate();
  const login = useForm({
    initialValue: {
      email: "",
      password: "",
    },
    validate: validateLogin,
  });

  // api 연결
  const api = axios.create({
    baseURL: "http://localhost:3000/",
  });

  async function loginUser({ email, password }) {
    try {
      // console.log("로그인 email: ", email); //
      // console.log("로그인 password: ", password); //

      const response = await api.post("auth/login", {
        email: email,
        password: password,
        // "email123@gmail.com"
        // "password123"
      });

      console.log("로그인 성공:", response.data);

      return { accessToken: response.data.accessToken, refreshToken: response.data.refreshToken };
    } catch (error) {
      console.error("로그인 실패:", error.response?.data || error.message);
      return null;
    }
  }

  // 제출
  const handlePressLogin = async (event) => {
    // console.log("email: ", login.values.email); //
    // console.log("password: ", login.values.password); //
    event.preventDefault();

    const tokens = await loginUser({
      email: login.values.email,
      password: login.values.password,
    });

    if (tokens) {
      localStorage.setItem("accessToken", tokens.accessToken);
      localStorage.setItem("refreshToken", tokens.refreshToken);
      // console.log("로그인 accessToken: ", tokens.accessToken); //
      // console.log("로그인 refreshToken: ", tokens.refreshToken); //

      setIsLogined(true);
      navigate(`/`);
    }
  };

  const [isValid, setIsValid] = useState(true); //

  return (
    <A.Container>
      <A.Contents>로그인</A.Contents>

      <A.FormContainer onSubmit={handlePressLogin}>
        {/* 이메일 */}
        <A.InputBox
          type="email"
          placeholder="이메일을 입력해주세요."
          {...login.getTextInputProps("email")}
          $error={login.touched.email && login.errors.email}
        />
        {login.touched.email && login.errors.email && <A.SpanText>{login.errors.email}</A.SpanText>}

        {/* 비밀번호 */}
        <A.InputBox
          type="password"
          placeholder="비밀번호를 입력해주세요."
          {...login.getTextInputProps("password")}
          $error={login.touched.password && login.errors.password}
        />
        {login.touched.password && login.errors.password && (
          <A.SpanText>{login.errors.password}</A.SpanText>
        )}

        {/* 제출 */}
        <A.SubmitBox type="submit" value="로그인" $isValid={isValid} $hoverColor="#a51a36" />
      </A.FormContainer>
    </A.Container>
  );
}
