import styled from 'styled-components';

export const FormContainer = styled.div`

align-items: flex-start;
min-width:200px;
margin: 0 auto;
padding: 20px;
border: 1px solid #ccc;
border-radius: 8px;
background-color: #fff;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const FormTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 20px;
`;
export const StyledSelect = styled.select`
padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;
export const FormGroup = styled.div`
  margin: 20px 10px;
`;

export const Label = styled.label`
  display: block;
  font-weight: bold;
  margin-bottom: 6px;
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const FileInput = styled.input`
  display: none;
  background-color: #adf0ad;
  color: #333;
  padding: 10px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  /* Add any additional styles as needed */
`;

export const FileLabel = styled.label`
text-align: center;
display: block;
  font-weight: bold;
  margin: 10px 0px;
/*   width: 150px;
  height: 50px; */
  background-color: #adf0ad;
  color: #333;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export const MapSection = styled.div`
width: 150px;
height: 150px;
border: solid 2px black;

`

export const SubmitButton = styled.button`
margin: 10px;
  display: inline-block;
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;