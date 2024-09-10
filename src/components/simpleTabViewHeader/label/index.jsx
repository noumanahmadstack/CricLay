import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

const renderLabel = ({route, focused}) => {
  const handleCount = count => {
    if (count >= 999) {
      return '999+';
    } else {
      return count;
    }
  };
  return (
    <View style={styles.contentContainer}>
      <Text style={styles.title}>{route.title}</Text>
      {route.count >= 0 ? (
        <Text style={styles.description}>{handleCount(route.count)}</Text>
      ) : null}
    </View>
  );
};

export default renderLabel;
