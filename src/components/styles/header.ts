import styled from "@emotion/styled";

export const HeaderContainer = styled.nav`
  max-width: 100vw;
  background-color: #fff;
  & .header-items-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 25px;
  }
  & figure {
    width: 60px;
    height: 30px;
    margin: 0;
    padding: 0;
    & img {
      object-fit: contain;
    }
  }
  & svg:hover {
    cursor: pointer;
  }

  @media screen and (min-width: 1024px) {
    & .header-items-container {
      max-width: 70%;
      margin: 0 auto;
    }
    & figure {
      width: 160px;
      height: 80px;
    }
    & svg {
      height: 30px;
      width: 30px;
    }
  }
  @media screen and (min-width: 1440px) {
  }
`;
