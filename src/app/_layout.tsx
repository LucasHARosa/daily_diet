import {Stack} from 'expo-router'

export default function Layout(){
  
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}
    >
      <Stack.Screen name="Home/index" options={{title:"Home"}} />
      
    </Stack>
  )
}
//rnf to create a new functional component