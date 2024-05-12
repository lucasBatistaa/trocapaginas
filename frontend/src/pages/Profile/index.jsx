import {View, Image, Text} from 'react-native'

import { THEME } from '../../styles/Theme'
import { styles } from './style'

import MenuICon from '../../assets/menu-icon.svg'

export default function Profile () {
  return (
    <View>
        <View style={styles.header}>
            <Image
                style={{width: 90, height: 90}}
                source={require('../../assets/user-circle.png')}
            />

            <Text style={[THEME.fonts.h1.normal, {color: THEME.colors.brownDark}]}>
                Nome da usuária
            </Text>

            <MenuICon
                style={{alignSelf: 'flex-start', bottom: 20}}
            />
        </View>
    </View>
  )
}