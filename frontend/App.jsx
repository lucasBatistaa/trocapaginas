import { StatusBar } from 'react-native'

import { 
  EBGaramond_400Regular, 
  EBGaramond_600SemiBold, 
  EBGaramond_500Medium, 
  EBGaramond_700Bold 
} from '@expo-google-fonts/eb-garamond'
import { useFonts } from 'expo-font'

import StackRoutes from './src/routes/stack.routes'
import { NavigationContainer } from '@react-navigation/native'

import Loading from './src/components/Loading'

export default function App() {
  const [ fontsLoaded ] = useFonts({
    EBGaramond_400Regular, 
    EBGaramond_500Medium,
    EBGaramond_600SemiBold,
    EBGaramond_700Bold,
  })

  if (!fontsLoaded) {
    return <Loading />
  }

  return (
    <NavigationContainer>
      <StatusBar barStyle={'light-content'}/>
      <StackRoutes />
    </NavigationContainer>
  )
}