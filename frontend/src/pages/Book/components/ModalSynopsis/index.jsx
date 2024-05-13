import { Modal, Text, View } from "react-native";
import { styles } from "./styles";
import { THEME } from "../../../../styles/Theme";

export default function ModalSynopsis({ modalVisible }) {
    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
        >
            <View style={styles.container}>
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
                        Orgulho e preconceito é o livro mais famoso de Jane Austen e possui uma série de personagens inesquecíveis e um enredo memorável. Austen nos apresenta Elizabeth Bennet como heroína irresistível e seu pretendente aristocrático, o sr. Darcy. Nesse livro, aspectos diferentes são abordados: orgulho encontra preconceito, ascendência social confronta desprezo social, equívocos e julgamentos antecipados conduzem alguns personagens ao sofrimento e ao escândalo.
                    </Text>
                </View>
            </View>
        </Modal>
    )
}