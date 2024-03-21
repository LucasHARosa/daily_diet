import { View, Text, FlatList, SectionList } from 'react-native'
import React from 'react'
import { Meals } from '../../app/Home';
import { Container, TextTitle } from './styles';
import CardMeal from '../CardMeal';

interface MealsListProps {
  mealsByDay: Meals[];
}
export default function MealsList({ mealsByDay}: MealsListProps) {
  return (
    <FlatList
      data={mealsByDay}
      showsVerticalScrollIndicator={false}
      ListFooterComponent={() => {
        return <View style={{ height: 100 }} />
      }}
      renderItem={({ item }) => {
        return (
          <Container>
            <TextTitle>{item.day}</TextTitle>
            <FlatList
              scrollEnabled={false}
              data={item.meals}
              renderItem={({ item }) => {
                return (
                  <CardMeal meal={item} />
                )
              }} 
            />
          </Container>
        )
      }}
        
      />
    
  )
}