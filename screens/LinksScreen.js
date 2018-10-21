import React from 'react';
import { ScrollView, StyleSheet, Image, Text } from 'react-native';
import currency from 'currency.js';

import { ProText } from '../components/StyledText';

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
    const { balance, change } = this.state;
    const changeStyle = {
      marginLeft: 12,
      fontSize: 32,
      color: 'red',
      color: change >= 0 ? 'green' : 'red',
    };

    return (
      <ScrollView style={styles.container} contentContainerStyle={styles.content}>
        <Image style={{ flex: 1 }} source={require('../assets/images/piggy.jpg')} />
        <ProText style={styles.balance}>
          {USD(balance)}
          <ProText style={changeStyle}> {change >= 0 && '+'}{diff(change)}</ProText>
        </ProText>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
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
  }
});
