import {View} from 'react-native'

import HomeIcon from '../../../assets/home-icon.svg'
import PlusIcon from '../../../assets/plus-icon.svg'
import BooksIcon from '../../../assets/book-icon.svg'

import {styles} from './styles'

export default function BottomMenu () {
    return (
        <View style={styles.container}>
            <HomeIcon/>

            <PlusIcon/>

            <BooksIcon/>
        </View>
    )
}