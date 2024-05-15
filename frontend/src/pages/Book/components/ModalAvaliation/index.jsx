import { Modal, View, Text, TouchableOpacity, TouchableWithoutFeedback } from "react-native"

import Avaliation from "../../../../components/Avaliation"
import Button from "../../../../components/Button"

import { styles } from "./styles"
import { THEME } from "../../../../styles/Theme"
import { useState } from "react"

export default function ModalAvaliation({ modalVisible }) {
    const [ hasInterest, setHasInterest ] = useState(false) 
    const [ swap, setSwap ] = useState(false)
    // const [ modalVisible, setModalVisible ] = useState(true)

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={modalVisible}
            // onRequestClose={() => setModalVisible(false)}
        >
            <View style={styles.container}>
                <View style={styles.content}>
                    <Text 
                        style={[
                            THEME.fonts.h1.bold,
                            styles.brownDarkColor
                        ]}
                    >
                        Avaliar livro
                    </Text>

                    <Avaliation size={32}/>

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
                                setSwap(false)
                            }}
                        >
                            <Text style={styles.isActiveText(hasInterest)}>INTERESSES</Text>
                        </TouchableOpacity>

                        <TouchableOpacity 
                            activeOpacity={0.7}
                            style={[
                                styles.buttonsActions,
                                styles.isActive(swap)
                            ]}
                            onPress={() => {
                                setSwap(!swap)
                                setHasInterest(false)
                            }}
                        >
                            <Text style={styles.isActiveText(swap)}>QUERO TROCAR</Text>
                        </TouchableOpacity>
                    </View>

                    <Button 
                        title={'FINALIZAR'}
                        isLoading={false}
                        onPress={() => {}}
                    />
                </View>
            </View>
        </Modal>
    )
}