import { FC, memo } from 'react';
import { View, Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { CommentaryiewProps } from '../../../modelInterface/views/commentary';
import GradientColor from '../../../theme/gradientColors';
import CommentaryBallsListView from '../ballsListView';
import styles from './styles';
const CommentaryView: FC<CommentaryiewProps> = ({
  commentaryBalls,
  overNumber,
  wicketsTaken,
  runs,
  accumulativeScore,
  accumulativeWickets,
  isAmateur
}) => {
  return (
    <>
      <CommentaryBallsListView data={commentaryBalls} isAmateur={isAmateur} />
      <LinearGradient
        colors={isAmateur ? GradientColor.amateurGradient : GradientColor.authenticationBtn}
        style={styles.itemContainer}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}>
        <View style={styles.primaryItemContainer}>
          <Text style={styles.title}>End of Over {overNumber + 1}</Text>
          <Text style={styles.description}>
            {runs || '0'} Runs {wicketsTaken || '0'} WC
          </Text>
        </View>
        <View style={styles.primaryItemContainer}>
          <Text style={styles.title}>
            {accumulativeScore || '0'} Runs {accumulativeWickets || '0'} WC
          </Text>
        </View>
      </LinearGradient>
    </>
  );
};
export default memo(CommentaryView);
