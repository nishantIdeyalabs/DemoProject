import react from 'react';
import React, {useCallback, useState, useRef} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  Pressable,
  FlatList,
  View,
  TouchableOpacity,
  Animated,
  Dimensions,
} from 'react-native';
import data from '../data.json';
const {height} = Dimensions.get('window');

const ScrollToDown = props => {
  const flatlistRef = useRef();
  const [buttonShown, setButtonShown] = useState(false); //To show ur remaining Text
  const [textLength, setTextlength] = useState(false);
  const [textShownFlat, setTextShownFlat] = useState(-1);
  const data = [
    {
      id: '1',
      title: 'First Item',
    },
    {
      id: '2',
      title: 'Second Item',
    },
    {
      id: '3',
      title: 'Third Item',
    },
    {
      id: '4',
      title: 'Fourth Item',
    },
    {
      id: '5',
      title: 'Fifth Item',
    },
    {
      id: '6',
      title: 'Sixth Item',
    },
    {
      id: '7',
      title: 'Seventh Item',
    },
    {
      id: '8',
      title: 'Eighth Item',
    },
    {
      id: '9',
      title: 'Ninth Item',
    },
    {
      id: '10',
      title: 'Tenth Item',
    },
    {
      id: '11',
      title: 'First Item',
    },
    {
      id: '12',
      title: 'Second Item',
    },
    {
      id: '13',
      title: 'Third Item',
    },
    {
      id: '14',
      title: 'Fourth Item',
    },
    {
      id: '15',
      title: 'Fifth Item',
    },
    {
      id: '16',
      title: 'Sixth Item',
    },
    {
      id: '17',
      title: 'Seventh Item',
    },
    {
      id: '18',
      title: 'Eighth Item',
    },
    {
      id: '19',
      title: 'Ninth Item',
    },
    {
      id: '20',
      title: 'Tenth Item',
    },
  ];
  console.log(height * 0.1);
  const onPressFunction = () => {
    flatlistRef.current.scrollToEnd({animating: true});
  };
  const handleScroll = event => {
    if (event.nativeEvent.contentOffset.y > height * 0.05) {
      console.log('>', event.nativeEvent.contentOffset.y);
      setButtonShown(true);
    } else {
      console.log('<', event.nativeEvent.contentOffset.y);
      setButtonShown(false);
    }
  };
  const scrollY = react.useRef(new Animated.Value(0)).current;
  console.log(scrollY);
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <FlatList
          inverted
          onScroll={event => handleScroll(event)}
          // onScroll={Animated.event(
          //   [{nativeEvent: {contentOffset: {y: scrollY}}}],
          //   {useNativeDriver: true, listener: event => handleScroll(event)},
          // )}
          //   scrollEventThrottle={16}
          //   onScrollToTop={console.log('hey')}
          ref={flatlistRef}
          data={data}
          keyExtractor={item => item.id}
          renderItem={({item}) => (
            <Text style={styles.title}>{item.title}</Text>
          )}
        />
        {buttonShown ? (
          <Pressable
            android_ripple
            style={styles.button}
            onPress={onPressFunction}>
            <Text style={styles.arrow}>v</Text>
          </Pressable>
        ) : null}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
  title: {
    fontSize: 72,
  },
  button: {
    position: 'absolute',
    width: 50,
    height: 50,
    borderRadius: 50 / 2,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 30,
  },
  arrow: {
    fontSize: 36,
  },
});

export default ScrollToDown;
