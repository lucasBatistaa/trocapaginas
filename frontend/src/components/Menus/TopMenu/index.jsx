import { View, Image, TextInput, TouchableOpacity } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from "@react-navigation/native"

import { styles } from "./styles";
import { THEME } from "../../../styles/Theme"

export default function TopMenu ({photo}) {
    const navigation = useNavigation()

    return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => navigation.navigate('Profile')}   >
                    <Image
                        style={{width: 40, height: 40, borderRadius: 20}}
                        source={photo}
                    />
                </TouchableOpacity>

                <View>
                    <TextInput
                        placeholder='pesquisar livro/usuário'
                        placeholderTextColor={'rgba(89, 55, 42, 0.68)'}
                        style={[styles.textInput, THEME.fonts.text]}
                    />

                    <Ionicons  name="search-outline"
                        size={18}
                        style={styles.icon}
                        color={THEME.colors.brownDark}
                    />
                </View>
            </View>
    )
}