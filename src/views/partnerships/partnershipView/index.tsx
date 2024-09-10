import {FC, memo} from 'react';
import {View, Text} from 'react-native';
import {PartnershipViewProps} from '../../../modelInterface/views/partnerships';
import styles from './styles';
const PartnershipView: FC<PartnershipViewProps> = ({
  batsmanOne,
  batsmanOneBalls,
  batsmanOneRuns,
  batsmanTwo,
  batsmanTwoBalls,
  batsmanTwoRuns,
  ballsCount,
  runs,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftInternalContainer}>
        <Text style={styles.playerName}>{batsmanOne?.name}</Text>
        <Text style={styles.playerRuns}>
          {batsmanOneRuns}({batsmanOneBalls})
        </Text>
      </View>
      <View style={styles.internalContainer}>
        <View style={styles.runsContainer}>
          <Text style={styles.playerRuns}>{runs}</Text>
        </View>
        <Text style={styles.playerRuns}>{ballsCount} Balls</Text>
      </View>
      <View style={styles.rightInternalContainer}>
        <Text style={styles.playerName}>{batsmanTwo?.name}</Text>
        <Text style={styles.playerRuns}>
          {batsmanTwoRuns}({batsmanTwoBalls})
        </Text>
      </View>
    </View>
  );
};
export default memo(PartnershipView);
