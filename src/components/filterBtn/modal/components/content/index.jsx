import {View, Text, TouchableOpacity} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../../../../theme/colors';
import styles from './styles';
const Content = ({item, onPress, isSelected}) => {
  const {value, LeftChild} = item;
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => onPress(item)}
      style={styles.container}>
      <View style={styles.internalContainer}>
        {LeftChild && <LeftChild />}
        <Text style={styles.title}>{value}</Text>
      </View>
      <MaterialCommunityIcons
        size={22}
        color={colors.themeBlue}
        name={isSelected(item) ? 'radiobox-marked' : 'radiobox-blank'}
      />
    </TouchableOpacity>
  );
};
export default Content;
