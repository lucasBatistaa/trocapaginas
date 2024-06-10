import { useEffect, useRef, useState } from "react"
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
} from "react-native"

import axios from 'axios'

import { FormatDate } from "../../utils/formatDate"
import { styles } from "./style";
import { THEME } from "../../styles/Theme";
import Ionicons from '@expo/vector-icons/Ionicons';
import { useUserStore } from "../../store/badgeStore";

export default function Comment({ id, modalVisible, onClose }) {
    const [ textComment, setTextComment ] = useState('')
    const [ allComments, setAllComments] = useState([])

    const user = useUserStore(state => state.data);
    

    useEffect(() => {

        // exemplo de comentário
        setAllComments([
            {
                idUser: '1',
                image: require('../../assets/foto-perfil.png'),
                username: 'Nome da usuária',
                time: `${FormatDate()}`,
                comment: 'sim amigaa, esse livro é maravilhoso'
            },
        ]);
        // loadComments();
    }, [])

    const loadComments = async () => {
        try {
            const response = await axios.get('http://localhost:6005/loadComments/' + id); //ainda falta terminar verificar tudo antes
            setAllComments(response.data);
        } catch (error) {
            console.error('Erro ao carregar comentários:', error);
        }
    };

    const handleSendComment = async () => {

        if (textComment.trim()) {
            //id do usuario e comentário

            //rota pra puxar dados do usuário
                        
            const newComment = {
                idUser: user.id_user,
                image: user.photo,
                username: user.name,
                comment:`${textComment.trim()}`
            }

            console.log(newComment);

            setAllComments([ ...allComments, newComment ])

                //envia os dados para o servidor
            try{ 
              await  axios.post('http://localhost:6005/comment', newComment)
            } catch(error) {
                console.log(error)
                console.error('Erro inesperado', error)
            }
            
            inputRef.current.blur() 
            Keyboard.dismiss()
            setTextComment('')
            console.log('Enviado!')
        }
        
           
    }
       
    // Fechar comentário com deslize para baixo
    const panResponder = PanResponder.create({
        onStartShouldSetPanResponderCapture: () => true,
        onPanResponderMove: (event, gestureState) => {
            // Detecta movimento para baixo (dy > 0)
            if (gestureState.dy > 2) {
                // Fecha o modal
                onClose()
            }
        },
    })

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={onClose}
        >
            <View 
                style={styles.principalView}
            >   
                <TouchableOpacity
                    style={styles.clickClose}
                    onPress={onClose}
                />

                <View style={styles.commentView}>
                    <View {...panResponder.panHandlers}>
                        <View style={styles.gestureDropDown}/>

                        <Text 
                            style={[
                                THEME.fonts.h1.normal, 
                                styles.titleModal
                            ]}
                        >
                            Comentários
                        </Text>
                    </View>

                    <ScrollView 
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={styles.commentsList}
                    >
                        { 
                            allComments?.map((comment, index) => (
                                <View 
                                    key={index}
                                    style={styles.comment}
                                >
                                    <Image 
                                        source={comment.image}
                                        style={styles.userPhotoOfComment}
                                    />

                                    <View>
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