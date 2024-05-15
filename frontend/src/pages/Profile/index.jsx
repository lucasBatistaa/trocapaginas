import {View, Image, Text, TouchableOpacity} from 'react-native'
import { useState } from 'react'

import { THEME } from '../../styles/Theme'
import { styles } from './style'
import LateralMenu from '../../components/Menus/LateralMenu'

import MenuICon from '../../assets/menu-icon.svg'

export default function Profile () {
    const [selectedOption, setSelectedOption] = useState('showPublications');
    const [menuVisible, setMenuVisible] = useState(false)

    const closeMenu = () => {
        setMenuVisible(false)
    }

    const handleOptionChange = (option) => {
        if (selectedOption !== option) {
            setSelectedOption(option);
        }
    };
    
    return (
        <View>
            <View style={styles.header}>
                <Image
                    style={{width: 90, height: 90}}
                    source={require('../../assets/user-circle.png')}
                />

                <Text style={[THEME.fonts.h1.normal, {color: THEME.colors.brownDark}]}>
                    Nome da usuária
                </Text>

                <TouchableOpacity
                    onPress={() => setMenuVisible(true)}
                >
                    <MenuICon style={{alignSelf: 'flex-start', bottom: 20}}/>

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
        </View>
    )
}