import styled from "styled-components";

export const MainContainer = styled.div`
  background-color: #0b1646;
  background-size: cover;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MainHeading = styled.h1`
  color: #dbca23;
  font-family: "Roboto";
  font-size: 38px;
`;

export const MainEnterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const NameInput = styled.input`
  font-family: "Roboto";
  font-size: 20px;
  color: #000000;
  width: 250px;
  height: 30px;
`;

export const StartBtn = styled.button`
  font-family: "Roboto";
  font-size: 20px;
  color: #ffffff;
  background-color: #eb930b;
  border: 1px solid #3a56b1;
  border-radius: 8px;
  margin: 10px;
  width: 80px;
  width: 100px;
`;
export const StartGameCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const QuestionCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #ffffff;
  padding: 10px;
  width: 800px;
`;
export const Question = styled.h1`
  font-family: "Roboto";
  font-size: 26px;
  color: #ffffff;
`;

export const OptionsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 800px;
`;

export const OptionCard = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 2px solid #ffffff;
  padding: 8px;
  margin: 10px;
  width: 300px;
  border-radius: 15px;
`;

export const Option = styled.p`
  font-family: "Roboto";
  font-size: 24px;
  color: #ffffff;
`;

export const WrongAns = styled.p`
  font-family: "Roboto";
  font-size: 32px;
  color: #df1205;
  font-weight: bold;
`;

export const WinGame = styled.p`
  font-family: "Roboto";
  font-size: 32px;
  color: #0cc003;
  font-weight: bold;
`;
