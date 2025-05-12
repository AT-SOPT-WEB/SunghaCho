import styled from "@emotion/styled";
import type { ContainerProps } from "@/types/props/styled";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 15rem;
  align-items: center;
  height: 60vh;
`;

const Container = ({ children }: ContainerProps) => {
  return <StyledDiv>{children}</StyledDiv>;
};

export default Container;
