import React from 'react';

import {
  View,
  Text,
  StyleSheet, // uses for styling the components
  useColorScheme,
} from 'react-native';

// always will return JSX elements
function AppTest(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark'; // use the dark color scheme

  return (
    <View style={styles.container}>
      <Text style={isDarkMode ? styles.whiteText : styles.darkText}>
        Hi! React Native
      </Text>
    </View>
  );
}

// creating styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center', // It works on left to right
    justifyContent: 'center', // It works on top to bottom
    // In react native, the main axis and the cross axis are different on it.
  },
  whiteText: {
    color: '#FFFFFF',
  },
  darkText: {
    color: '#000000',
  },
});
export default AppTest;
