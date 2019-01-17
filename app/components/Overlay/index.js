import React from 'react';
import { View } from 'react-native';

export default ({ style, ...props }) => (
  <View
    pointerEvents={props.pointerEvents || 'box-none'}
    {...props}
    style={[
      { position: 'absolute', left: 0, top: 0, bottom: 0, right: 0 },
      props.center ? { justifyContent: 'center', alignItems: 'center' } : null,
      style,
    ]}
  />
);
