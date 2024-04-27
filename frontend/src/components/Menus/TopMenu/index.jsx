import { View, Image, TextInput } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';

import { styles } from "./styles";
import { THEME } from "../../../styles/Theme"

export default function TopMenu ({photo}) {
    return (
        <View>
            <View style={styles.container}>
                <View style={styles.containerElements}>
                    <Image
                        style={{width: 40, height: 40}}
                        source={photo}
                    />

                    <View>
                        <TextInput
                            placeholder='pesquisar livro/usuário'
                            placeholderTextColor={'rgba(89, 55, 42, 0.68)'}
                            style={styles.textInput}
                        />

                        <Ionicons  name="search-outline"
                            size={18}
                            style={styles.icon}
                            color={THEME.colors.brownDark}
                        />
                    </View>
                </View>
            </View>
        </View>
    )
}