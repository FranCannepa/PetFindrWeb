import styled from 'styled-components';

export const FooterContainer = styled.footer`
   background-color: #f4f4f4;
  padding: 20px 0;
  text-align: center;
    position: sticky;
    bottom: 0;
    width: 100%;
    height: 100%;
`;

export const BackButton = styled.button`

`;

export const ContentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

export const FooterLeft = styled.div`
  flex: 1;
`;

export const FooterRight = styled.div`
  flex: 1;
  text-align: right;
`;

export const FooterLinks = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const FooterLinkItem = styled.li`
  display: inline-block;
  margin-right: 20px;
`;

export const FooterLink = styled.a`
  text-decoration: none;
  color: #333;

  &:hover {
    color: #666;
  }
`;

export const PrimaryButton = styled.button`
background-color: #FFB347;
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

export const Row = styled.div`
display: flex;
flex-direction: row;
align-items: center;
height:100%;
@media (max-width: 768px) {
    flex-direction: column; 
    margin: 25px;
}
`

export const ErrorTitle = styled.h1`
color: red;
font-size: 24px;
margin-bottom: 10px;
`;


export const Column = styled.div`
display: flex;
flex-direction: column;
width: 100%;
align-items: center;
padding: 15px 30px;
@media (max-width: 768px) {
    flex-direction: column; 
    margin: 25px;
}
`

export const Container = styled.div`
  display: flex;
  margin: auto;
  width: 50%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export const StyledContainer = styled.div`
background-color: #70AE6E;
  align-items: center;
  margin: 25px auto;
  padding: 25px 15px;
`


