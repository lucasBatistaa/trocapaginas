import { useState } from "react"
import { View, Text } from "react-native"

import { Input } from "../../../components/Input"
import Button from "../../../components/Button"
import TextArea from "../../../components/Forms/TextArea"

import { styles } from "./style"
import { THEME } from "../../../styles/Theme"

export default function Post({ onSubmit, isLoading=false }) {
    const [ text, setText ] = useState('')
    const [ nameBook, setNameBook ] = useState('')

    const [ errorText, setErrorText ] = useState(false)
    const [ errorNameBook, setErrorNameBook ] = useState(false)
    const [ messageError, setMessageError ] = useState('')

    const validateForm = () => {
        if (text.trim() && nameBook.trim()) return true

        text.trim() ? setErrorText(false) : setErrorText(true)
        nameBook.trim() ? setErrorNameBook(false) : setErrorNameBook(true)
        setMessageError('Informe todos os campos!')
    }

    const handleValidatePost = () => {
        if (validateForm()) {
            onSubmit(text, nameBook)
        }  
    }

    return (
        <View style={styles.container}>
            <TextArea 
                error={errorText}
                numberOfLines={6} 
                placeholder={'Digite aqui'}
                maxLength={200}
                onChangeText={setText}
            />

            <Input error={errorNameBook}>
                <Input.Field 
                    placeholder={'Escolher livro'}
                    onChangeText={setNameBook}
                />
            </Input>

            {
                messageError && 
                <Text 
                    style={[
                        THEME.fonts.text, 
                        THEME.errors.message
                    ]}
                >
                    {messageError}
                </Text>
            }

            <Button 
                title={'PUBLICAR'}
                color={'brownDark'}
                isLoading={isLoading}
                onPress={handleValidatePost}
            />
        </View>
    )
}