import styled from "@emotion/styled";

import { colors } from "../../assets/color-palette";

export const ProductDetailContainer = styled.div`
  background-color: #f4f4f4;
  color: ${colors[950]};
  & .product-title {
    padding: 20px 10px 10px 10px;
    background-color: #fff;

    & .product-title__container {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
  & svg {
    color: ${colors[800]};
  }

  & h1,
  h4 {
    text-align: center;
  }
  & h1 {
    margin: 0;
    font-size: 1.3rem;
    background-color: #fff;
  }
  & .image-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 0;
    padding: 0;
    background-color: #fff;
    mask-image: linear-gradient(rgba(255, 255, 255, 0.9) 70%, transparent);
    & img {
      max-height: 405px;
      object-fit: contain;
    }
  }
  & .image-container__nutri-score {
    height: 50px;
    width: 100%;
    margin: 0;
    padding: 10px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
  }
  & .product-info {
    padding: 0 10px;
    border-top: 2px solid ${colors[200]};
  }
  & .product-details {
    width: 100%;
    max-width: 100vw;
    box-sizing: border-box;
    margin: 0 0 40px 0;
    padding: 0;
    display: grid;
    grid-template-columns: 50% 50%;
    justify-items: center;
    list-style: none;
    & li {
      width: 150px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      & p {
        font-size: 0.9rem;
      }
    }
  }
  & .product-info__circle {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 80px;
    border: 1px dashed ${colors[200]};
    border-radius: 50%;
    font-weight: 900;
    font-size: 0.9rem;
    & strong {
      max-width: 60%;
    }
  }
  & .product-ingredients {
    text-align: justify;
  }
  & .text-color__300 {
    color: ${colors[300]};
  }
  & .pb-3 {
    padding-bottom: 3rem;
  }
  & .pt-3 {
    padding-top: 3rem;
  }
  & .m-0 {
    margin: 0;
  }
  & .text-align__center {
    text-align: center;
  }
  @media screen and (min-width: 768px) {
  }
  @media screen and (min-width: 1440px) {
    width: 100%;
    max-width: 1800px;
    display: grid;
    grid-template-columns: 40% 60%;
    align-items: center;
    margin: 50px auto;
    padding: 50px;
    border-radius: 20px;
    background-color: #fff;
    box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.25);
    & h1 {
      font-size: 2rem;
    }
    & .image-container__nutri-score {
      height: 70px;
      width: 100%;
      padding: 20px 0;
    }
    & .product-info {
      height: 100%;
      width: 100%;
      padding: 0;
      display: grid;
      grid-template-columns: 40% 60%;
      grid-gap: 20px;
      justify-items: center;
      align-items: center;
      background-color: #fff;
      border-top: none;
      border-left: 2px solid ${colors[200]};
    }
    & .product-title {
      & .product-title__container {
        width: 60vw;
        margin: 0 auto;
        & a svg {
          font-size: 30px;
        }
        & > svg {
          display: none;
        }
      }
    }
    & .product-details {
      width: 100%;
      max-width: 500px;
      & li {
        width: 200px;
        & p {
          font-size: 1rem;
        }
      }
    }
    & .product-info__circle {
      width: 100px;
      height: 100px;
      font-size: 1rem;
      & strong {
        max-width: 70%;
      }
    }
    & .image-container {
      mask-image: none;
    }
  }
`;

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 50px auto;
  background-color: #f5f5f5;
  width: 90vw;
  height: 70vh;

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
