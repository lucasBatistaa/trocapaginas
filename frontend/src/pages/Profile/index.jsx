import {View, Image, Text, TouchableOpacity, ScrollView} from 'react-native'
import { useEffect, useState } from 'react'

import axios from 'axios'
import { useUserStore } from '../../store/badgeStore'

import {TabPublications, TabInterests} from './components/TabView'
import MenuIcon from '../../assets/menu-icon.svg'
import LateralMenu from '../../components/Menus/LateralMenu'
import BottomMenu from '../../components/Menus/BottomMenu'

import { styles } from './style'
import { THEME } from '../../styles/Theme'


export default function Profile (props) {
    const [selectedOption, setSelectedOption] = useState('showPublications');
    const [menuVisible, setMenuVisible] = useState(false)

    const [ publications, setPublications ] = useState([])
    const [ interests, setInterests ] = useState([])
    const [ tabContent, setTabContent ] = useState(null)
    
    //const user = useUserStore(state => state.data)
    const user = props.route.params.user;

    useEffect(() => {
        renderTabView()
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

    const handleOptionChange = (option) => {
        if (selectedOption !== option) {
            setSelectedOption(option);
        }
    }

    const getPublications = async() => {
        const response = await axios.post('http://192.168.1.65:6005/my-publications', {
            email: user.email
        })
        
        const posts = response.data
        setPublications(posts)
    }

    const renderTabView = async () => {
        switch (selectedOption) {
            case 'showPublications':
                await getPublications();

                if(publications.length === 0) {
                    setTabContent(
                        <Text style={THEME.fonts.h2.bold}> Nenhuma publicação encontrada </Text>
                    )

                } else {
                    setTabContent(<TabPublications publications={publications} />)
                }

            case 'showInterests':
                return <TabInterests interests={interests} />
        }
    }
    
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                    style={{width: 96, height: 96, borderRadius: 48}}
                    source={{ uri: user.photo }}
                />

                <Text style={[THEME.fonts.h1.normal, styles.username]}>
                    { user.name }
                </Text>

                <TouchableOpacity onPress={() => setMenuVisible(true)}>
                    <MenuIcon style={{alignSelf: 'flex-start', bottom: 36}}/>
                </TouchableOpacity>
               
                <LateralMenu menuVisible={menuVisible} onPress={() => setMenuVisible(false)}/>
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
                { tabContent }
            </ScrollView>

            <BottomMenu/>
        </View>
    )
}