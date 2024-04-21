import { useState } from "react"
import { View, TextInput, TouchableOpacity } from "react-native"
import Ionicons from '@expo/vector-icons/Ionicons';

import SimpleButton from '../../../components/Button/SimpleButton'
import Input from '../../../components/Forms/Input'

import { styles } from "./style";
import { THEME } from "../../../styles/Theme";

export default function Review() {
    const [ title, setTitle ] = useState('')
    const [ text, setText ] = useState('')
    const [ nameBook, setNameBook ] = useState('') 
    const [ starsAvaliation, setStarsAvaliation ] = useState({
        0: false,
        1: false,
        2: false,
        3: false,
        4: false
    })  

    let avaliation = Object.values(starsAvaliation)

    const clickOnStar = (index) => {
        const newData = {...starsAvaliation}
        
        Object.keys(newData).forEach(key => {
            newData[key] = key <= index ? true : false
        })

        setStarsAvaliation(newData)

        avaliation = Object.values(starsAvaliation)
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
                // onChangeText={}
                // value={}
                placeholder="Digite aqui..."
                placeholderTextColor={'#8B8B8B'} 
                maxLength={200}
            />

            <Input 
                placeholder={'Escolher livro'}
            />

            <View style={styles.avaliation}>
                {
                    avaliation.map((value, index) => (
                        <TouchableOpacity
                            key={index}
                            onPress={() => clickOnStar(index)}
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
                
            <SimpleButton 
                title={'PUBLICAR'}
                color={'brownDark'}
            />
        </View>
    )
}