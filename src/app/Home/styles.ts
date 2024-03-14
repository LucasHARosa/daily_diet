import styled from "styled-components/native";


export const Page = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  height: 100%;
  width: 100%;
  padding: 0 24px;
`

export const CardRouterPercent = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
  
  width: 100%;
  border-radius: 8;
  padding: 10;
`