import styled from "@emotion/styled";

export const ProductLoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 5rem 1rem;
  background-color: #f5f5f5;

  & div {
    display: grid;
    grid-template-columns: repeat(1, 100%);
    grid-gap: 1rem;
    justify-items: center;
    align-items: center;
  }
  @media screen and (min-width: 768px) {
    & div {
      grid-template-columns: 50% 50%;
    }
  }
  @media screen and (min-width: 1024px) {
    & div {
      grid-template-columns: repeat(3, 1fr);
    }
  }
  @media screen and (min-width: 1440px) {
    & div {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;
export const ProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 3rem 1rem 5rem 1rem;
  background-color: #f5f5f5;
  & .search-input__container {
    margin-bottom: 20px;
    width: 100%;
    max-width: 300px;
    align-self: center;
    & .search-input__input {
      width: 100%;
      max-width: 300px;
    }
  }
  @media screen and (min-width: 768px) {
    align-items: center;
  }
`;
