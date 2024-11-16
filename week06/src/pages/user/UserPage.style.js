import styled from "styled-components";

export const Container = styled.div`
  margin-top: 60px;
  padding: 20px;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  color: #ffffff;
`;
export const Contents = styled.h2`
  margin: 0;
  font-size: 24px;
  color: #ffffff;
`;
export const FormContainer = styled.form`
  margin-top: 24px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const InputBox = styled.input`
  margin-top: 8px;
  padding: 12px;
  width: 400px;
  height: 48px;

  border: ${(props) => (props.$error ? "2px solid red" : "2px solid black")};
  border-radius: 6px;

  font-size: 15px;
`;
export const SubmitBox = styled(InputBox)`
  background-color: ${(props) => (props.$isValid ? "crimson" : "#cccccc")};

  font-size: 16px;
  font-weight: 900;
  color: white;

  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.$isValid && (props.$hoverColor || "crimson")};
  }
`;
export const SpanText = styled.span`
  padding: 8px 12px 4px 12px;
  width: 400px;

  font-size: 12px;
  color: red;
`;
