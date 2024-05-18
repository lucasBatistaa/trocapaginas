import {View, Image, Text, TouchableOpacity, ScrollView} from 'react-native'
import { useEffect, useState } from 'react'

import {TabPublications, TabInterests} from './components/TabView'
import { useUserStore } from '../../store/badgeStore'
import { THEME } from '../../styles/Theme'
import { styles } from './style'

import MenuICon from '../../assets/menu-icon.svg'
import LateralMenu from '../../components/Menus/LateralMenu'
import BottomMenu from '../../components/Menus/BottomMenu'



export default function Profile () {
    const [selectedOption, setSelectedOption] = useState('showPublications');
    const [menuVisible, setMenuVisible] = useState(false)

    const [ publications, setPublications ] = useState([])
    const [ interests, setInterests ] = useState([])
    
    const user = useUserStore(state => state.data)

    const closeMenu = () => {
        setMenuVisible(false)
    }

    const handleOptionChange = (option) => {
        if (selectedOption !== option) {
            setSelectedOption(option);
        }
    };

    useEffect(() => {
        //Publicações
        setPublications([
            {
                photo: require('../../assets/foto-perfil.png'),
                username: 'Stephanie',
                textPost: 'Excelentissimo livro, se tornou um dos meus favoritos. Com certeza estará entre os meus livros de cabeceira para recordar bons momentos. 5/5.',
                bookImage: require('../../assets/foto-livro.png'),
                isLike: true
            }
        ])

        //interesses
        setInterests([
            {
                id: '34534',
                image: require('../../assets/book.png'),
                titleBook: 'Orgulho e Preconceito',
                authorBook: 'Jane Austen',
            }
            
        ])

    }, [])

    const renderTabView = () => {
        switch (selectedOption) {
            case 'showPublications':
                return <TabPublications publications={publications} />
            case 'showInterests':
                return <TabInterests interests={interests} />
        }
    }
    
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                    style={{width: 96, height: 96}}
                    source={require('../../assets/user-circle.png')}
                />

                <Text style={[THEME.fonts.h1.normal, styles.username]}>
                    { user.name }
                </Text>

                <TouchableOpacity onPress={() => setMenuVisible(true)}>
                    <MenuICon style={{alignSelf: 'flex-start', bottom: 36}}/>
                </TouchableOpacity>
               
                <LateralMenu menuVisible={menuVisible} onPress={closeMenu}/>
            </View>

            
            <View style={styles.tabView}>
                <TouchableOpacity
                    onPress={() => handleOptionChange('showPublications')}
                    style={[
                        styles.tabButton(true), 
                        selectedOption === 'showPublications' && styles.tabButton(false)
                    ]}  
                >
                    <Text style={[THEME.fonts.text, selectedOption === 'showPublications' && styles.tabTitle(true)]}> 
                        PUBLICAÇÕES 
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => handleOptionChange('showInterests')}
                    style={[
                        styles.tabButton(true), 
                        selectedOption === 'showInterests' && styles.tabButton(false)
                    ]}
                    
                >
                    <Text style={[THEME.fonts.text, selectedOption === 'showInterests' && styles.tabTitle(true)]}> 
                        INTERESSES 
                    </Text>

                </TouchableOpacity>

                <TouchableOpacity
                    onPress={() => handleOptionChange('showExchange')}
                    style={[
                        styles.tabButton(true), 
                        selectedOption === 'showExchange' && styles.tabButton(false)
                    ]}
                    
                >
                    <Text style={[THEME.fonts.text, selectedOption === 'showExchange' && styles.tabTitle(true)]}> 
                        TROCAR 
                    </Text>

                </TouchableOpacity>

            </View>
            
            <ScrollView 
                style={styles.contentView}
                showsVerticalScrollIndicator={false}
            >
                {renderTabView ()}
            </ScrollView>

            <BottomMenu/>
        </View>
    )
}