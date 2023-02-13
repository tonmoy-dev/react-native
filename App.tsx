import React from 'react';

import {
  View, // as like div, an container
  Text, // writing text
  SafeAreaView, // avoiding the notches
  Button,
  TextInput,
} from 'react-native';

function App() {
  return (
    <SafeAreaView>
      <View>
        <Text>Hello React Native!</Text>
      </View>
    </SafeAreaView>
  );
}
export default App;
