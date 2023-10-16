import styled from 'styled-components';

export const WelcomeContainer = styled.div`
  text-align: center;
  padding: 40px;
`;

export const WelcomeMessage = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
  font-family: 'Montserrat', sans-serif;
`;

export const NavigationContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const NavigationButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  margin: 10px 10px;
  cursor: pointer;
  font-size: 16px;
  border-radius: 5px;
  width: 150px;

  &:hover {
    background-color: #0056b3;
  }
`;