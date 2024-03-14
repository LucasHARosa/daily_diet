
import React, { useState } from 'react'
import { CardRouterPercent, Page } from './styles'
import Header from '../../components/Header'
import { Meal, meals } from '../../Data'
import TwoTexts from '../../components/TwoTexts'



export default function Home() {
  const [dataMeal, setDataMeal] = useState<Meal[]>(meals)
  const percentageInPlan = dataMeal.filter((meal) => meal.followPlan).length / dataMeal.length * 100
  
  return (
    <Page>
      <Header />
      <CardRouterPercent>
        <TwoTexts texttop={`${percentageInPlan.toFixed(0)}%`} textbottom="das refeições dentro da dieta" />
      </CardRouterPercent>
    </Page>
  )
}