import styled from "@emotion/styled";
import type { ListProps } from "@/types/props/styled";

const StyledDiv = styled.div`
  margin: 0.5rem 0;
  font-size: 25px;
  font-weight: 600;
  color: #000000;
`;

const List = ({ children }: ListProps) => {
  return <StyledDiv>{children}</StyledDiv>;
};

export default List;
