import {View} from 'react-native'
import { useNavigation } from "@react-navigation/native"

import HomeIcon from '../../../assets/home-icon.svg'
import PlusIcon from '../../../assets/plus-icon.svg'
import BooksIcon from '../../../assets/book-icon.svg'

import {styles} from './styles'

export default function BottomMenu () {
    const navigation = useNavigation()

    return (
        <View style={styles.container}>
            <HomeIcon
                onPress={() => navigation.navigate('InitialPage')}            
            />

            <PlusIcon
                onPress={() => navigation.navigate('CreatePost')}            
            />

            <BooksIcon
<<<<<<< HEAD
                onPress={() => navigation.navigate('Bookshelf')}
=======
                onPress={() => navigation.navigate('Bookshelf')}  
>>>>>>> eaa69c67d103ac62964cd3276e875a2a204cdda1
            />
        </View>
    )
}