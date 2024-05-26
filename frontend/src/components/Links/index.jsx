import { Text, View } from "react-native"

import { THEME } from "../../styles/Theme"
import { useNavigation } from "@react-navigation/native"
import { styles } from "./styles"

export default function Links ({ text, screen, title }) { 
    const navigation = useNavigation()

    return (
        <View style={styles.container} >
            <Text style={THEME.fonts.link}>
                {text} 
                <Text
                    onPress={() => { navigation.navigate(screen)}}
                    style={styles.title}
                > 
                     {title}
                </Text>
            </Text>
        </View>
    )
};
