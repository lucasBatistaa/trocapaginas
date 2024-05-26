import { useEffect, useState } from "react";
import { TouchableOpacity, View } from "react-native";

import Ionicons from '@expo/vector-icons/Ionicons'
import { THEME } from "../../styles/Theme";
import { styles } from "./styles";

export default function Avaliation({ size=20, valueOfAvaliation, totalAvaliation }) {
    const [stars, setStars] = useState(
        Array.from({ length: 5 }, (_, index) => index <= valueOfAvaliation - 1)
    )

    const handleClickOnStarIcon = (avaliation) => {
        const updatedStars = stars.map((value, index) => index <= avaliation)
        
        setStars(updatedStars)
        totalAvaliation(avaliation + 1)
    }
    
    return (
        <View style={styles.container}>
            {
                stars.map((filled, index) => (
                    <TouchableOpacity
                        key={index}
                        onPress={() => handleClickOnStarIcon(index)}
                    >
                        <Ionicons
                            name={filled ? 'star' : 'star-outline'}
                            size={size}
                            color={THEME.colors.brownLight}
                        />
                    </TouchableOpacity>
                ))
            }
        </View>
    )
}