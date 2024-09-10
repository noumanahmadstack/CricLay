import { FC } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { BatterViewProps } from '../../../../../../modelInterface/scoring';
import styles from './styles';

const BatterView: FC<BatterViewProps> = ({
  disableTouch,
  name,
  isStriker,
  isOut,
  runs,
  ballCount,
  fours,
  sixes,
  strikerRate,
  currentStatus,
  onSelect,
  onLongPress,
}) => {
  return (
    <View style={styles.renderItemView}>
      <View style={styles.playerParentContainer}>
        <TouchableOpacity
          activeOpacity={0.5}
          disabled={disableTouch}
          onPress={onSelect}
          onLongPress={onLongPress}
          style={styles.playerContainer}>
          <Image
            resizeMode="contain"
            style={styles.playerImage}
            source={require('../../../../../../assets/images/user/user.png')}
          />
          <Text
            numberOfLines={2}
            style={[styles.playerName, isStriker && styles.selectedPlayerName]}>
            {name}
            {isStriker && '*'}
          </Text>
        </TouchableOpacity>
        {currentStatus ? (
          <Text
            numberOfLines={2}
            style={[styles.wicketType, isOut && styles.wicketTypeBlack]}>
            {currentStatus}
          </Text>
        ) : null}
      </View>
      <View style={styles.cardTextWrapper}>
        <Text style={styles.scoreText}>{runs || '0'}</Text>
        <Text style={styles.scoreText}>{ballCount || '0'}</Text>
        <Text style={styles.scoreText}>{fours || '0'}</Text>
        <Text style={styles.scoreText}>{sixes || '0'}</Text>
        <Text style={styles.scoreText}>{strikerRate || '0'}</Text>
      </View>
    </View>
  );
};
export default BatterView;
