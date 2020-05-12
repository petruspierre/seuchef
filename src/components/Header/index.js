import React from 'react';
import { View } from 'react-native';
import Svg, { Ellipse } from 'react-native-svg';

import styles from './styles';
import commonStyles from '../../commonStyles'

export default class SvgExample extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Svg height="100%" width="100%" viewBox="0 0 100 100">
          <Ellipse cx="50"
                   cy="-20"
                   rx="70"
                   ry="40" 
                   fill={commonStyles.colors.primary} />
        </Svg>
      </View>
    );
  }
}