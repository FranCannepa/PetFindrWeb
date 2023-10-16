import styled from 'styled-components';

export const FilterContainer = styled.div`
display: flex;
flex-direction:column;
width: 150px;
background-color: skyblue;
margin:  50px 30px;
    @media (max-width: 600px) {
        flex-direction:row;
        width: 100%;
    }
    input{
        width: 25%;
    }
`

export const SelectInputs = styled.select`

`;

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;

export const Card = styled.div`
border: 1px solid #ccc;
background-color: wheat;
padding: 16px;
margin: 16px;
width: 200px;
border-radius: 8px;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const CardType = styled.h1`
font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
font-size: 32px;
font-weight: bold;
`;

export const ReportsContainer = styled.div`
    width: 100%;
    background-color: skyblue;
    display: flex;
    flex-direction: column;
`

export const CardContainer = styled.div`


background-color: green;

`

export const CardItemContainer = styled.div`

background-color: yellow;


`