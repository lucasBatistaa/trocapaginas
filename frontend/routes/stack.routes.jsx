import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Slogan from "../src/pages/Slogan"
import Login from "../src/pages/Login"

const Stack = createNativeStackNavigator()

export default function StackRoutes() {
    return (
        <Stack.Navigator initialRouteName='Slogan' screenOptions={{ headerShown: false}}>
            <Stack.Screen name='Slogan' component={Slogan} />
            <Stack.Screen name='Login' component={Login} />
        </Stack.Navigator>
    )
}