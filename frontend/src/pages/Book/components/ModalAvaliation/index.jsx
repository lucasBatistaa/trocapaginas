import { useEffect, useState } from "react" 
import { Modal, View, Text, TouchableOpacity, TouchableWithoutFeedback } from "react-native"

import Avaliation from "../../../../components/Avaliation"
import Button from "../../../../components/Button"

import { styles } from "./styles"
import { THEME } from "../../../../styles/Theme"
import Ionicons from '@expo/vector-icons/Ionicons'
import { useNavigation } from "@react-navigation/native"
import axios from "axios"
import { useUserStore } from "../../../../store/badgeStore"

export default function ModalAvaliation({ modalVisible, onClose, book }) {
    const user = useUserStore(state => state.data)
    const [ messageError, setMessageError ] = useState('')
    const [ choicesUser, setChoicesUser ] = useState({
        totalAvaliation: 0,
        hasInterest: false,
        exchange: false
    })

    /*useEffect(() => {
        // Avaliação do livro feita pelo usuário
        setChoicesUser({
            totalAvaliation: book[3],
            hasInterest: true,
            exchange: false
        })
    }, [])*/

    const handleChoiceAvaliation = async() => { 
        /*if (choicesUser.totalAvaliation >= 1 || choicesUser.hasInterest || choicesUser.exchange) {
            // Update na API
        }*/

        let choiceUser;

            if(choicesUser.hasInterest) {
                choiceUser = 'hasInterest'
            
            }else if(choicesUser.exchange) {
                choiceUser = 'exchange'
            }

            try {
                const response = await axios.post('http://192.168.1.64:6005/save-book', {
                    userEmail: user.email,
                    imageBook: book[0],
                    titleBook: book[1],
                    writerBook: book[2],
                    ratingBook: choicesUser.totalAvaliation,
                    bookReview: book[4],
                    choiceUser: choiceUser
                })

                onClose()
                
            } catch (error) {
                setMessageError(error)
            }
        
    }

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            onRequestClose={onClose}
        >
            <TouchableWithoutFeedback onPress={onClose}>
                <View style={styles.container}>
                    <TouchableWithoutFeedback>
                        <View style={styles.content}>
                            <View style={styles.header}>
                                <Text style={[ THEME.fonts.h1.bold, styles.brownDarkColor ]}>
                                    Avaliar livro
                                </Text>

                                <Ionicons
                                    name="close"
                                    size={24}
                                    color={THEME.colors.brownDark}
                                    onPress={onClose}
                                />
                            </View>

                            <Avaliation 
                                size={32} 
                                valueOfAvaliation={choicesUser.totalAvaliation} 
                                totalAvaliation={(avaliation) => setChoicesUser({...choicesUser, totalAvaliation: avaliation})}
                            />
                            
                            <Text style={[ THEME.fonts.h1.bold, styles.brownDarkColor ]}>
                                Adicionar ao perfil
                            </Text>

                            <View style={styles.viewButtonsActions}>
                                <TouchableOpacity
                                    activeOpacity={0.7}
                                    style={[ styles.buttonsActions, styles.isActive(choicesUser.hasInterest) ]}
                                    onPress={() => {
                                        setChoicesUser({
                                            ...choicesUser,
                                            hasInterest: !choicesUser.hasInterest,
                                            exchange: (choicesUser.hasInterest && false)
                                        })
                                    }}
                                >
                                    <Text style={styles.isActiveText(choicesUser.hasInterest)}>INTERESSES</Text>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    activeOpacity={0.7}
                                    style={[ styles.buttonsActions, styles.isActive(choicesUser.exchange) ]}
                                    onPress={() => {
                                        setChoicesUser({
                                            ...choicesUser,
                                            hasInterest: (choicesUser.exchange && false),
                                            exchange: !choicesUser.exchange
                                        })
                                    }}
                                >
                                    <Text style={styles.isActiveText(choicesUser.exchange)}>QUERO TROCAR</Text>
                                </TouchableOpacity>
                            </View>

                            <Button
                                title={'FINALIZAR'}
                                isLoading={false}
                                onPress={handleChoiceAvaliation}
                            />
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    )
}