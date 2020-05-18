import React from 'react';
import { View, Dimensions } from 'react-native';
import Svg, { Ellipse } from 'react-native-svg';
import * as Animatable from 'react-native-animatable';

import styles from './styles';
import commonStyles from '../../commonStyles'

export default function Header() {

  const AnimatedSvg = Animatable.createAnimatableComponent(Svg)

  //https://stackoverflow.com/questions/39344140/react-native-how-to-control-what-keyboard-pushes-up

  return (

    <View behavior="height" style={styles.container}>
      <AnimatedSvg 
        useNativeDriver
        animation='pulse'
        iterationCount={Infinity}
        height='100%' width='100%'>
        <Ellipse cx={Dimensions.get('window').width / 2}
                  cy="0"
                  rx="330"
                  ry="210" 
                  fill={commonStyles.colors.primary} />
      </AnimatedSvg>
    </View>
  );
}