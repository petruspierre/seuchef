import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import styles from './styles'

export default function AddRecipe() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add recipe</Text>
    </View>
  );
}