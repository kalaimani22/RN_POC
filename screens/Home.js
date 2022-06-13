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
import {Button} from 'react-native-paper';

const Home = ({navigation}) => {
  return (
    <Button
      icon="camera"
      mode="contained"
      onPress={() => navigation.navigate('Detail', {name: 'Jane'})}>
      Press me
    </Button>
  );
};

export default Home;
