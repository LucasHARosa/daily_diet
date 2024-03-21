import { View, Text } from 'react-native'
import React from 'react'
import { CircleIndicator, Container, ContainerText, Divider } from './styles'
import { Meal } from '../../Data'

interface CardMealProps {
  meal:Meal
}

export default function CardMeal({meal}:CardMealProps ) {
  const hour = meal.datetime.getHours().toString().padStart(2, '0') + ':' + meal.datetime.getMinutes().toString().padStart(2, '0')
  return (
    <Container>
      <Text>{hour}</Text>
      <Divider />
      <ContainerText>
        <Text>{meal.description}</Text>
      </ContainerText>
      <CircleIndicator followPlan={meal.followPlan} />
    </Container>
  )
}