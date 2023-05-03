import styled from "styled-components";

export const ContactItem = styled.li`
    display: flex;
    gap: 20px;
    width: 350px;
    justify-content: space-between;
    margin-bottom: 8px;
`;

export const ContactName = styled.span`
  font-weight: 500;
`;

export const ContactNumber = styled.span`
  font-weight: 500;
`;

export const ContactBtn = styled.button`
  justify-content: flex-end;
  background-color: white;
  border: 1px solid gray;
  border-radius: 3px;
  padding: 1px 10px;
  
  :hover {
    background-color: #D4EFFF;
  }
`;

