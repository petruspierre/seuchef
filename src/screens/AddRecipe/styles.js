import {StyleSheet} from 'react-native'

import commonStyles from '../../commonStyles'

export default styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: "#fff"
    },
    imagePickContainer: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: '#ffffff',
        borderRadius: 10,
        elevation: 5,
        width: 350,
        height: 156,
        marginTop: 32,
    },
    imagePicker: {
        backgroundColor: '#c4c4c4',
        width: 114,
        height: 114,
        borderRadius: 57,
        margin: 16,
    },
    textPick: {
        fontSize: 16,
        fontFamily: commonStyles.fontFamily.regular,
        width: 162,
        color: commonStyles.colors.black,
        textAlign: "center"
    },
    button: {
        backgroundColor: commonStyles.colors.primary,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5,
        marginTop: 16,
        width: 146,
        height: 29,
        paddingBottom: 5,
    },
    buttonText: {
        color: 'white',
        fontFamily: commonStyles.fontFamily.regular,
        fontSize: 14,
    },
    baseInput:{
        width: 350,
        height: 85,
    },
    title: {
        fontSize: 18,
        fontFamily: commonStyles.fontFamily.medium,
        color: commonStyles.colors.black,
        marginBottom: 8,
    },
    input: {
        width: 350,
        height: 50,
        padding: 8,
        paddingLeft: 16,
        backgroundColor: "#fff",
        borderRadius: 5,
        elevation: 5,
    },
    detailBaseInput: {
        width: 160,
        height: 40,
        padding: 8,
        paddingLeft: 16,
        backgroundColor: "#fff",
        borderRadius: 5,
        elevation: 5,
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center"
    },
    details: {
        width: 350,
        height: 80,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    detailInput: {
        width: 80,
        textAlign: "center",
    }
})