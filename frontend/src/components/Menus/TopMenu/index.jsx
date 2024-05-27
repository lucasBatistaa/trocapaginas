import { View, Image, TextInput, TouchableOpacity } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from "@react-navigation/native"

import { styles } from "./styles";
import { THEME } from "../../../styles/Theme"
import { useUserStore } from "../../../store/badgeStore";

export default function TopMenu() {
    const user = useUserStore(state => state.data) 
    const navigation = useNavigation()

    return (
            <View style={styles.container}>
                <TouchableOpacity 
                    activeOpacity={0.7}
                    onPress={() => navigation.navigate('Profile', {user: user})}   
                >
                    <Image
                        style={styles.photo}
                        source={{ uri: user.photo }}
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