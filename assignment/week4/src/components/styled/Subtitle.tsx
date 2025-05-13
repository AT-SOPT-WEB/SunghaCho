import styled from "@emotion/styled";
import type { TitleProps } from "@/types/props/styled";

const StyledDiv = styled.div`
  width: 30rem;
  text-align: left;
  margin: 0.5rem 0;
  padding: 0 1rem;
  font-size: 20px;
  font-weight: 600;
  color: #000000;
`;

const Subtitle = ({ children }: TitleProps) => {
  return <StyledDiv>{children}</StyledDiv>;
};

export default Subtitle;
