import { View, TextInput, Text } from "react-native"
import { useState } from "react"

import Input from "../../../components/Forms/Input"
import SimpleButton from "../../../components/Button/SimpleButton"

import { styles } from "./style"
import { THEME } from "../../../styles/Theme"
import IsFormEmpty from "../../../utils/isFormEmpty"

export default function Post({onSubmit}) {
    const [ text, setText ] = useState('')
    const [ errorText, setErrorText ] = useState('')
    const [ messageError, setMessageError ] = useState('')
    const [ nameBook, setNameBook ] = useState('')
    const [ errorNameBook, setErrorNameBook ] = useState('')

    const validateForm = () => {
        const isEmptyText = IsFormEmpty(text)
        setErrorText(isEmptyText)

        const isEmptyNameBook = IsFormEmpty(nameBook)
        setErrorNameBook(isEmptyNameBook)

        if (!isEmptyText && !isEmptyNameBook) {
            setMessageError('')
            return true
        } else {
            setMessageError('Informe todos os campos!')
        }
    }


    const handleValidatePost = () => {
        if (validateForm()) {
            onSubmit(text, nameBook)
        }  
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={[styles.textInput, { textAlignVertical: 'top'}, errorText && THEME.errors.input]}
                multiline={true}
                numberOfLines={6} // Adjust as needed
                onChangeText={setText}
                value={text}
                placeholder="Digite aqui..."
                placeholderTextColor={'#8B8B8B'} 
                maxLength={200}
            />

            <Input
                onChangeText={setNameBook}
                value={nameBook}
                placeholder={'Escolher livro'}
                style={errorNameBook && THEME.errors.input}
            />

            {
                messageError && 
                <Text 
                    style={[THEME.fonts.text, THEME.errors.message]}
                >
                    {messageError}
                </Text>
            }

            <SimpleButton 
                onPress={handleValidatePost}
                title={'PUBLICAR'}
                color={'brownDark'}
            />
        </View>
    )
}