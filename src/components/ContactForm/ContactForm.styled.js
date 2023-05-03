import styled from "styled-components";

export const Form = styled.form`
  padding: 24px;
  border: 1px solid black;
  width: 350px;
  display: flex;
  flex-direction: column;
`;

export const FormLabel = styled.label`
  margin-bottom: 10px;
  display: contents;
`;

export const LabelName = styled.p`
  font-size: 18px;
  font-weight: 600; 
`;

export const FormInput = styled.input`
  margin-top: 10px;
  margin-bottom: 8px;
  :focus {
    outline: none;
    border-color: #93CDEF;
  }
`;

export const FormBtn = styled.button`
  margin-top: 10px;
  background-color: white;
  border: 1px solid grey;
  border-radius: 3px;
  padding: 1px 10px;
  width: 150px;
  :hover {
    background-color: #D4EFFF;
  }
`;