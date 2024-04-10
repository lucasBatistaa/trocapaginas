import { Text, View } from "react-native"
import { THEME } from "../../styles/Theme"
import { useNavigation } from "@react-navigation/native"

export default function Links ({text, screen, title}) { 
    const navigation = useNavigation()

    return (
        <View style={{alignItems: 'center'}} >
            <Text >
                {text}
                <Text
                    onPress={() => { navigation.navigate(screen)}}
                    style={[
                        THEME.fonts.link,
                        {color: THEME.colors.brownMedium}
                    ]}> {title}
                </Text>
            </Text>
        </View>
    )
};
