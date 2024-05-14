import { View, Modal, Text, TouchableOpacity, Image } from "react-native"

import EditIcon from '../../../assets/edit-icon.svg'
import ExitIcon from '../../../assets/exit-icon.svg'
import { styles } from "./style"

export default function LateralMenu ({menuVisible, onPress}) {
    return(
        <Modal
            animationType="fade"
            transparent={true}
            visible={menuVisible}
        > 
        
        <View style={styles.principalView}>   
            <TouchableOpacity
                //style={styles.clickClose}
                onPress={onPress}
            >
            </TouchableOpacity>

            <View>
                <Image
                    style={{width: 124, height: 110}}
                    source={require('../../../assets/logo.png')}
                />

                <View>
                    <EditIcon/>
                    <Text>Editar Perfil</Text>
                </View>

                <View>
                    <ExitIcon/>
                    <Text>Sair</Text>
                </View>
            </View>
        </View>
        
        </Modal>
    )
}