import { View, Modal, Text, TouchableWithoutFeedback } from "react-native"

import { Input } from '../Input'
import Button from "../Button"

import { styles } from "./styles"
import { THEME } from "../../styles/Theme"
import Ionicons from '@expo/vector-icons/Ionicons'
import { useState } from "react"

export default function ExchangeForm({ visibleExchangeForm, onClose }) {
    const [ date, setDate ] = useState()
    const [ point, setPoint ] = useState()
    const [ book, setBook ] = useState()

    const [ error, setError ] = useState({
        date: false,
        point: false,
        book: false
    }) 

    const handleSendExchangeConfirmation = () => {
        if (date && point && book) {
            console.log('TODOS OS DADOS')
        }

        setError({ ...error, date: date ? false : true })
        setError({ ...error, point: point ? false : true })
        setError({ ...error, book: book ? false : true })
    }

    return (
        <Modal
            animationType="fade"
            transparent={true}
            visible={visibleExchangeForm}
            onRequestClose={onClose}
        >
            <TouchableWithoutFeedback onPress={onClose}>
                <View style={styles.container}>
                    <TouchableWithoutFeedback>
                        <View style={styles.content}>
                            <View style={styles.header}>
                                <Text style={[THEME.fonts.h1.bold, styles.title]}>
                                    QUERO TROCAR
                                </Text>
                                <Ionicons 
                                    name="close"
                                    size={24}
                                    style={styles.iconClose}
                                    color={THEME.colors.brownDark}
                                    onPress={onClose}
                                />
                            </View>

                            <View style={styles.labelAndinput}>
                                <Text style={THEME.fonts.text}>Data da troca</Text>
                                
                                <Input error={error.date}>
                                    <Input.Field
                                        onChangeText={setDate}
                                    />
                                </Input>
                            </View>

                            <View style={styles.labelAndinput}>
                                <Text style={THEME.fonts.text}>Local</Text>
                                
                                <Input error={error.point}>
                                    <Input.Field
                                        placeholder={'Escolha o ponto de coleta'}
                                        onChangeText={setPoint}
                                    />
                                </Input>
                            </View>

                            <View style={styles.labelAndinput}>
                                <Text style={THEME.fonts.text}>Trocar por</Text>
                                
                                <Input error={error.book}>
                                    <Input.Field
                                        placeholder={'Informe o livro'}
                                        onChangeText={setBook}
                                    />
                                </Input>
                            </View>

                            <Button 
                                title='ENVIAR' 
                                isLoading={false}
                                onPress={handleSendExchangeConfirmation}
                            />
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </TouchableWithoutFeedback>
        </Modal>
    )
}