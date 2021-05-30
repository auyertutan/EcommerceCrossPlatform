import React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';

export const Spinner = () => {

  return (
    <View style={styles.container}>
      <ActivityIndicator size={75} color="#00B355" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});
