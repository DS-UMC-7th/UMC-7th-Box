import React from "react";
import * as A from "./card-skeleton.style";

const CardSkeleton = ({ number = 20 }) => {
  return (
    <>
      <A.CardListContainer>
        {new Array(number).fill(0).map((_) => (
          <A.CardSkeletonContainer>
            <A.CardMain />
            <A.TextWrapper>
              <A.TitleBox />
              <A.DescriptionBox />
            </A.TextWrapper>
          </A.CardSkeletonContainer>
        ))}
      </A.CardListContainer>
    </>
  );
};

export default CardSkeleton;
