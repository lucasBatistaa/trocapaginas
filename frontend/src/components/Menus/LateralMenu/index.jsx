import { View, Modal, Text, TouchableOpacity, Image } from "react-native"
import { useNavigation } from "@react-navigation/native"

import { useUserStore } from "../../../store/badgeStore"
import EditIcon from '../../../assets/edit-icon.svg'
import ExitIcon from '../../../assets/exit-icon.svg'
import Logo from '../../../assets/logo.svg'

import { styles } from "./style"
import { THEME } from "../../../styles/Theme"

export default function LateralMenu ({menuVisible, onPress}) {
    const navigation = useNavigation()
    const userLogout = useUserStore(state => state.logout)

    return(
        <Modal
            animationType="fade"
            transparent={true}
            visible={menuVisible}
        > 
        
        <View style={styles.principalView}>   
            <TouchableOpacity
                style={styles.clickClose}
                onPress={onPress}
            >
            </TouchableOpacity>

            <View style={styles.menuContainer}>
                <Logo
                    style={{width: 140, height: 140, alignSelf: 'center'}}
                />

                <TouchableOpacity 
                    style={[styles.viewOption,{marginBottom: 28}]}
                    onPress={() => navigation.navigate('EditProfile')}
                >
                    <EditIcon/>
                    <Text style={[THEME.fonts.h1.normal, {color: THEME.colors.brownDark}]}>Editar Perfil</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                    style={styles.viewOption} 
                    onPress={() => {
                        userLogout()
                        navigation.navigate('Slogan')
                    }}
                >
                    <ExitIcon/>
                    <Text style={[THEME.fonts.h1.normal, {color: THEME.colors.red}]}>Sair</Text>
                </TouchableOpacity>
            </View>
        </View>
        
        </Modal>
    )
}