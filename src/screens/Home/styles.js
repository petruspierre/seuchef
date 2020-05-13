import {StyleSheet} from 'react-native'

import commonStyles from '../../commonStyles'

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        //justifyContent: 'center',
    },
    header: {
        marginTop: 48,
        marginLeft: 32,
        width: commonStyles.metric.screenWidth
    },
    title: {
        fontSize: 48,
        fontFamily: commonStyles.fontFamily.regular,
        color: '#fff'
    },
    subtitle: {
        fontSize: 18,
        fontFamily: commonStyles.fontFamily.regular,
        color: '#fff'
    },
    input: {
        marginTop: 16,
        marginRight: 32,
        height: 60,
        padding: 8,
        paddingLeft: 16,
        backgroundColor: "#fff",
        borderRadius: 5,
        elevation: 10,
    },
    categories: {
        flexDirection: "row",
    },
    containerTitle:{
        width: commonStyles.metric.screenWidth,
        marginLeft: 16,
        fontSize: 24,
        color: commonStyles.colors.black,
        fontFamily: commonStyles.fontFamily.regular
    }
})