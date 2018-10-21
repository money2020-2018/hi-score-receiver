import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { CreditCardInput, LiteCreditCardInput } from "react-native-credit-card-input";

export default class SettingsScreen extends React.Component {
  static navigationOptions = {
    title: 'app.json',
  };

  _onChange = () => {

  }

  render() {
    return (
      <View>
        <CreditCardInput onChange={this._onChange} />
      </View>
    )
  }
}
