
import React from 'react'
import { Container, TextButton } from './styles'
import { Plus } from 'phosphor-react-native'

interface ButtonProps {
  title: string
  onPress: () => void
  icon?: string
}

export default function Button({ title, onPress, icon="" }: ButtonProps) {
  return (
    <Container onPress={onPress}>
      {icon === "plus" && <Plus size={18} color="#fff" />}
      <TextButton>{title}</TextButton>
    </Container>
  )
}