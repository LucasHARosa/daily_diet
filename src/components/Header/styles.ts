import styled from "styled-components/native";

export const Container = styled.View`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;

  padding: 0px 20px;
  margin-top: 66px;
`

export const Logo = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;  
`

export const IconImage = styled.View`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_100};
  overflow: hidden;
`