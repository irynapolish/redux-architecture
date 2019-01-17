import React from 'react';
import { View } from 'react-native';

export default ({ style, ...props }) => (
  <View
    {...props}
    style={[
      { flexDirection: 'row' },
      props.centered ? { alignItems: 'center' } : null,
      style,
    ]}
  />
);
