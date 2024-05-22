import { Text, View, Modal } from "react-native";
import { THEME } from "../../styles/Theme";

export default function Info() {

    return (
        <Modal
            visible={true}
            animationType="slide"
            transparent={true}
        >
            <View style={THEME.structure.modalContainer}>
                <View style={THEME.structure.modalContent}>
                    <Text style={[THEME.fonts.h1.bold, {textAlign: 'center'}]}>Aguarde enquanto processamos suas informações...</Text>
                </View>
            </View>
        </Modal>
    )
}
