import {FC} from 'react';
import {Text, View} from 'react-native';
import {EmptyTextProps} from '../../modelInterface/components/emptyText';
import styles from './styles';
const EmptyText: FC<EmptyTextProps> = ({title, containerStyle}) => {
  return (
    <View style={[styles.emptyContainer, containerStyle]}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};
export default EmptyText;
