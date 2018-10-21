import React from 'react';
import { Text } from 'react-native';

export class ProText extends React.Component {
  render() {
    return <Text {...this.props} style={[this.props.style, { fontFamily: 'sf-pro-bold' }]} />;
  }
}
export class OpenText extends React.Component {
  render() {
    return <Text {...this.props} style={[this.props.style, { fontFamily: 'open-sans-extra' }]} />;
  }
}
