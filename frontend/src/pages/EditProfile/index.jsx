import {View, Image, Text} from 'react-native'
import { useState } from 'react';

import { useUserStore } from "../../store/badgeStore";

import { Input } from '../../components/Input';
import { THEME } from '../../styles/Theme';
import Ionicons from '@expo/vector-icons/Ionicons'

export default function EditProfile () {
    const user = useUserStore(state => state.data) 
    const [securePassword, setSecurePassword] = useState(true)

    return (
        <View>
            <Image
                style={{width: 141, height:141}}
                source={{ uri: user.photo }}
            />

            <Text>Nome</Text>
            <Input>
                <Input.Field 
                    placeholder={user.name}
                    //onChangeText={setEmail}
                    
                />
            </Input>

            <Input /*error={errorPassword}*/>
                <Input.Field 
                    placeholder={"Insira sua senha"}
                    //onChangeText={setPassword}
                    secureTextEntry={securePassword}
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
        </View>
    )
}