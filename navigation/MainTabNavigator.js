import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import LinksScreen from '../screens/LinksScreen';
import SettingsScreen from '../screens/SettingsScreen';
import ImproveScoreScreen from '../screens/ImproveScoreScreen';
import ProfileScreen from '../screens/ProfileScreen';

const HomeStack = createStackNavigator({
  Home: HomeScreen,
});

HomeStack.navigationOptions = {
  tabBarLabel: 'My score',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-heart${focused ? '' : '-outline'}`
          : 'md-heart'
      }
    />
  ),
};

const CashStack = createStackNavigator({
  Links: LinksScreen,
});

CashStack.navigationOptions = {
  tabBarLabel: 'My rewards',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-star${focused ? '' : '-outline'}` : 'md-star'}
    />
  ),
};

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen,
});

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-options${focused ? '' : '-outline'}` : 'md-options'}
    />
  ),
};

const ImproveScoreStack = createStackNavigator({
  ImproveScore: ImproveScoreScreen,
});

ImproveScoreStack.navigationOptions = {
  tabBarLabel: 'Improve score',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={'md-arrow-round-up'}
    />
  ),
};
const ProfileStack = createStackNavigator({
  Profile: ProfileScreen,
});

ProfileStack.navigationOptions = {
  tabBarLabel: 'My profile',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-person${focused ? '' : '-outline'}` : 'md-person'}
    />
  ),
};

export default createBottomTabNavigator({
  ProfileStack,
  HomeStack,
  CashStack,
  ImproveScoreStack,
});
