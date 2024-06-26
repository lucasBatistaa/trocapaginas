import { useState } from "react"
import { View, TouchableOpacity, Text } from "react-native"

import Button from '../../../components/Button'
import TextArea from "../../../components/Forms/TextArea"
import { Input } from '../../../components/Input'

import { styles } from "./style"
import { THEME } from "../../../styles/Theme"
import Ionicons from '@expo/vector-icons/Ionicons'
import ListOfBooks from "../../../components/ListOfBooks"

export default function Review({ onSubmit, isLoading=false}) {
    const [ title, setTitle ] = useState('')
    const [ text, setText ] = useState('')
    const [ nameBook, setNameBook ] = useState('')

    const [ errorTitle, setErrorTitle ] = useState('')
    const [ errorText, setErrorText ] = useState('')
    const [ errorNameBook, setErrorNameBook ] = useState('')
    const [ messageError, setMessageError ] = useState('')

    const [ visibleModal, setVisibleModal] = useState(false)

    const [ starsAvaliation, setStarsAvaliation ] = useState({
        0: false,
        1: false,
        2: false,
        3: false,
        4: false
    })  

    const [totalStarsAvaliation, setTotalStarsAvaliation ] = useState(0)
    
    let avaliation = Object.values(starsAvaliation)

    const handleClickOnStarIcon = (index) => {
        const newData = {...starsAvaliation}
        
        Object.keys(newData).forEach(key => {
            newData[key] = key <= index ? true : false
        })

        setTotalStarsAvaliation(index+1)
        setStarsAvaliation(newData)

        avaliation = Object.values(starsAvaliation)
    }

    const validateForm = () => {
        if (title.trim() && text.trim() && nameBook.trim()) return true
       
        title.trim() ? setErrorTitle(false) : setErrorTitle(true)
        text.trim() ? setErrorText(false) : setErrorText(true)
        nameBook.trim() ? setErrorNameBook(false) : setErrorNameBook(true)
        
        setMessageError('Informe todos os campos!')
    }

    const handleValidatePost = () => {
        if (validateForm()) {
            onSubmit(text, nameBook, title, totalStarsAvaliation)
        }  
    }

    return (
        <View style={styles.container}>
            <TextArea   
                error={errorTitle}
                numberOfLines={1} 
                placeholder={'Informe o título da resenha'}
                maxLength={80}
                onChangeText={setTitle}
            />

            <TextArea   
                error={errorText}
                numberOfLines={6} 
                placeholder={'Digite aqui...'}
                maxLength={500}
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

            <View style={styles.avaliation}>
                {
                    avaliation.map((value, index) => (
                        <TouchableOpacity
                            key={index}
                            onPress={() => handleClickOnStarIcon(index)}
                        >
                            {
                                value ? 
                                    <Ionicons 
                                        name='star' 
                                        size={28} 
                                        color={THEME.colors.brownLight} 
                                    />
                                :
                                    <Ionicons 
                                        name='star-outline' 
                                        size={28} 
                                        color={THEME.colors.brownLight} 
                                    />
                            }
                        </TouchableOpacity>
                    ))
                }
            </View>

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