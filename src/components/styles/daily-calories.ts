import styled from "@emotion/styled";
import { colors } from "../../assets/color-palette";

export const MainContainer = styled.section`
  max-width: 90vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  margin: 20px auto;
  border-radius: 5px;
  & h3{
    color: ${colors[950]};
  }
  & p{
    color: ${colors[300]};
    padding: 0 20px;
    & span{
      font-size: 0.8rem;
    }
  }
  & .info-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 10px 20px;
    & .dayly-calories {
      margin: 0 0 10px 0;
      font-size: 1.5rem;
      color: ${colors[800]};
      font-weight: 700;
    }
    & button {
      margin: 20px 10px;
      padding: 15px 30px;
      position: relative;
      border: none;
      outline: none;
      cursor: pointer;
      background-color: ${colors[800]};
      color: white;
      border-radius: 5px;
      font-size: 18px;
    }
    & button[disabled] {
      opacity: 0.1;
    }
  }
  @media screen and (min-width: 1024px) {
    max-width: 600px;
  }
`;
