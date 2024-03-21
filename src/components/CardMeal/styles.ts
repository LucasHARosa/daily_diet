import styled from "styled-components/native";

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;

  gap: 5px;
  padding: 20px 15px;

  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_500};
  margin-top: 10px;

`;

export const TextHour = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;

export const ContainerText = styled.View`
  flex: 1;
  height: 16px;
`;


export const TextDescription = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  color: ${({ theme }) => theme.COLORS.GRAY_200};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  
  
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Divider = styled.View`
  width: 1px;
  height: 100%;
  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
`;

interface CircleIndicatorProps {
  followPlan: boolean;
}


export const CircleIndicator = styled.View<CircleIndicatorProps>`
  width: 10px;
  height: 10px;
  border-radius: 5px;
  margin-left: 10px;
  background-color: ${({ theme, followPlan }) => followPlan ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID};
`;