import { useCallback, useEffect, useRef, useState } from "react"
import { 
    Modal, 
    View, 
    Text, 
    Image, 
    TextInput, 
    ScrollView, 
    TouchableOpacity, 
    Keyboard, 
    PanResponder, 
    Alert
} from "react-native"

import axios from 'axios'

import { FormatDate } from "../../utils/formatDate"
import { styles } from "./style";
import { THEME } from "../../styles/Theme";
import Ionicons from '@expo/vector-icons/Ionicons';
import { useUserStore } from "../../store/badgeStore";
import { useFocusEffect } from '@react-navigation/native';

export default function Comment({ idPublication, modalVisible, onClose }) {
    const [ textComment, setTextComment ] = useState('')
    const [ allComments, setAllComments] = useState([])

    const user = useUserStore(state => state.data);
  
    useFocusEffect(
        useCallback(()=> {
            loadComments()

        },[idPublication]
        ))

    const loadComments = async () => {

        try {

            const response = await axios.get('https://trocapaginas-server.onrender.com/loadComments',{
                params:{
                    idPublication:idPublication
                }
            }); 
            
            const fetchedComments = response.data.map(comment => ({
                idUser: comment.idUser,
                image: comment.photo,
                username: comment.name, 
                comment: comment.content_comment
            }));
        
            setAllComments(fetchedComments);  

        } catch (error) {
            console.error('Erro ao carregar comentários:', error);
        }
    };

    const handleSendComment = async () => {

        if (textComment.trim()) {
            //id do usuario e comentário

            //rota pra puxar dados do usuário
                        
             const newComment = {
                email: user.email,
                image: user.photo,
                username: user.name,
                comment:`${textComment.trim()}`,
                id: idPublication
            }

            const  {email, id, comment} = newComment;
            const sendCommentDatabase = {email, id, comment};

            try{ 
              await axios.post('http://192.168.0.42:6005/comment', sendCommentDatabase).then(response => {

                setAllComments(prevComments => [...prevComments, newComment]);
                setTextComment('');
                //inputRef.current.blur();
                Keyboard.dismiss(); 

              });

            } catch (error) {
                console.error('Erro ao enviar comentário:', error);
            }
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
                                        source={{ uri: comment.image }}
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