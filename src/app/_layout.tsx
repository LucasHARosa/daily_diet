import {Stack} from 'expo-router'
import {useFonts, NunitoSans_400Regular, NunitoSans_700Bold} from '@expo-google-fonts/nunito-sans';
import { ThemeProvider } from 'styled-components';
import theme from '../theme';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function Layout(){
  const [fontsLoaded] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_700Bold
  });
  
  return (
    fontsLoaded ? <RootLayout /> : null
  )
}


function RootLayout() {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider
        style={{
          backgroundColor: theme.COLORS.GRAY_700,
        }}
      >
        <Stack
          screenOptions={{
            headerStyle:{
              backgroundColor: theme.COLORS.RED_DARK,
            
            }
          }}
        >

          <Stack.Screen name="Home/index" options={{title:"Home", headerShown:false}} />
          <Stack.Screen name="index" options={{title:"index", headerShown:false}} />
          <Stack.Screen name="Statistic/index" options={{title:"Statistic", headerShown:false}} />
        </Stack>
      </SafeAreaProvider>
    </ThemeProvider>
  )
}
//rnf to create a new functional component