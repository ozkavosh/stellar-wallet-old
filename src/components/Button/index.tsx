import { styled } from "styled-components";

export const Button = styled.button`
  background: black;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  border: 0;
  font-size: 1rem;
  font-weight: 500;
  transition: filter 0.2s;
  cursor: pointer;

  &:hover {
    filter: brightness(0.9);
  }
`;
