import {View, Image, Text, ScrollView} from 'react-native'
import { useState } from 'react';
import { useNavigation } from "@react-navigation/native"

import { useUserStore } from "../../store/badgeStore";

import { Input } from '../../components/Input';
import CreatePassword from '../../components/Forms/CreatePassword';

import { THEME } from '../../styles/Theme';
import { styles } from './styles';
import Ionicons from '@expo/vector-icons/Ionicons'

export default function EditProfile () {
    const user = useUserStore(state => state.data) 
    const navigation = useNavigation()

    const [securePassword, setSecurePassword] = useState(true)
    const [newPassword, setNewPassword] = useState('')
    const[oldPassword, setOldPassword] = useState('')
    const [newName, setNewName] = useState(user.name)

    const updateProfileInfo = (password) => {

    }

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Ionicons 
                name="arrow-back"
                size={24}
                color={THEME.colors.brownDark}
                onPress={() => navigation.navigate('Profile', {user: user})}
            />

            <View style={{alignItems: "center"}}>
                <Image
                    style={{width: 141, height:141, borderRadius: 70}}
                    source={{ uri: user.photo }}
                />
            </View>

            <Text style={[styles.label, THEME.fonts.text]}>Nome</Text>
            <Input>
                <Input.Field 
                    placeholder={user.name}
                    onChangeText={(name) => setNewName(name)}                    
                />
            </Input>

            <Text style={[styles.label, THEME.fonts.text]}>Senha (atual)</Text>
            <Input /*error={errorPassword}*/>
                <Input.Field 
                    placeholder={"Insira sua senha atual"}
                    secureTextEntry={securePassword}
                    onChangeText={(password) => setOldPassword(password)}
                />

                { 
                    securePassword ? 
                        <Ionicons 
                            name='eye-off' 
                            size={20} 
                            color={THEME.colors.brownDark}
                            onPress={() => setSecurePassword(false)}
                        /> 
                    :
                        <Ionicons 
                            name='eye' 
                            size={20} 
                            color={THEME.colors.brownDark}
                            onPress={() => setSecurePassword(true)}
                        />
                }
            </Input>
            
            <CreatePassword
                titleButton="ATUALIZAR"
                onSubmit={updateProfileInfo}
            />
        </ScrollView>
    )
}