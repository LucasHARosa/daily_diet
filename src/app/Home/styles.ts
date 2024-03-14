import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  align-items: center;
  justify-content: center;
`;

export const Page = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  height: 100%;
  width: 100%;
  padding: 0 24px;
`

