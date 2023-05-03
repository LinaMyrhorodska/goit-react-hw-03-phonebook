import styled from "styled-components";

export const FilterLabel = styled.label`
  display: grid;
`;

export const FilterTitle = styled.p`
  font-size: 18px;
  font-weight: 600;
`;

export const FilterInput = styled.input`
margin-top: 8px;
margin-bottom: 12px;
width: 350px;
:focus {
    outline: none;
    border-color: #93CDEF;
  }
`;