import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
} from 'react-native';
import Icon from '../components/Icon';

import { ProText, OpenText } from '../components/StyledText';
import currency from 'currency.js';

const USD = (value) => currency(value, { symbol: "$", precision: 2 }).format(true);
const diff = (value) => currency(value, { precision: 2 }).format();

export default class PiggyScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };

  constructor (props) {
    super(props);

    this.state = {
      balance: 100,
      change: 10.56,
    };
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <Image
          resizeMode="cover"
          style={{flex: 1, width: '100%', height: 700}} source={require('../assets/images/profile.png')} />
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    paddingTop: 30,
    backgroundColor: '#fff',
  },
  score: {
    // flex: 1,
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
  },
  balance: {
    fontSize: 48,
  },
  change: {
    marginLeft: 12,
    fontSize: 32,
    color: 'red',
  },
  quicktip: {
    marginVertical: 10,
    backgroundColor: '#e6e6eb',
    width: '100%',
    borderRadius: 8,
    padding: 20,
  },
});
