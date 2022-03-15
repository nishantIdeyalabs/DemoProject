import React, {useCallback, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
const MainPage = props => {
  return (
    <SafeAreaView>
      <Text style={{fontSize: 20, fontWeight: 'bold', textAlign: 'center'}}>
        Functionality Practice
      </Text>
      <ScrollView style={{marginTop: 10, marginHorizontal: 10}}>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('page1')}
          style={styles.touch}>
          <Text>Show more Functionality</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('page1')}
          style={styles.touch}>
          <Text>Fingerprint Sensor</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('ScrollToDown')}
          style={styles.touch}>
          <Text>ScrollToDown</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  touch: {
    backgroundColor: '#B6D0E2',
    padding: 10,
    marginVertical: 5,
    borderRadius: 25,
  },
  touch_text: {
    color: 'black',
  },
  city: {
    color: 'black',
    fontSize: 15,
    alignSelf: 'center',
  },
  flat: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginTop: 8,
    borderRadius: 10,
    elevation: 5,
  },
  text_input: {
    borderColor: '#000',
    borderWidth: 0.5,
    borderRadius: 50,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default MainPage;
