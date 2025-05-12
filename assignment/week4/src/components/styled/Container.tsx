import styled from "@emotion/styled";
import type { ContainerProps } from "@/types/styled";

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;
`;

const Container = ({ children }: ContainerProps) => {
  return <StyledDiv>{children}</StyledDiv>;
};

export default Container;
