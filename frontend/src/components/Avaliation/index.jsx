import { useEffect, useState } from "react";
import { TouchableOpacity, View } from "react-native";

import Ionicons from '@expo/vector-icons/Ionicons'
import { THEME } from "../../styles/Theme";
import { styles } from "./styles";

export default function Avaliation({ size=20 }) {
    const [ starsAvaliation, setStarsAvaliation ] = useState({
        0: false,
        1: false,
        2: false,
        3: false,
        4: false
    })  

    const handleClickOnStarIcon = (avaliation) => {
        const newData = { ...starsAvaliation }

        Object.keys(newData).forEach(key => {
            newData[key] = key <= avaliation ? true : false
        })

        setStarsAvaliation(newData)
    }
    
    return (
        <View style={styles.container}>
            {
                Object.values(starsAvaliation).map((value, index) => (
                    <TouchableOpacity
                        key={index}
                        onPress={() => handleClickOnStarIcon(index)}
                    >
                        {
                            value ?
                                <Ionicons
                                    name='star'
                                    size={size}
                                    color={THEME.colors.brownLight}
                                />
                            :
                                <Ionicons
                                    name='star-outline'
                                    size={size}
                                    color={THEME.colors.brownLight}
                                />
                        }
                    </TouchableOpacity>
                ))
            }
        </View>
    )
}