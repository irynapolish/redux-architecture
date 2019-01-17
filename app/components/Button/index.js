import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Text } from 'components';
import { primary } from 'colors';

export default ({ title, disabled, style, ...props }) => {
  return (
    <TouchableOpacity
      {...props}
      disabled={disabled}
      style={[
        style,
        disabled ? { opacity: 0.5 } : { opacity: 1 },
      ]}
    >
      <Text
        bold inverted
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};
