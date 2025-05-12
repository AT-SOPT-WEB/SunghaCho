import styled from "@emotion/styled";

const StyledP = styled.div`
  width: 28rem;
  margin: 0.2rem 0;
  font-size: 16px;
  text-align: left;
  color: #ff0000;
`;

type ErrorMessageProps = {
  message: string;
};

const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return <StyledP>{message}</StyledP>;
};

export default ErrorMessage;
