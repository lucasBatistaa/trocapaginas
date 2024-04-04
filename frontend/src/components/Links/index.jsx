import { Text, View } from "react-native"
import { THEME } from "../../styles/Theme"
import { useNavigation } from "@react-navigation/native"

export default function Links (props) { 
    const navigation = useNavigation()

    return (
        <View style={{alignItems: 'center'}} >
            <Text >
                {props.text}
                <Text
                    onPress={() => { navigation.navigate(props.screen)}}
                    style={[
                        THEME.fonts.link,
                        {color: THEME.colors.brownMedium}
                    ]}> {props.title}
                </Text>
            </Text>
        </View>
    )
};
