import React, {memo} from 'react';
import {Text} from 'react-native';
import {CombineTextProps} from '../../modelInterface/components/combineText';
import styles from './styles';
const CombineText: React.FC<CombineTextProps> = ({text1, text2, onPress}) => {
  return (
    <Text style={styles.text1}>
      {text1}{' '}
      <Text onPress={onPress} style={styles.text2}>
        {text2}
      </Text>
    </Text>
  );
};
export default memo(CombineText);
