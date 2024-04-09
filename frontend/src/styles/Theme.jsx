import { StatusBar } from "react-native"

const paddingTopValue = StatusBar.currentHeight ? StatusBar.currentHeight + 68 : 72

export const THEME = {
    colors: {
        white: '#F2F2F2',
        black: '#0A080D',
        brownDark: '#59372A',
        brownMedium: '#826059',
        brownLight: '#CFB18C',
        grayDark: '#8B8B8B',
        grayMedium: '#D9D9D9',
        green: '#196805',
        red: '#CE1F1F',
    },

    fonts: {
        h1: {
            fontFamily: 'EBGaramond_700Bold',
            fontSize: 24,
        },

        h2: {
            bold: {
                fontFamily: 'EBGaramond_600SemiBold',
                fontSize: 20,
            },

            normal: {
                fontFamily: 'EBGaramond_400Regular',
                fontSize: 20,
            }
        },
        
        link: {
            fontFamily: 'EBGaramond_700Bold',
            fontSize: 16,
        },

        text: {
            fontFamily: 'EBGaramond_400Regular',
            fontSize: 16,
        },
    },

    errors: {
        
        message: {
            color: '#CE1F1F',
            textAlign: 'center',
            marginVertical: 8,
        },

        input: {
            borderColor: '#CE1F1F',
        },
    }, 

    container: {
        flex: 1,
        paddingTop: paddingTopValue,
        paddingHorizontal: 28,
        paddingBottom: 40,

        justifyContent: 'space-between'
    },
}