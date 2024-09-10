import {FC} from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

const BatterViewHeader: FC = () => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.lineupContainer}>
        <Text style={styles.lineupTitle}>Batter</Text>
      </View>
      <View style={styles.cardTextWrapper}>
        <Text style={styles.scoreTypeTitle}>R</Text>
        <Text style={styles.scoreTypeTitle}>B</Text>
        <Text style={styles.scoreTypeTitle}>4s</Text>
        <Text style={styles.scoreTypeTitle}>6s</Text>
        <Text style={styles.scoreTypeTitle}>SR</Text>
      </View>
    </View>
  );
};
export default BatterViewHeader;
