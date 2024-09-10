import {FC} from 'react';
import {View, Text, Image} from 'react-native';
import {BowlerViewProps} from '../../../../../../modelInterface/scoring';
import styles from './styles';

const BowlerView: FC<BowlerViewProps> = ({
  name,
  overs,
  medianOver,
  wickets,
  runs,
  economyRate,
  isSelected,
  currentStatus,
}) => {
  return (
    <View style={styles.renderItemView}>
      <View style={styles.playerParentContainer}>
        {name && (
          <View style={styles.playerContainer}>
            <Image
              resizeMode="contain"
              style={styles.playerImage}
              source={require('../../../../../../assets/images/user/user.png')}
            />
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              style={[
                styles.selectedPlayerName,
                isSelected && styles.selectedPlayerColor,
              ]}>
              {name}
            </Text>
          </View>
        )}
        {currentStatus ? (
          <Text numberOfLines={2} style={styles.playerStatus}>
            {currentStatus}
          </Text>
        ) : null}
      </View>
      <View style={styles.cardTextWrapper}>
        <Text style={styles.scoreText}>{overs || '0'}</Text>
        <Text style={styles.scoreText}>{medianOver || '0'}</Text>
        <Text style={styles.scoreText}>{wickets || '0'}</Text>
        <Text style={styles.scoreText}>{runs || '0'}</Text>
        <Text style={styles.scoreText}>{economyRate || '0'}</Text>
      </View>
    </View>
  );
};
export default BowlerView;
