import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { PageContainer } from '../components/PageContainer';
import { Inputs } from '../components/Inputs';
import { Feather } from '@expo/vector-icons';

export const AuthScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <PageContainer>
        <Inputs label='First Name' icon='user' iconPack={Feather} />
      </PageContainer>
    </SafeAreaView>
  );
};
