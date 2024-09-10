import React, { useState } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  useColorScheme,
  TextInput,
  FlatList,
  Pressable,
  Dimensions
} from 'react-native';
import Snackbar from 'react-native-snackbar';
import CurrencyButton from "./components/CurrencyButton";
import { currencyByRupee } from "./constants/constant";

const { width } = Dimensions.get('window');

function AppPro(): JSX.Element {
  const [inputValue, setInputValue] = useState('')
  const [resutValue, setResultValue] = useState('')
  const [targetCurrency, setTargetCurrency] = useState('')

  const pressButton = (targetValue: Currency) => {
    if (!inputValue) {
      return Snackbar.show({
        text: "Enter a value to convert",
        backgroundColor: '#A9D800',
        // backgroundColor: '#A9D800',
        textColor: '#000000'
      });
    }
    const inputAmount = parseFloat(inputValue)
    if (!isNaN(inputAmount)) {
      const convertedValue = parseFloat(inputValue) * targetValue.value;
      const result = `${targetValue.symbol}${convertedValue.toFixed(2)} ${targetValue.flag}`
      setResultValue(result)
      setTargetCurrency(targetValue.name)
    } else {
      return Snackbar.show({
        text: "Not a Valid number to convert",
        backgroundColor: '#A9D800',
        textColor: '#000000'
      });
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.innerCard}>
        <View style={styles.topContainer}>
          <View style={styles.rupeeContainer}>
            <TextInput
              maxLength={14}
              onChangeText={setInputValue}
              value={inputValue}
              clearButtonMode="always"
              keyboardType="number-pad"
              placeholder="Enter Amount to Convert"
              placeholderTextColor={'#dcdcdc'}
              style={styles.input}
            />
          </View>
        </View>
        {resutValue && <>
          <Text style={styles.resultTxt}>{resutValue}</Text>
          <Text style={{ color: '#C0C0FF', fontWeight:'10', fontSize:12,  marginBottom: 16 }}> {targetCurrency}</Text>
        </>}
      </View>
      <View style={styles.bottomContainer}>
        <FlatList
          numColumns={3}
          data={currencyByRupee}
          keyExtractor={item => item.name}
          renderItem={({ item }) => (
            <Pressable
              style={[
                styles.button,
                targetCurrency === item.name && styles.selected
              ]}
              onPress={() => pressButton(item)}
            >
              <CurrencyButton {...item} />
            </Pressable>
          )}
          columnWrapperStyle={styles.columnWrapper}
        />
      </View>
    </View>
  );
}

const cardWidth = (width) / 3; // adjust 32 for padding/margins as needed

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#212121',
    flex: 1,
    padding: 10,
  },
  whiteText: {
    color: '#ffffff',
  },
  topContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  resultTxt: {
    // color: '#C0C0FF',
    color: '#A9D800',
    fontWeight: '900',
    marginTop: 16,
    fontSize: 30
  },
  bottomContainer: {
    width: '100%',
    alignItems: 'center',
  },
  rupeeContainer: {
    marginRight: 8,
    fontSize: 22,
    width: '100%',
  },
  input: {
    backgroundColor: '#0D0D0D',
    width: '100%',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    marginVertical: 8,
    color: '#FFF'
  },
  button: {
    backgroundColor: '#000000',
    margin: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    padding: 8
  },
  selected: {
    // backgroundColor: '#A9D800',
    backgroundColor: '#EA7773',
  },
  columnWrapper: {
    justifyContent: 'space-between',
  },
  innerCard: {
    backgroundColor: '#303134',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default AppPro;