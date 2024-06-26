import { useState } from "react"
import { View, Text, TouchableOpacity } from "react-native"

import { Input } from "../../../components/Input"
import ListOfBooks from "../../../components/ListOfBooks"
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

    const [ visibleModal, setVisibleModal] = useState(false)

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

            <TouchableOpacity
                style={styles.input(errorNameBook)}
                onPress={() => setVisibleModal(true)}
            >
                <Text style={styles.textInput}>
                    { nameBook ? nameBook : 'Escolher livro'}
                </Text> 
            </TouchableOpacity>
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

            <ListOfBooks visibleModal={visibleModal} title='Escolher' onClose={() => setVisibleModal(false)} setNameBook={setNameBook}/>
        </View> 
    )
}