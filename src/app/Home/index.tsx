
import React, { useState } from 'react'
import { AddNew, CardRouterPercent, Page, Text } from './styles'
import Header from '../../components/Header'
import { Meal, meals } from '../../Data'
import TwoTexts from '../../components/TwoTexts'
import Button from '../../components/Button'
import { FlatList } from 'react-native'



export default function Home() {
  const [dataMeal, setDataMeal] = useState<Meal[]>(meals)
  const percentageInPlan = dataMeal.filter((meal) => meal.followPlan).length / dataMeal.length * 100

  const mealsByDay: Map<string, Meal[]> = dataMeal.reduce((acc, meal) => {
   
    const dateKey = meal.datetime.toISOString().split('T')[0];
    
    if (acc.has(dateKey)) {
      acc.get(dateKey)?.push(meal);
    } else { 
      acc.set(dateKey, [meal]);
    }
  
    return acc;
  }, new Map<string, Meal[]>());
  console.log(mealsByDay);

  return (
    <Page>
      <Header />
      <CardRouterPercent>
        <TwoTexts texttop={`${percentageInPlan.toFixed(0)}%`} textbottom="das refeições dentro da dieta" />
      </CardRouterPercent>
      <AddNew>
        <Text>Refeições</Text>
        <Button title="Nova refeição" onPress={() => console.log('Adicionar')} icon='plus'/>
      </AddNew>
      <FlatList
        data={dataMeal}
        renderItem={({ item }) => <Text>{item.name}</Text>}
        keyExtractor={(item) => item.id}
      />
    </Page>
  )
}