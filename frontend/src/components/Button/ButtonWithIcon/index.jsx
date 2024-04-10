import { TouchableOpacity, View, Text } from "react-native";
import { styles } from "./styles";

import GoogleLogo from '../../../assets/googleLogo.svg'
import Ionicons from '@expo/vector-icons/Ionicons';

export default function ButtonWithIcon(props) {
    return (
        <View>
            <TouchableOpacity
                    {...props}
                    style={styles.button}
                    activeOpacity={0.9}
                >
                    {props.icon ? <Ionicons name={props.icon} size={28} color={'#59372A'}/> : <GoogleLogo width={28} heigh={28} />}
                    <Text style={styles.buttonText}>{props.title}</Text>
                </TouchableOpacity>
        </View>
    )
};
