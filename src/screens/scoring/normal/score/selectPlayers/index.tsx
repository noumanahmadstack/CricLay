import {FC} from 'react';
import {View, Text} from 'react-native';
import GradientBtn from '../../../../../components/btns/gradientBtn';
import {SelectPlayersProps} from '../../../../../modelInterface/screens/scoring';
import styles from './styles';
const SelectPlayers: FC<SelectPlayersProps> = ({
  batsmanLength,
  isSelectedBowler,
  onPressBatsman,
  onPressBowler,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Select Players</Text>
      <View style={styles.internalContainer}>
        {batsmanLength < 2 ? (
          <GradientBtn
            btnStyle={styles.btnStyle}
            title="Batter"
            onPress={onPressBatsman}
          />
        ) : null}
        {isSelectedBowler ? (
          <GradientBtn
            btnStyle={styles.btnStyle}
            title="Bowler"
            onPress={onPressBowler}
          />
        ) : null}
      </View>
    </View>
  );
};
export default SelectPlayers;
