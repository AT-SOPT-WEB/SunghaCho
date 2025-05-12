import styled from "@emotion/styled";
import type { TitleProps } from "@/types/props/styled";

const StyledP = styled.p`
  margin: 0.7rem 0;
  padding: 0 1rem;
  font-size: 36px;
  font-weight: 700;
  color: #000000;
`;

const Title = ({ children }: TitleProps) => {
  return <StyledP>{children}</StyledP>;
};

export default Title;
