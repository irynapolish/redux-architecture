import React from 'react';
import { View, Image, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { Text, Overlay, Row, StatusBarSpacer } from 'components';
import styles from './styles';

export default ({ title, style, inverted, ...props }) => (
  <View
    {...props}
    style={style}
  >
    <If condition={props.useSafeArea}>
      <StatusBarSpacer />
    </If>
    <View style={{ height: 48, justifyContent: 'center' }}>
      <If condition={title}>
        <Overlay style={{ justifyContent: 'center' }}>
          <View style={{ alignSelf: 'center' }}>
            <TouchableWithoutFeedback
              style={{ padding: 16 }}
            >
              <Text
                bold
                subheading
                primary
              >
                {title}
              </Text>
            </TouchableWithoutFeedback>
          </View>
        </Overlay>
      </If>
      <If condition={props.renderRightContent}>
        <Overlay style={{ justifyContent: 'center', alignItems: 'flex-end' }}>
          <Row centered>
            {props.renderRightContent()}
          </Row>
        </Overlay>
      </If>
    </View>
    <View style={styles.divider} />
  </View>
);
