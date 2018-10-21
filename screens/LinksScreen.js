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
    console.log(this.props.navigation.state);

    const { balance, change } = this.state;
    const changeStyle = {
      marginLeft: 12,
      fontSize: 32,
      color: 'red',
      color: change >= 0 ? 'green' : 'red',
    };
    const amount = (this.props.navigation.state.params || {}).amount || 0;

    return (
      <View style={styles.container}>
        <ProText style={{ fontSize: 34 }}>My rewards</ProText>

        <View style={styles.quicktip}>
          <ProText style={{ fontSize: 20, marginBottom: 10 }}>Quick tip</ProText>
          <ProText>Rewards are based on your daily achievements. Keep up the good work and get rewarded.</ProText>
        </View>

        <View style={styles.score}>
          <OpenText style={{ color: '#003ea9', fontSize: 45 }}>
            ${amount || 0}
          </OpenText>
        </View>

        <Text>Credit score algorithm is similar to actual FICO scoring and is only for information purposes.</Text>

        <View style={{ flex: 1 }}>
        </View>

        <View style={{}}>
          <Image
            resizeMode="contain"
            style={{ width: '100%', height: 165 }}
            source={require('../assets/images/graph.png')}
          />
        </View>
      </View>
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
