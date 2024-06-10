import { Modal, Text, TouchableWithoutFeedback, View } from "react-native";
import { styles } from "./styles";
import { THEME } from "../../../../styles/Theme";

export default function ModalSynopsis({ modalVisible, text, onClose }) {
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={onClose}
        >
            <TouchableWithoutFeedback onPress={() => onClose()}>
                <View style={styles.container}>
                    <TouchableWithoutFeedback> 
                        <View style={styles.content}>
                            <Text
                                style={[
                                    THEME.fonts.h1.bold,
                                    styles.colorDarkBrown
                                ]}
                            >
                                Sinopse
                            </Text>
                
                            <Text
                                style={[
                                    THEME.fonts.text,
                                    styles.text
                                ]}
                            >
                                {text}
                            </Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    )
}