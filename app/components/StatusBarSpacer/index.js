import React from 'react';
import { View, Platform } from 'react-native';
import { isIphoneX } from 'react-native-iphone-x-helper';

export default class StatusBarSpacer extends React.Component {

  static isTransparentStatusBarSupported() {
    return StatusBarSpacer.getStatusBarHeight() > 0;
  }

  static getStatusBarHeight() {
    switch (Platform.OS) {
      case 'ios':
        if (isIphoneX()) {
          return 44;
        } else {
          return 20;
        }
      default:
        return 0;
    }
  }

  render() {
    return (
      <View
        {...this.props}
        style={[{ height: StatusBarSpacer.getStatusBarHeight() }, this.props.style]}
      />
    );
  }
}
