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
    image:{
        width: 150,
        height: 136,
        borderRadius: 10
    },
    title: {
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
    portion: {
        fontFamily: commonStyles.fontFamily.regular,
        fontSize: 15,
        color: commonStyles.colors.black,
    },  
    time: {
        fontFamily: commonStyles.fontFamily.medium,
        fontSize: 13,
        color: commonStyles.colors.grey,
    }
})