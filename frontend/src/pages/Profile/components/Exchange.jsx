import { View, Text, Image, TouchableOpacity } from "react-native";

import { THEME } from '../../../styles/Theme'
import { style } from "./style";

import ExchangeIcon from '../../../assets/exchange-icon.svg'

export default function Exchange ({id, image, title, author}) {
    return (
        <View style={style.container}>
            <Image 
                source={image}
                style={style.imageBook}
            />

            <View>
                <Text  style={[THEME.fonts.h2.bold, {color: THEME.colors.brownDark}]}>
                    {title}
                </Text>

                <Text style={[ THEME.fonts.text, {color: THEME.colors.brownMedium}]}>
                    {author}
                </Text>
            </View>

            <TouchableOpacity>
                <ExchangeIcon style={{right: 30, top: 66}}/>
            </TouchableOpacity>
            
        </View>
    )
}