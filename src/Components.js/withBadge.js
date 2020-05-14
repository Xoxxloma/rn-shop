import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Badge } from 'react-native-elements';

const styles = StyleSheet.create({
  badge: {
    borderRadius: 9,
    height: 17,
    minWidth: 0,
    width: 17,
  },
  badgeContainer: {
    position: 'absolute',
  },
  badgeText: {
    fontSize: 10,
    paddingHorizontal: 0,
  },
});

const withBadge = (value, options = {}) => WrappedComponent =>
  (props) => {
      const {
        top = -5,
        right = -25,
        left = 0,
        bottom = 0,
        hidden = !value,
        ...badgeProps
      } = options;
      const badgeValue =
        typeof value === 'function' ? value(props) : value;
      return (
        <View>
          <WrappedComponent {...props} />
          {!hidden && (
            <Badge
              badgeStyle={styles.badge}
              textStyle={styles.badgeText}
              value={badgeValue}
              status="success"
              containerStyle={[
                styles.badgeContainer,
                { top, right, left, bottom },
              ]}
              {...badgeProps}
            />
          )}
        </View>
      );
  };

export default withBadge;