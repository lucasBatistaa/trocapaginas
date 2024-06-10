import React from 'react'
import { View, StyleSheet } from 'react-native'
import { styles } from './styles'

import LottieView from 'lottie-react-native'

export default function AppLoader(){
    return (
        <View style={[StyleSheet.absoluteFillObject, styles.container]}>
            <LottieView 
                source={require('../../assets/bookLoader.json')} 
                autoPlay 
                loop
                style={styles.lottieView}/>
        </View>
    )
}