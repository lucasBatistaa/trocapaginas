import {View} from 'react-native'
import { useNavigation } from "@react-navigation/native"

import HomeIcon from '../../../assets/home-icon.svg'
import PlusIcon from '../../../assets/plus-icon.svg'
import BooksIcon from '../../../assets/book-icon.svg'

import {styles} from './styles'

export default function BottomMenu ( { user }) {
    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <HomeIcon
                onPress={() => navigation.navigate('InitialPage')}            
            />

            <PlusIcon
                onPress={() => navigation.navigate('CreatePost', {user: user})}
                testID="createPost-button"            
            />

            <BooksIcon
                onPress={() => navigation.navigate('Bookshelf')}  
            />
        </View>
    )
}