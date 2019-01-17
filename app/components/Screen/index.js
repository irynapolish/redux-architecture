import React from 'react';
import { View } from 'react-native';
import { StatusBarSpacer } from 'components';

const Screen = ({ style, children, ...props }) => (
  <View
    colors={['#FFFFFF', '#F2F2F2']}
    style={[{ flex: 1 }]}
    {...props}
  >
    <If condition={props.useSafeArea}>
      <StatusBarSpacer />
    </If>
    <View style={[{ flex: 1 }, style]}>
      {children}
    </View>
  </View>
);

Screen.defaultProps = {
  useSafeArea: true,
};

export default Screen;
