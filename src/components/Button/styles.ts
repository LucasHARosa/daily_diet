import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
  padding: 18px;
  border-radius: 8px;
  margin-top: 8px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 8px;
`;

export const TextButton = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`;