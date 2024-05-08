import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Slogan from "../pages/Slogan"
import Login from "../pages/Login"
import Register from '../pages/Register'
import RegisterWithEmail from '../pages/Register/RegisterWithEmail'
import Reset from '../pages/Reset'
import InitialPage from '../pages/InitialPage'
import CreatePost from '../pages/CreatePost'

const Stack = createNativeStackNavigator()
//<Stack.Screen name='ConfirmationCode' component={ConfirmationCode}/>

export default function StackRoutes() {
    return (
        <Stack.Navigator initialRouteName='InitialPage' screenOptions={{ headerShown: false}}>
            <Stack.Screen name='Slogan' component={Slogan} />
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='Register' component={Register} />
            <Stack.Screen name='RegisterWithEmail' component={RegisterWithEmail} />
            <Stack.Screen name='Reset' component={Reset}/>
            <Stack.Screen name='InitialPage' component={InitialPage}/>
            <Stack.Screen name='CreatePost' component={CreatePost}/>
        </Stack.Navigator>
    )
}