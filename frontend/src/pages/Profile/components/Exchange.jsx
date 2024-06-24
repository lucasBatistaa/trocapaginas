import { View, Text, Image, TouchableOpacity } from "react-native";

import { THEME } from '../../../styles/Theme'
import { style } from "./style";

import ExchangeIcon from '../../../assets/exchange-icon.svg'

export default function Exchange ({id, image, title, author}) {
    return (
        <View style={style.container}>
            <Image 
                source={{uri: image}}
                style={style.imageBook}
            />

            <View style={{width: 250, flex: 1, flexDirection: 'column'}}>
                <Text  style={[THEME.fonts.h2.bold, {color: THEME.colors.brownDark}]}>
                    {title}
                </Text>

                <Text style={[ THEME.fonts.text, {color: THEME.colors.brownMedium}]}>
                    {author}
                </Text>

                <TouchableOpacity>
                    <ExchangeIcon style={{left: 220}}/>
                </TouchableOpacity>
            </View>
        </View>
    )
}