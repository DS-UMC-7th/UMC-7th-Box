import styled, { keyframes } from "styled-components";

export const skeleton = keyframes`
  0%{
    opacity: 1;
  }
  30%{
    opacity: 0.75;
  }
  60%{
    opacity: 1;
  }
  100%{
    opacity: 1;
  }
`;

export const CardListContainer = styled.ul`
  list-style: none;

  margin: 8px;
  padding: 0;
  width: 100%;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 16px;
`;
export const CardSkeletonContainer = styled.div`
  /* width: 120px; */
  animation: ${skeleton} 1.5s 0.5s infinite ease normal;
`;
export const CardMain = styled.div`
  position: relative;
  /* width: 120px; */
  height: 180px;

  border-radius: 6px;
  background-color: #333333;
`;
export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const TitleBox = styled.div`
  margin-top: 10px;
  width: 110px;
  height: 14px;

  border-radius: 8px;
  background-color: #333333;
`;
export const DescriptionBox = styled.div`
  margin-top: 6px;
  width: 54px;
  height: 11px;

  border-radius: 8px;
  background-color: #333333;
`;
