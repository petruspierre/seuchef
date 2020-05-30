import {StyleSheet} from 'react-native'

import commonStyles from '../../commonStyles'

export default styles = StyleSheet.create({
    container: {
        width: 150,
        height: 160,
        backgroundColor: '#fff',
        marginLeft: 16,
        marginRight: 8,
        marginBottom: 16,
        elevation: 10,
        borderRadius: 10
    },
    detailContainer:{
        flex: 1,
        justifyContent: "center",
        marginLeft: 16,
        marginBottom: 2,
    },
    title: {
        fontSize: 17,
        marginBottom: 5,
        fontFamily: commonStyles.fontFamily.medium,
        color: commonStyles.colors.black
    },
    image: {
        width: 150,
        height: 115,
        borderRadius: 10,
    },
    amount: {
        fontSize: 13,
        fontFamily: commonStyles.fontFamily.regular,
        color: commonStyles.colors.grey
    }
})