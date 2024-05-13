import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Slogan from "../pages/Slogan"
import Login from "../pages/Login"
import Register from '../pages/Register'
import RegisterWithEmail from '../pages/Register/RegisterWithEmail'
import Reset from '../pages/Reset'
import InitialPage from '../pages/InitialPage'
import CreatePost from '../pages/CreatePost'
import Bookshelf from '../pages/Bookshelf'
<<<<<<< HEAD
import Profile from '../pages/Profile'
=======
import Book from '../pages/Book'
>>>>>>> eaa69c67d103ac62964cd3276e875a2a204cdda1

const Stack = createNativeStackNavigator()

export default function StackRoutes() {
    return (
        <Stack.Navigator initialRouteName='Profile' screenOptions={{ headerShown: false}}>
            <Stack.Screen name='Slogan' component={Slogan} />
            <Stack.Screen name='Login' component={Login} />
            <Stack.Screen name='Register' component={Register} />
            <Stack.Screen name='RegisterWithEmail' component={RegisterWithEmail} />
            <Stack.Screen name='Reset' component={Reset}/>
            <Stack.Screen name='InitialPage' component={InitialPage}/>
            <Stack.Screen name='CreatePost' component={CreatePost}/>
            <Stack.Screen name='Bookshelf' component={Bookshelf}/>
<<<<<<< HEAD
            <Stack.Screen name='Profile' component={Profile}/>
=======
            <Stack.Screen name='Book' component={Book}/>
>>>>>>> eaa69c67d103ac62964cd3276e875a2a204cdda1
        </Stack.Navigator>
    )
}