import React from 'react';
import { Icon } from 'expo';

import Colors from '../constants/Colors';

export default class TabBarIcon extends React.Component {
  render() {
    return (
      <Icon.Ionicons
        name={this.props.name}
        size={30}
        style={{ marginBottom: -3, marginLeft: 10 }}
        color="#00c44c"
      />
    );
  }
}