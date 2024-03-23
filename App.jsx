import { useFonts } from 'expo-font'
import { EBGaramond_400Regular, EBGaramond_600SemiBold, EBGaramond_500Medium, EBGaramond_700Bold } from '@expo-google-fonts/eb-garamond'
import { NavigationContainer } from '@react-navigation/native'
import StackRoutes from './routes/stack.routes'

export default function App() {
  const [ fontsLoaded ] = useFonts({
    EBGaramond_400Regular, 
    EBGaramond_500Medium,
    EBGaramond_600SemiBold,
    EBGaramond_700Bold,
  })

  if (!fontsLoaded) {
    return null
  }

  return (
    <NavigationContainer>
      <StackRoutes />
    </NavigationContainer>
  )
}