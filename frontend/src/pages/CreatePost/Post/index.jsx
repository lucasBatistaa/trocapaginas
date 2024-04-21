import { View, TextInput } from "react-native"
import { useState } from "react"

import Input from "../../../components/Forms/Input"
import SimpleButton from "../../../components/Button/SimpleButton"

import { styles } from "./style"

export default function Post() {
    const [ text, setText ] = useState('')
    const [ nameBook, setNameBook ] = useState('')

    const handleCreatePost = () => {
        if (text && nameBook) {
            console.log('POST CRIADO')
        } 
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={[styles.textInput, { textAlignVertical: 'top' }]}
                multiline={true}
                numberOfLines={6} // Adjust as needed
                onChangeText={setText}
                value={text}
                placeholder="Digite aqui..."
                placeholderTextColor={'#8B8B8B'} 
                maxLength={200}
            />

            <Input
                placeholder={'Escolher livro'}
            />

            <SimpleButton 
                onPress={handleCreatePost}
                title={'PUBLICAR'}
                color={'brownDark'}
            />
        </View>
    )
}