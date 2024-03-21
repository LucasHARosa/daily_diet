import { View, Text, FlatList, SectionList } from 'react-native'
import React from 'react'
import { Meals } from '../../app/Home';
import { Container, TextTitle } from './styles';

interface MealsListProps {
  mealsByDay: Meals[];
}
export default function MealsList({ mealsByDay}: MealsListProps) {
  return (
    <FlatList
      data={mealsByDay}
      renderItem={({ item }) => {
        return (
          <Container>
            <TextTitle>{item.day}</TextTitle>
            <FlatList
              scrollEnabled={false}
              data={item.meals}
              renderItem={({ item }) => {
                return (
                  <View>
                    <Text>{item.name}</Text>
                  </View>
                )
              }}
            />
          </Container>
        )
      }}
        
      />
    
  )
}