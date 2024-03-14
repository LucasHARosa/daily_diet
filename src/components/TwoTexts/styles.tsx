import styled from "styled-components/native";

interface IPercentRouterProps {
  inPlan: boolean;
}

export const Card = styled.View<IPercentRouterProps>`
  background-color: ${({ theme, inPlan }) => inPlan ? theme.COLORS.GREEN_LIGHT : theme.COLORS.RED_LIGHT};
  height: 100%;
  width: 100%;
  padding: 0 24px;
`
export const Container = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`
interface ITextProps {
  size?: number;
}
export const TextBottom = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XL};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.GRAY_100};
`
export const TextTop = styled.Text<ITextProps>`
  font-size: ${({ theme, size }) => size==24 ? theme.FONT_SIZE.XXL : theme.FONT_SIZE.XXXL};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_100};
`