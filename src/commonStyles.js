import { StyleSheet, Dimensions } from 'react-native'
import { statusBarHeight } from 'expo-constants'

export default commonStyles = {
    colors: {
        light: "#E54161",
        primary: "#DC143C",
        dark: "#AD0728",
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