import {StyleSheet} from 'react-native'

import commonStyles from '../../commonStyles'

export default styles = StyleSheet.create({
    container: {
        width: 150,
        height: 272,
        flex: 1,
        backgroundColor: '#fff',
        marginTop: 16,
        marginLeft: 16,
        marginRight: 8,
        marginBottom: 16,
        elevation: 10,
        borderRadius: 10
    },
    horizontalContainer: {
        flexDirection: "row",
        width: 350,
        flex: 1,
        backgroundColor: '#fff',
        marginTop: 16,
        marginBottom: 16,
        elevation: 10,
        borderRadius: 10
    },
    shimmerImage: {
        width: 150,
        height: 136,
        borderRadius: 10
    },
    shimmerTitle: {
        width: 100,
        marginTop: 12,
        marginLeft: 16,
        marginRight: 16,
        height: 13,
        borderRadius: 5,
    },
    shimmerAmount: {
        width: 50,
        height: 13,
        borderRadius: 5,
    },
    shimmerTime: {
        width: 50,
        height: 13,
        borderRadius: 5,
    },
    image:{
        width: 150,
        height: 136,
        borderRadius: 10
    },
    title: {
        width: 192,
        marginTop: 8,
        marginLeft: 16,
        marginRight: 16,
        fontSize: 13,
        color: commonStyles.colors.black,
        fontFamily: commonStyles.fontFamily.regular,
    },
    detailContainer:{
        width: 150,
        flexDirection: "row",
        alignItems: 'baseline',
        justifyContent: "space-between",
        position: "absolute",
        bottom: 8,
        padding: 16,
    },
    horizontalDetailContainer:{
        width: '100%',
        flexDirection: "row",
        alignItems: 'baseline',
        justifyContent: "space-between",
        position: "absolute",
        bottom: 0,
        padding: 16,
    },
    portion: {
        fontFamily: commonStyles.fontFamily.regular,
        fontSize: 13,
        color: commonStyles.colors.black,
    },  
    time: {
        fontFamily: commonStyles.fontFamily.medium,
        fontSize: 13,
        color: commonStyles.colors.grey,
    },
    horizontalPortion: {
        fontFamily: commonStyles.fontFamily.regular,
        fontSize: 16,
        color: commonStyles.colors.black,
    },  
    horizontalTime: {
        fontFamily: commonStyles.fontFamily.medium,
        fontSize: 14,
        color: commonStyles.colors.grey,
    }
})