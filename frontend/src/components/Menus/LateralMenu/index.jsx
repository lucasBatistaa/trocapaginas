import { View, Modal, Text, TouchableOpacity, Image } from "react-native"

import EditIcon from '../../../assets/edit-icon.svg'
import ExitIcon from '../../../assets/exit-icon.svg'
import Logo from '../../../assets/logo.svg'

import { styles } from "./style"
import { THEME } from "../../../styles/Theme"

export default function LateralMenu ({menuVisible, onPress}) {
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

                <View style={[styles.viewOption,{marginBottom: 28}]}>
                    <EditIcon/>
                    <Text style={[THEME.fonts.h1.normal, {color: THEME.colors.brownDark}]}>Editar Perfil</Text>
                </View>

                <View style={styles.viewOption}>
                    <ExitIcon/>
                    <Text style={[THEME.fonts.h1.normal, {color: THEME.colors.red}]}>Sair</Text>
                </View>
            </View>
        </View>
        
        </Modal>
    )
}