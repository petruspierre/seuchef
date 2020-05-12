import { StyleSheet, Dimensions } from 'react-native'
import { statusBarHeight } from 'expo-constants'

export default commonStyles = {
    colors: {
        light: "#CDD2FD",
        primary: "#9BA6FA",
        dark: "#6979F8",
        black: '#151522',
        grey: '#999999'
    },
    fontFamily: {
        regular: 'Quicksand-Regular',
        light: 'Quicksand-Light',
        medium: 'Quicksand-Medium',
        bold: 'Quicksand-Bold',
    },
    metric: {
        statusBarHeight: statusBarHeight,
        screenWidth: Dimensions.get('window').width,
        screenHeight: Dimensions.get('window').height
    }
}