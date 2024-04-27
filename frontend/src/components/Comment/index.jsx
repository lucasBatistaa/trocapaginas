import { Modal, View, Text, Image, TextInput, ScrollView, TouchableOpacity } from "react-native";
import { styles } from "./style";
import { useEffect, useState } from "react";
import { THEME } from "../../styles/Theme";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Comment({modalValue}) {
    const [ modalVisible, setModalVisible ] = useState(true)
    const [ textComment, setTextComment ] = useState('')
    const [ allComments, setAllComments] = useState('')

    setAllComments([
        {
            image: '../../assets/foto-perfil.png',
            username: 'Nome da usuária',
            time: '1h',
            comment: 'sim amigaa, esse livro é maravilhoso'
        }   
    ])

    const handleSendComment = () => {
        if (textComment) {
            //id do usuario e comentário
            console.log('Enviado!')
        }
    }

    return (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            //onRequestClose
        >
            <View 
                style={styles.principalView}
            >   
                <TouchableOpacity
                    style={styles.clickClose}
                    onPress={() => setModalVisible(false)}
                >

                </TouchableOpacity>
                <View style={styles.commentView}>
                    <Text style={[THEME.fonts.h1.normal, { color: THEME.colors.brownDark, alignSelf: 'center' }]}>Comentários</Text>
                    <ScrollView 
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={styles.commentsList}
                    >
                        { 
                            allComments.map((comment) => (
                                <View style={styles.comment}>
                                    <Image 
                                        source={comment.image}
                                        style={{width: 36, height: 36}}
                                    />
                                    <View style={styles.commentContent}>
                                        <View style={styles.commentHeader}>
                                            <Text style={[THEME.fonts.h2.normal, { color: THEME.colors.brownDark}]}>{comment.username}</Text>
                                            <Text style={[THEME.fonts.text, { color: THEME.colors.grayDark}]}>{comment.time}</Text>
                                        </View>
                                        <Text style={THEME.fonts.text}>{comment.comment}</Text>
                                    </View>
                                </View>    
                            ))
                        
                        }                    
                    </ScrollView>

                    <View style={styles.textInputView}>
                        <TextInput
                            style={styles.textInput}
                            multiline={true}
                            numberOfLines={1}
                            onChangeText={setTextComment}
                            value={textComment}
                            placeholder="Adicionar comentário"
                            placeholderTextColor={'#8B8B8B'}
                        />

                        <Ionicons 
                            name="send" 
                            style={styles.icon}
                            size={20} 
                            color={THEME.colors.grayDark}
                            onPress={handleSendComment}
                        />
                    </View>
                </View>
            </View>
        </Modal>
    )
}
