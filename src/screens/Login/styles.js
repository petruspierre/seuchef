import {StyleSheet} from 'react-native'

import commonStyles from '../../commonStyles'

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    position: "absolute",
    top: 8,
    fontSize: 36,
    fontFamily: commonStyles.fontFamily.regular,
    width: 252,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  insideContainer: {
    justifyContent: "center",
    alignItems: "center",
    width: 300,
    height: 580,
    backgroundColor: '#ffffff',
    borderRadius: 8,
  },
  registerContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 56,
  },
  switchMode: {
    fontFamily: commonStyles.fontFamily.regular,
    fontSize: 18,
    marginBottom: 12,
  },
  bottom: {
    width: 252,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 24,
  }
})