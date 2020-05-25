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
        justifyContent: "center",
        alignItems: "center"
    },
    username: {
        color: commonStyles.colors.black,
        fontSize: 36,
        fontFamily: commonStyles.fontFamily.regular
    },
    usernameShimmer: {
        marginTop: 16,
        height: 26,  
        borderRadius: 8,
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
    },
    emptyWarningContainer: {
        width: '100%',
        marginTop: 16,
        marginBottom: 8,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    emptyWarning: {
        fontSize: 16,
        color: commonStyles.colors.black,
        fontFamily: commonStyles.fontFamily.regular,
        marginLeft: 40,
        marginRight: 40,
        textAlign: "center"
    }
})
