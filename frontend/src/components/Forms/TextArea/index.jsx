import { TextInput } from "react-native"

import { THEME } from "../../../styles/Theme";
import { styles } from "./styles"

export default function TextArea({ error, ...rest }) {
    return (
        <TextInput
                style={styles.textArea(error)}
                multiline={true}
                placeholderTextColor={'#8B8B8B'} 
                {...rest}
        />
    )
}
