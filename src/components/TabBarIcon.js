import React, {useEffect, useState} from 'react';
import { FontAwesome } from '@expo/vector-icons';
import {StyleSheet, Dimensions, View} from 'react-native';

export const TabBarIcon = ({iconName = 'info', ...props}) => {
  const [icon, setIcon] = useState(iconName);
  const [focused, setFocused] = useState(props.focused);

  useEffect(() => {
    setFocused(props.focused);
  }, [props.focused]);

  return (
    <View style={styles.mainView}>
      <FontAwesome name={icon} size={20} color={focused ? '#00B355' : 'gray'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  mainView: {
    width: 50,
    backgroundColor: '#1A2430',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#182234',
    alignItems: 'center',
    padding: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 5,
      height: 5,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 8,
  },
});
