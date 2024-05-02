import { useState } from "react"
import { View, TextInput, TouchableOpacity, Text } from "react-native"
import Ionicons from '@expo/vector-icons/Ionicons';

import SimpleButton from '../../../components/Button/SimpleButton'
import Input from '../../../components/Forms/Input'

import { styles } from "./style";
import { THEME } from "../../../styles/Theme";
import IsFormEmpty from "../../../utils/isFormEmpty";

export default function Review({onSubmit}) {
    const [ title, setTitle ] = useState('')
    const [ errorTitle, setErrorTitle ] = useState('')
    const [ text, setText ] = useState('')
    const [ errorText, setErrorText ] = useState('')
    const [ nameBook, setNameBook ] = useState('')
    const [ errorNameBook, setErrorNameBook ] = useState('')
    const [ messageError, setMessageError ] = useState('')
    const [ starsAvaliation, setStarsAvaliation ] = useState({
        0: false,
        1: false,
        2: false,
        3: false,
        4: false
    })  

    const [totalStarsAvaliation, setTotalStarsAvaliation ] = useState(0)
    let avaliation = Object.values(starsAvaliation)

    const clickOnStarIcon = (index) => {
        const newData = {...starsAvaliation}
        
        Object.keys(newData).forEach(key => {
            newData[key] = key <= index ? true : false
        })

        setTotalStarsAvaliation(index+1)
        setStarsAvaliation(newData)

        avaliation = Object.values(starsAvaliation)
    }

    const validateForm = () => {
        const isEmptyTitle = IsFormEmpty(title)
        setErrorTitle(isEmptyTitle)

        const isEmptyText = IsFormEmpty(text)
        setErrorText(isEmptyText)

        const isEmptyNameBook = IsFormEmpty(nameBook)
        setErrorNameBook(isEmptyNameBook)

        if (!isEmptyTitle && !isEmptyText && !isEmptyNameBook) {
            setMessageError('')
            return true
        } else {
            console.log(isEmptyTitle, isEmptyText, isEmptyNameBook)
            setMessageError('Informe todos os campos!')
        }
    }

    const handleValidatePost = () => {
        if (validateForm()) {
            onSubmit(title, text, nameBook, totalStarsAvaliation)
        }  
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.textInput}
                multiline={true}
                numberOfLines={1}
                onChangeText={setTitle}
                value={title}
                placeholder="Informe o título"
                placeholderTextColor={'#8B8B8B'} 
            />

            <TextInput
                style={[styles.textInput, { textAlignVertical: 'top' }]}
                multiline={true}
                numberOfLines={6} // Adjust as needed
                onChangeText={setText}
                value={text}
                placeholder="Digite aqui..."
                placeholderTextColor={'#8B8B8B'} 
                maxLength={500}
            />

            <Input 
                onChangeText={setNameBook}
                value={nameBook}
                placeholder={'Escolher livro'}
                style={errorNameBook && THEME.errors.input}
            />

            <View style={styles.avaliation}>
                {
                    avaliation.map((value, index) => (
                        <TouchableOpacity
                            key={index}
                            onPress={() => clickOnStarIcon(index)}
                        >
                            {value ? 
                                <Ionicons name='star' size={28} color={THEME.colors.brownLight} />
                            :
                                <Ionicons name='star-outline' size={28} color={THEME.colors.brownLight} />
                            }
                        </TouchableOpacity>
                    ))
                }
            </View>

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