import { useEffect, useState } from "react" 
import { Modal, View, Text, TouchableOpacity, TouchableWithoutFeedback } from "react-native"

import Avaliation from "../../../../components/Avaliation"
import Button from "../../../../components/Button"

import { styles } from "./styles"
import { THEME } from "../../../../styles/Theme"
import Ionicons from '@expo/vector-icons/Ionicons'
import { useNavigation } from "@react-navigation/native"

export default function ModalAvaliation({ modalVisible, onClose }) {
    const [ choicesUser, setChoicesUser ] = useState({
        totalAvaliation: 0,
        hasInterest: false,
        exchange: false
    })

    useEffect(() => {
        // Avaliação do livro feita pelo usuário
        setChoicesUser({
            totalAvaliation: 4,
            hasInterest: true,
            exchange: false
        })
    }, [])

    const handleChoiceAvaliation = () => { 
        if (choicesUser.totalAvaliation >= 1 || choicesUser.hasInterest || choicesUser.exchange) {
            // Update na API
        }
        
        onClose()
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