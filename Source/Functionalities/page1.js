import React, {useCallback, useState} from 'react';
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
const page1 = props => {
  const [textShown, setTextShown] = useState(false); //To show ur remaining Text
  const [textLength, setTextlength] = useState(false);
  const [textShownFlat, setTextShownFlat] = useState(-1);
  console.log(textLength);
  const toggleNoOfLines = () => {
    setTextShown(!textShown);
  };
  const toggleNumberOfLinesFlat = index => {
    setTextShownFlat(textShownFlat === index ? -1 : index);
  };
  return (
    <SafeAreaView>
      <View style={{margin: 10}}>
        <Text
          numberOfLines={textShown ? undefined : 2}
          style={{fontWeight: '600', fontSize: 15, color: '#000'}}
          onTextLayout={useCallback(e => {
            setTextlength(e.nativeEvent.lines.length >= 2);
            // console.log(e.nativeEvent.lines.length);
          })}>
          React Navigation's native stack navigator provides a way for your app
          to transition between screens and manage navigation history. If your
          app uses only one stack navigator then it is conceptually similar to
          how a web browser handles navigation state - your app pushes and pops
          items from the navigation stack as users interact with it, and this
          results in the user seeing different screens. A key difference between
          how this works in a web browser and in React Navigation is that React
          Navigation's native stack navigator provides the gestures and
          animations that you would expect on Android and iOS when navigating
          between routes in the stack.
        </Text>
        {textLength ? (
          <Text onPress={toggleNoOfLines}>
            {textShown ? 'Read less...' : 'Read more...'}
          </Text>
        ) : null}
      </View>
      <View>
        <FlatList
          data={data}
          keyExtractor={item => item.id}
          renderItem={({item, index}) => {
            return (
              <View style={{marginVertical: 5}} key={index}>
                <Text
                  style={{fontSize: 15, color: '#000'}}
                  numberOfLines={textShownFlat === index ? undefined : 1}>
                  {item.paragraph}
                </Text>
                <Text onPress={() => toggleNumberOfLinesFlat(index)}>
                  {textShownFlat === index ? 'Read less...' : 'Read more...'}
                </Text>
              </View>
            );
          }}
        />
      </View>
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

export default page1;
