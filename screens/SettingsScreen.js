import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export const SettingsScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text>SettingsScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
