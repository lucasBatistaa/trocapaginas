import { TextInput, View } from 'react-native'

import { styles } from './style'
import { THEME } from '../../styles/Theme'

function Input({ children, error=false }) {
    return (
        <View style={styles.input(error)}>
            {children}
        </View>
    )
}

function Field({...rest}) {
    return (
        <TextInput
            style={styles.field}
            placeholderTextColor={THEME.colors.grayDark}
            {...rest}
        />
    )
}

Input.Field = Field

export { Input }