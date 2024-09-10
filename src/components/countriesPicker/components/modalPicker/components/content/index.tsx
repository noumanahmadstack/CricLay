import React, {memo} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {ModalContentProps} from '../../../../../../modelInterface/components/countriesPicker';
import styles from './styles';
const Content: React.FC<ModalContentProps> = props => {
  const {emoji, name, onPress} = props;
  const handlePress = () => {
    if (onPress) {
      onPress(props);
    }
  };
  return (
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      <Text>{emoji}</Text>
      <Text style={styles.name}>{name}</Text>
    </TouchableOpacity>
  );
};
export default memo(Content);
