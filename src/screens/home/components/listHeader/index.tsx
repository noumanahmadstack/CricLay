import {FC} from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import {ListHeaderProps} from '../../../../modelInterface/screens/home';
const ListHeaderComponent: FC<ListHeaderProps> = ({
  headerTitle,
  onPressViewAll,
  disableViewAll,
}) => {
  const handlePress = () => {
    if (onPressViewAll) {
      onPressViewAll();
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{headerTitle}</Text>
      {!disableViewAll && (
        <Text onPress={handlePress} style={styles.viewAll}>
          View All
        </Text>
      )}
    </View>
  );
};
export default ListHeaderComponent;
