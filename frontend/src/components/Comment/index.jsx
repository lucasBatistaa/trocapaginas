import { Modal, View, Text, Image, TextInput } from "react-native";
import { styles } from "./style";
import { useState } from "react";
import { THEME } from "../../styles/Theme";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Comment({modalVisible}) {

    // const [ modalIsVisible, setModalIsVisible ] = useState(false)
    const [ textComment, setTextComment ] = useState('')

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            //onRequestClose
        >
            <View style={styles.principalView}>
                <View style={styles.commentView}>
                    <Text style={[THEME.fonts.h1.normal, { color: THEME.colors.brownDark, alignSelf: 'center' }]}>Comentários</Text>
                    <View style={styles.commentsList}>
                        <View style={styles.comment}>
                            <Image 
                                source={require('../../assets/foto-perfil.png')}
                                style={{width: 40, height: 40}}
                            />
                            <View style={styles.commentContent}>
                                <View style={styles.commentHeader}>
                                    <Text style={[THEME.fonts.h2.normal, { color: THEME.colors.brownDark}]}>Nome da usuária</Text>
                                    <Text style={[THEME.fonts.text, { color: THEME.colors.grayDark}]}>1h</Text>
                                </View>
                                <Text>sim amigaa, esse livro é maravilhoso</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.textInputView}>
                        <TextInput
                            style={styles.textInput}
                            multiline={true}
                            numberOfLines={1}
                            onChangeText={setTextComment}
                            value={textComment}
                            placeholder="Informe o título"
                            placeholderTextColor={'#8B8B8B'}
                        />

                        <Ionicons 
                            name="send" 
                            style={styles.icon}
                            size={24} 
                            color={THEME.colors.grayDark}
                        />
                    </View>
                </View>
            </View>
        </Modal>
    )
}
