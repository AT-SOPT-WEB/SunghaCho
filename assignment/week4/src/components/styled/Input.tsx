import styled from "@emotion/styled";
import type { InputProps } from "@/types/props/styled";

const StyledInput = styled.input`
  display: block;
  width: 30rem;
  height: 3.5rem;
  margin: 0.2rem 0;
  padding: 0 1rem;
  border: 2px solid grey;
  border-radius: 1rem;
  font-size: 16px;
  color: #000000;
`;

const Button = ({ placeholder, value, onChange }: InputProps) => {
  return (
    <StyledInput
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Button;
