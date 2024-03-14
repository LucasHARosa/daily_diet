import { View, Text } from 'react-native'
import React from 'react'
import { Container, TextBottom, TextTop } from './styles';

interface IPercentRouterProps {
  texttop: string;
  textbottom: string;
  size?: number;
}

export default function TwoTexts({ texttop, textbottom, size=32 }: IPercentRouterProps){
  return (
    <Container>
      <TextTop size={size}>{texttop}</TextTop>
      <TextBottom>{textbottom}</TextBottom>
    </Container>
  )
}