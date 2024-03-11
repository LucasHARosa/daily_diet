import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {useFonts, NunitoSans_400Regular, NunitoSans_700Bold} from '@expo-google-fonts/nunito-sans';
import { ThemeProvider } from 'styled-components';
import theme from '../theme';


export default function Home() {
  const [fontsLoaded] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_700Bold,
  });



  return (
    <ThemeProvider theme={theme}>
      {fontsLoaded ? (
        <View>
          <Text>Daily Diet</Text>
        </View>
      ) : null}
    </ThemeProvider>
  );
}
