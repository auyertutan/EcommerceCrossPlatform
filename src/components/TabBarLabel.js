import React, { useEffect, useState } from 'react';
import { StyleSheet, Text } from 'react-native';

export const TabBarLabel = ({ title, ...props }) => {
  const [active, setActive] = useState(props.focused);
  useEffect(() => {
    setActive(props.focused);
  }, [props.focused]);

  return (
    <Text style={[styles.label, active ? { color: 'white' } : { color: 'gray' }]}>
      {title}
    </Text>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 11,
  },
});