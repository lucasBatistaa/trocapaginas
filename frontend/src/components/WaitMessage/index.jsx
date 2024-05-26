import { Text, View, Modal } from "react-native"

import { THEME } from "../../styles/Theme"
import { styles } from "./style"

export default function WaitMessage({ modalVisible }) {
    return (
        <Modal
            visible={modalVisible}
            animationType="slide"
            transparent={true}
        >
            <View style={styles.container}>
                <View style={styles.content}>
                    <Text style={[THEME.fonts.h1.normal, styles.text]}>Aguarde enquanto processamos suas informações...</Text>
                </View>
            </View>
        </Modal>
    )
}
