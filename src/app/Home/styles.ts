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
  border-radius: 8px;
  padding: 20px;
  margin-top: 20px;
`

export const AddNew = styled.View`
  flex-direction: column;
  margin-top: 30px;
`

export const Text = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
`