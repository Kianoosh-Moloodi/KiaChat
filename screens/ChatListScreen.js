import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export const ChatListScreen = (props) => {
  return (
    <View style={styles.container}>
      <Text>ChatListScreen.js</Text>
      <Button
        title='Go to ChatScreen'
        onPress={() => props.navigation.navigate('ChatScreen')}
      />
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
