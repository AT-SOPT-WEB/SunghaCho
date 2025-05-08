import styled from "@emotion/styled";

const StyledInput = styled.input`
  display: block;
  width: 30rem;
  height: 3.5rem;
  margin: 0.2rem 0;
  border: 2px solid grey;
  border-radius: 1rem;
  font-size: 16px;
  color: #000000;
`;

type InputProps = {
  placeholder: string;
};

const Button = ({ placeholder }: InputProps) => {
  return <StyledInput type="text" placeholder={placeholder} />;
};

export default Button;
