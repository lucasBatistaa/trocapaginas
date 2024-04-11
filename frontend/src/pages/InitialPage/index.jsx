import { Image, Text, TouchableOpacity, View } from 'react-native'
import { THEME } from '../../styles/Theme'

import Publication from '../../components/Publication';

export default function InitialPage() {
    return (
        <View style={THEME.structure.container}>
            <Publication 
                photo={'../../assets/foto-perfil.png'}
                username={'Stephanie'}
                textPost={'Excelentissimo livro, se tornou um dos meus favoritos. Com certeza estará entre os meus livros de cabeceira para recordar bons momentos. 5/5.'}
                bookImage={'../../assets/foto-livro.png'}
                isLike={true}
            />
        </View>
    )
}
