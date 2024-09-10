import {FC} from 'react';
import {View, Text} from 'react-native';
import styles from './styles';
import Feather from 'react-native-vector-icons/Feather';
import colors from '../../../../../../theme/colors';
const BowlerViewHeader: FC<{onEditBowler?: () => void}> = ({onEditBowler}) => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.lineupContainer}>
        {!!onEditBowler && (
          <Feather
            color={colors.darkRed}
            style={styles.icon}
            onPress={onEditBowler}
            size={20}
            name="refresh-cw"
          />
        )}
        <Text style={styles.lineupTitle}>Bowler</Text>
      </View>
      <View style={styles.cardTextWrapper}>
        <Text style={styles.scoreTypeTitle}>O</Text>
        <Text style={styles.scoreTypeTitle}>M</Text>
        <Text style={styles.scoreTypeTitle}>W</Text>
        <Text style={styles.scoreTypeTitle}>R</Text>
        <Text style={styles.scoreTypeTitle}>Eco</Text>
      </View>
    </View>
  );
};

export default BowlerViewHeader;
