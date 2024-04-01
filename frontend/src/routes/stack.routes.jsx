import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Slogan from "../pages/Slogan"
import Login from "../pages/Login"
import Reset from '../pages/Reset/confirmUser'
import Register from '../pages/Register'

const Stack = createNativeStackNavigator()

export default function StackRoutes() {
    return (
        <Stack.Navigator initialRouteName='Slogan' screenOptions={{ headerShown: false}}>
            <Stack.Screen name='Slogan' component={Slogan} />
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='Register' component={Register} />
            <Stack.Screen name='Reset' component={Reset}/>
        </Stack.Navigator>
    )
}