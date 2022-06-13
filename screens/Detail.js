import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import {useTheme, Button} from 'react-native-paper';

const Detail = ({navigation, route}) => {
  return <Text>This is {route.params.name}'s profile</Text>;
};

export default Detail;
