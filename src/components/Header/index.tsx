import { Image} from 'react-native'
import React from 'react'
import Forkknife from '../../assets/ForkKnife.svg'
import Vector from '../../assets/Vector.svg'
import { Container, IconImage, Logo } from './styles'


export default function Header() {
  return (
    <Container>
      <Logo>
        <Forkknife width={37} height={37}/>
        <Vector width={37} height={37}/>
      </Logo>
      <IconImage>
        <Image 
          source={require('../../assets/65405310.png')}
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
              
            }}  
        />
      </IconImage>
    </Container>
  )
}