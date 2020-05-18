import {StyleSheet} from 'react-native'

import commonStyles from '../../commonStyles'

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    header: {
        marginTop: 96,
        justifyContent: "center",
        alignItems: "center",
        width: '100%'
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 75,
    },
    username: {
        color: commonStyles.colors.black,
        fontSize: 36,
        fontFamily: commonStyles.fontFamily.regular
    },
    cardContainer: {
        marginTop: 16,
    },
    cardContainerTitle:{
        width: commonStyles.metric.screenWidth,
        marginLeft: 16,
        fontSize: 24,
        color: commonStyles.colors.black,
        fontFamily: commonStyles.fontFamily.regular
    }
})