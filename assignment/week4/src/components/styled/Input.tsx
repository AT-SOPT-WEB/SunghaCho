import styled from "@emotion/styled";
import type { InputProps } from "@/types/props/styled";

const StyledInput = styled.input`
  display: block;
  width: 30rem;
  height: 3.5rem;
  margin: 0.2rem 0;
  padding: 0 1rem;
  border: 2px solid #cacaca;
  border-radius: 1rem;
  font-size: 16px;
  color: #000000;
`;

const Input = ({ type, placeholder, value, onChange }: InputProps) => {
  return (
    <StyledInput
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default Input;
