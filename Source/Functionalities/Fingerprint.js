import React, {useCallback, useEffect, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  FlatList,
  View,
  TouchableOpacity,
} from 'react-native';
import data from '../data.json';
// import FingerprintScanner from 'react-native-fingerprint-scanner';
const Fingerprint = props => {
  const [textShown, setTextShown] = useState(false); //To show ur remaining Text
  const [textLength, setTextlength] = useState(false);
  const [textShownFlat, setTextShownFlat] = useState(-1);

  useEffect(() => {
    // FingerprintScanner.authenticate({
    //   description: 'Scan your fingerprint on the device scanner to continue',
    // })
    //   .then(() => {
    //     //   props.handlePopupDismissed();
    //     alert('Scan your fingerprint');
    //     //   AlertIOS.alert('Authenticated successfully');
    //   })
    //   .catch(error => {
    //     //  props.handlePopupDismissed();
    //     //   AlertIOS.alert(error.message);
    //     alert('Scan your fingerprint');
    //   });
  });
  return (
    <SafeAreaView>
      <View></View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  touch: {
    backgroundColor: '#B6D0E2',
    padding: 8,
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

export default Fingerprint;
