
import React, { useState } from 'react'
import { AddNew, CardRouterPercent, Day, Page, Text, TextTitle } from './styles'
import Header from '../../components/Header'
import { Meal, meals } from '../../Data'
import TwoTexts from '../../components/TwoTexts'
import Button from '../../components/Button'
import { FlatList } from 'react-native'
import MealsList from '../../components/MealsList'

export interface Meals {
  day: string;
  meals: Meal[];
}

export default function Home() {
  const [dataMeal, setDataMeal] = useState<Meal[]>(meals)
  const percentageInPlan = dataMeal.filter((meal) => meal.followPlan).length / dataMeal.length * 100

  const mealsByDay: Meals[] = meals.reduce((acc: Meals[], meal) => {
    // Format the datetime to 'YYYY-MM-DD' string
    const dateKey = meal.datetime.toISOString().split('T')[0];
  
    // Check if there is already an entry for this date
    const existingEntry = acc.find(entry => entry.day === dateKey);
  
    // If an entry already exists, add the meal to its array
    if (existingEntry) {
      existingEntry.meals.push(meal);
    } else { // If no entry exists, create a new entry with the meal
      acc.push({ day: dateKey, meals: [meal] });
    }
  
    return acc;
  }, []);
 
  function handleNavigateStatitics() {
    //navegar para a tela de estatisticas
    

  }

  return (
    <Page>
      <Header />
      <CardRouterPercent onPress={handleNavigateStatitics}>
        <TwoTexts texttop={`${percentageInPlan.toFixed(0)}%`} textbottom="das refeições dentro da dieta" />
      </CardRouterPercent>
      <AddNew>
        <Text>Refeições</Text>
        <Button title="Nova refeição" onPress={() => console.log('Adicionar')} icon='plus'/>
      </AddNew>
      <MealsList mealsByDay={mealsByDay} />
    </Page>
  )
}