import { styled } from 'styled-components';

export const Modal = styled.div<{ $open?: React.SetStateAction<boolean> }>`
  display: ${props => props.$open ? "flex" : "none" };
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 1rem;
  border-radius: 0.25rem;
  color: white;
  background-color: white;

  &::after{
    content: '';
    position: absolute;
    z-index: -1;
    width: 100vw;
    height: 100vh;
    background: rgba(0,0,0,0.5);
  }

  & form{
    display: flex;
    flex-direction: column;
    gap: 1rem;
    width: 100%;
  }
`;

