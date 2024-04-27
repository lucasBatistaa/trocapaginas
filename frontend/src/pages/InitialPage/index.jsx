import { Image, Text, TouchableOpacity, View } from 'react-native'
import { THEME } from '../../styles/Theme'

import Publication from '../../components/Publication';
import Comment from '../../components/Comment';

export default function InitialPage() {
    return (
        <View style={THEME.structure.container}>
            <Publication 
                photo={require('../../assets/foto-perfil.png')}
                username={'Stephanie'}
                textPost={'Excelentissimo livro, se tornou um dos meus favoritos. Com certeza estará entre os meus livros de cabeceira para recordar bons momentos. 5/5.'}
                bookImage={require('../../assets/foto-livro.png')}
                isLike={true}
            />
        </View>
    )
}
