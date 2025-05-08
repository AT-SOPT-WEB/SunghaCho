import styled from "@emotion/styled";

const StyledButton = styled.button`
  display: block;
  width: 30rem;
  height: 3.5rem;
  margin: 0.5rem 0;
  border: none;
  border-radius: 1rem;
  font-size: 16px;
  cursor: pointer;
  color: #000000;
  background-color: #e9e9e9;
  text-decoration: none;

  &:disabled {
    cursor: not-allowed;
    background-color: #e9e9e9;
    color: #ffffff;
    text-decoration: none;
  }
`;

type ButtonProps = {
  onClick?: () => void;
  disabled?: boolean;
  children: React.ReactNode;
};

const Button = ({ onClick, disabled, children }: ButtonProps) => {
  return (
    <StyledButton onClick={onClick} disabled={disabled}>
      {children}
    </StyledButton>
  );
};

export default Button;
