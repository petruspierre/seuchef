import {StyleSheet} from 'react-native'

import commonStyles from '../../commonStyles'

export default styles = StyleSheet.create({
    button: {
        backgroundColor: commonStyles.colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        width: 252,
        height: 50,
        paddingBottom: 5,
    },
    text: {
        color: 'white',
        fontFamily: commonStyles.fontFamily.regular,
        fontSize: 18,
    }
})