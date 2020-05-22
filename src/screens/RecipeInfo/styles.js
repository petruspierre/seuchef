import {StyleSheet} from 'react-native'

import commonStyles from '../../commonStyles'

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    zIndex: 1,
    position: 'absolute',
    flexDirection: "row",
    justifyContent: "space-between",
    top: 0,
    left: 0,
    width: commonStyles.metric.screenWidth,
    height: 50,
  },
  headerIcon: {
    margin: 8,
  },
  insideContainer: {
    marginTop: 292,
    backgroundColor: '#fff',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  image: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: commonStyles.metric.screenWidth,
    height: 300,
  },
  title: {
    marginTop: 8,
    fontFamily: commonStyles.fontFamily.bold,
    fontSize: 24,
    width: commonStyles.metric.screenWidth - 64,
    textAlign: "center",
    marginHorizontal: 32,
    color: commonStyles.colors.black
  },
  author: {
    fontFamily: commonStyles.fontFamily.light,
    fontSize: 16,
    width: commonStyles.metric.screenWidth - 64,
    textAlign: "center",
    marginHorizontal: 32,
    color: commonStyles.colors.black,
    marginBottom: 8,
  },
  headerRow: {
    width: commonStyles.metric.screenWidth - 64,
    marginHorizontal: 32,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerSectionTitle: {
    fontFamily: commonStyles.fontFamily.regular,
    fontSize: 18,
    color: commonStyles.colors.black
  },
  headerInfo: {
    fontFamily: commonStyles.fontFamily.regular,
    fontSize: 36,
    color: commonStyles.colors.black
  },
  scrollContainer: {
    marginTop: 8,
    height: 330,
  },
  card: {
    marginTop: 8,
    width: commonStyles.metric.screenWidth - 84,
    marginLeft: 32,
    elevation: 10,
    height: 300,
    backgroundColor: '#fff',
    marginBottom: 16,
    borderRadius: 10,
    alignItems: "center"
  },
  cardTitle: {
    fontFamily: commonStyles.fontFamily.medium,
    fontSize: 24,
    color: commonStyles.colors.black,
    marginTop: 8,
    marginBottom: 8,
  },
  listText: {
    fontSize: 18,
    marginLeft: 16,
    marginTop: 5,
    fontFamily: commonStyles.fontFamily.regular,
    color: commonStyles.colors.black,
  }
})