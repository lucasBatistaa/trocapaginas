import { Modal, View, Text, TouchableOpacity, TouchableWithoutFeedback } from "react-native"

import Avaliation from "../../../../components/Avaliation"
import Button from "../../../../components/Button"

import { styles } from "./styles"
import { THEME } from "../../../../styles/Theme"
import { useState } from "react"

export default function ModalAvaliation({ modalVisible, onClose }) {
    const [ hasInterest, setHasInterest ] = useState(false) 
    const [ exchange, setExchange ] = useState(false)
    const [ totalAvaliation, setTotalAvaliation ] = useState(0) 

    const handleChoiceAvaliation = () => { 
        if (totalAvaliation >= 1 || hasInterest || exchange) {
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
                            <Text
                                style={[
                                    THEME.fonts.h1.bold,
                                    styles.brownDarkColor
                                ]}
                            >
                                Avaliar livro
                            </Text>

                            <Avaliation size={32} totalAvaliation={(avaliation) => setTotalAvaliation(avaliation)}/>
                            
                            <Text
                                style={[
                                    THEME.fonts.h1.bold,
                                    styles.brownDarkColor
                                ]}
                            >
                                Adicionar ao perfil
                            </Text>
                            <View style={styles.viewButtonsActions}>
                                <TouchableOpacity
                                    activeOpacity={0.7}
                                    style={[
                                        styles.buttonsActions,
                                        styles.isActive(hasInterest)
                                    ]}
                                    onPress={() => {
                                        setHasInterest(!hasInterest)
                                        setExchange(false)
                                    }}
                                >
                                    <Text style={styles.isActiveText(hasInterest)}>INTERESSES</Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    activeOpacity={0.7}
                                    style={[
                                        styles.buttonsActions,
                                        styles.isActive(exchange)
                                    ]}
                                    onPress={() => {
                                        setExchange(!exchange)
                                        setHasInterest(false)
                                    }}
                                >
                                    <Text style={styles.isActiveText(exchange)}>QUERO TROCAR</Text>
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