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

export default class HomeScreen extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      multiplier: 1,
      cash: 5.20,
      allowance: 0,
    }
  }

  componentDidMount () {
    setInterval(() => {
      fetch('http://10.42.0.114:5000/balance').then((payload) => {
        return payload.json();
    }).then((payload) => {
        const { navigate } = this.props.navigation;
        const { balance } = payload;
console.log('wtf', balance)
        if (balance !== 0 && balance !== this.state.allowance) {
          console.log('weee', balance)
          this.setState({allowance: balance});
          navigate('Links', {amount: balance});
        }
      }).catch((e) => {
        // do nothing
      });
    }, 1000);
  }

  static navigationOptions = {
    header: null,
  };

  render() {
    const { allowance } = this.state;

    return (
      <View style={styles.container}>
        <ProText style={{fontSize: 34}}>My score</ProText>

        <View style={styles.quicktip}>
          <ProText style={{fontSize: 20, marginBottom: 10}}>Quick tip</ProText>
          <Text style={{}}>Your credit score is shown here and is based on your connected accounts.</Text>
        </View>

        <View style={styles.score}>
          <OpenText style={{color:'#003ea9', fontSize: 45}}>
            640
            <Icon style={{ paddingLeft: 10, marginLeft: 10 }} name="md-arrow-round-up" />
          </OpenText>
        </View>

        <View style={styles.share}>
          <ProText style={{fontSize: 24}}>Share my score!</ProText>
        </View>

        <Text style={{ fontStyle: 'italic' }}>Credit score algorithm is similar to actual FICO scoring and is only for information purposes.</Text>

        <View style={{flex: 1}}>
        </View>

        <View style={{}}>
          <Image
            resizeMode="contain"
            style={{width: '100%', height: 148}}
            source={require('../assets/images/graph.png')}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  score: {
    // flex: 1,
    alignItems: 'center',
  },
  container: {
    flex: 1,
    padding: 15,
    paddingTop: 60,
    backgroundColor: '#fff',
    paddingBottom: 0,
  },
  quicktip: {
    marginVertical: 10,
    backgroundColor: '#e6e6eb',
    width: '100%',
    borderRadius: 8,
    padding: 20,
    marginTop: 30,
  },
  share: {
    marginVertical: 10,
    backgroundColor: '#ffdb00',
    width: '100%',
    borderRadius: 8,
    padding: 20,
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
