import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Slogan from "../src/pages/Slogan"
import Login from "../src/pages/Login"
import Reset from '../src/pages/Reset/confirmUser'
import Register from '../src/pages/Register'

const Stack = createNativeStackNavigator()

export default function StackRoutes() {
    return (
        <Stack.Navigator initialRouteName='Register' screenOptions={{ headerShown: false}}>
            <Stack.Screen name='Slogan' component={Slogan} />
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='Register' component={Register} />
            <Stack.Screen name='Reset' component={Reset}/>
        </Stack.Navigator>
    )
}