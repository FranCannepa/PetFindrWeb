import styled from "styled-components";

export const SubmitButtonPrimary = styled.button`
margin: 15px 10px;
background-color: #A9E190;
color: white;
border: none;
padding: 10px 20px;
border-radius: 5px;
cursor: pointer;
font-family: Arial, sans-serif;
font-size: 16px;
transition: background-color 0.3s ease;

&:hover {
  background-color: #8cc167;
}
`;

export const StyledParagraph = styled.p`
  font-family: 'Arial, sans-serif';
  font-size: 35px;
  color: #333;
  text-align: center;
  width: 75%; 
  height: max-content;
  background-color: #adf0ad;
  @media (max-width: 600px) {
    display: none;
  }
`;

export const LogoContainer = styled.div`
  background-color: white;
  height: 150px;
  width: 200px;
  margin-bottom: 30px;
  border-radius: 10px; 
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 10px; 
  }
`;

export const LoginPanel = styled.section`
  background-color: #70AE6E;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 25px auto

  input {
    width: 100%; 
    max-width: 300px; 
    padding: 10px; 
    margin: 10px 0; 
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px; 
  }
`;

