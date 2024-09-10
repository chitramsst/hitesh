import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { PropsWithChildren } from 'react';

type CurrencyButtonProps = PropsWithChildren<{
  name: string;
  flag: string;
}>;

const CurrencyButton = (props: CurrencyButtonProps): JSX.Element => {
  return (
    <View style={styles.buttonContainer}>
      <Text style={styles.country}>{props.name}</Text>
      <Text style={styles.flag}>{props.flag}</Text>
    </View>
  );
};

const styles = StyleSheet.create(
  {
  buttonContainer: {
    alignItems: 'center',
    width: 100,
    paddingHorizontal: 5,
    paddingVertical: 10
  },
  flag: {
    fontSize: 18,
    marginBottom: 4,
  },
  country: {
    fontSize: 12,
    marginBottom: 4,
    color: '#FFF',
  },
}
);

export default CurrencyButton;