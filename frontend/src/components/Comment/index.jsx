import { useEffect, useRef, useState } from "react";
import { 
    Modal, 
    View, 
    Text, 
    Image, 
    TextInput, 
    ScrollView, 
    TouchableOpacity, 
    Keyboard, 
    PanResponder 
} from "react-native";

import { FormatDate } from "../../utils/formatDate";

import { styles } from "./style";
import { THEME } from "../../styles/Theme";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Comment({modalVisible, onPress}) {
    const [ textComment, setTextComment ] = useState('')
    const [ allComments, setAllComments] = useState([])
    const inputRef = useRef(null)

    useEffect(() => {
        setAllComments([
            {
                idUser: '1',
                image: require('../../assets/foto-perfil.png'),
                username: 'Nome da usuária',
                time: `${FormatDate()}`,
                comment: 'sim amigaa, esse livro é maravilhoso'
            },
        ]);
    }, [])

    const handleSendComment = () => {
        if (textComment.trim()) {
            //id do usuario e comentário
            
            const newComment = {
                idUser: '3',
                image: require('../../assets/foto-perfil.png'),
                username: 'Nome da usuária',
                time: `${FormatDate()}`,
                comment:`${textComment.trim()}`
            }

            setAllComments([...allComments, newComment])

            inputRef.current.blur() 
            Keyboard.dismiss()
            setTextComment('')
            console.log('Enviado!')
        }
    }

    const panResponder = PanResponder.create({
        onStartShouldSetPanResponderCapture: () => true,
        onPanResponderMove: (event, gestureState) => {
            // Detecta movimento para baixo (dy > 0)
            if (gestureState.dy > 0) {
                // Fecha o modal
                onPress()
            }
        },
    });

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => setModalVisible(false)}
        >
            <View 
                style={styles.principalView}
            >   
                <TouchableOpacity
                    style={styles.clickClose}
                    onPress={onPress}
                >

                </TouchableOpacity>
                <View style={styles.commentView}>
                    <View {...panResponder.panHandlers}>
                        <View style={styles.gestureDropDown}></View>
                        <Text style={[THEME.fonts.h1.normal, { color: THEME.colors.brownDark, alignSelf: 'center' }]}>Comentários</Text>
                    </View>

                    <ScrollView 
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={styles.commentsList}
                    >
                        { 
                            allComments?.map((comment) => (
                                <View 
                                    style={styles.comment}
                                    key={comment.idUser}
                                >
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
                        
                            ref={inputRef}
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
