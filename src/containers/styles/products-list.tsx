import styled from "@emotion/styled";

export const ProductListContainer = styled.section`
  display: grid;
  grid-template-columns: 100%;
  grid-gap: 1rem;
  justify-items: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    grid-template-columns: 50% 50%;
  }
  @media screen and (min-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (min-width: 1440px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
