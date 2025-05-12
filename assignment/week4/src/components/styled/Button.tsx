import styled from "@emotion/styled";
import type { ButtonProps } from "@/types/styled";

const StyledButton = styled.button`
  display: block;
  width: 30rem;
  height: 3.5rem;
  margin: 0.5rem 0;
  border: none;
  border-radius: 1rem;
  font-size: 16px;
  cursor: pointer;
  color: #ffffff;
  background-color: #000000;
  text-decoration: none;

  &:disabled {
    cursor: not-allowed;
    background-color: #e9e9e9;
    color: #ffffff;
    text-decoration: none;
  }
`;

const Button = ({ onClick, disabled, children }: ButtonProps) => {
  return (
    <StyledButton onClick={onClick} disabled={disabled}>
      {children}
    </StyledButton>
  );
};

export default Button;
