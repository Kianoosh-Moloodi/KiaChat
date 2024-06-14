import React from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';
import colors from '../constants/colors';

export const Inputs = (props) => {
  return (
    <View style={styles.container}>
      <Text>{props.label}</Text>
      <View style={styles.inputContainer}>
        {props.icon && (
          <props.iconPack
            name={props.icon}
            size={props.iconSize || 15}
            style={styles.icon}
          />
        )}
        <TextInput />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  inputContainer: {
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderRadius: 2,
    backgroundColor: colors.nearlyWhite,
    flexDirection: 'row',
  },
  icon: {
    marginRight: 10,
    color: colors.grey,
  },
});
