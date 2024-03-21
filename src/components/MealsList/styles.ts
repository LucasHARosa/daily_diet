import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction:colum;
  margin-top: 30px;

`

export const TextTitle = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`