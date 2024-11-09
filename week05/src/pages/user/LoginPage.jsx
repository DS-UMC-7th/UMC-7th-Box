import useForm from "../../hooks/use-form";
import { validateLogin } from "../../utils/Validate";
import * as A from "./UserPage.style";
import { useState } from "react";

// useForm 없이 custom hook을 이용한 유효성 검사
export default function LoginPage() {
  const login = useForm({
    initialValue: {
      email: "",
      password: "",
    },
    validate: validateLogin,
  });

  const handlePressLogin = (event) => {
    console.log("email: ", login.values.email);
    console.log("password: ", login.values.password);
    event.preventDefault();
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
