import styled from "@emotion/styled";
import { colors } from "../../assets/color-palette";

export const ProductCardContainer = styled.article`
  height: 300px;
  max-width: 300px;
  width: 300px;
  position: relative;
  border-radius: 5%;
  background-color: #fff;
  &:hover {
    cursor: pointer;
    box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.25);
  }
  & .image-container {
    margin-top: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
    max-height: 200px;
    max-width: 300px;
    transition: all .2s ease-in-out;
    & img {
      object-fit: contain;
    }
    &:hover {
      object-fit: contain;
      transform: scale(1.1);
    }
  }
  & h4 {
    text-align: center;
    font-size: 1rem;
    color: ${colors[900]};
  }
  & .ribbon {
    position: absolute;
    right: -1px;
    top: -1px;
    z-index: 1;
    overflow: hidden;
    width: 150px;
    height: 150px;
    text-align: right;
  }
  & .ribbon span {
    width: 210px;
    padding: 5px 0;
    display: block;
    position: absolute;
    top: 54px;
    right: -42px;
    line-height: 10px;
    color: #fff;
    text-transform: uppercase;
    text-align: center;
    font-weight: bold;
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg); /* Needed for Safari */
    background: #79a70a;
    background: linear-gradient(#9bc90d 0%, #79a70a 100%);
    box-shadow: 0 3px 10px -5px rgba(0, 0, 0, 1);
    font-size: 0.4rem;
  }
  @media screen and (min-width: 1024px) {
    height: 350px;
    max-width: 350px;
    width: 350px;
    & .image-container {
      margin-top: 50px;
      height: 225px;
      max-height: 225px;
      max-width: 325px;
    }
    & h4 {
      font-size: 1.2rem;
    }
    & .ribbon {
      right: -2px;
      top: -2px;
      width: 200px;
      height: 200px;
    }
    & .ribbon span {
      width: 250px;
      padding: 10px 0;
      top: 64px;
      right: -46px;
      line-height: 10px;
      font-size: 0.6rem;
    }
  }
`;
