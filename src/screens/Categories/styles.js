import {StyleSheet} from 'react-native'

import commonStyles from '../../commonStyles'

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: '#fff'
  },
  title: {
    color: 'white',
    marginTop: 16,
    fontSize: 32,
    fontFamily: commonStyles.fontFamily.medium
  }
})