import { FC, useMemo } from 'react';
import { Text, View } from 'react-native';
import { BallObjProps } from '../../../modelInterface/scoring';
import styles from './styles';
import {
  scoreAndOutHelper,
} from '../../../redux/matches/matchDetails/action';

const CommentaryBallsView: FC<BallObjProps> = data => {
  const { commentaryMessage} = data
  const scoreHelper = useMemo(() => {
    return scoreAndOutHelper(data);
  }, [data]);
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.overBallNumber}>
        {data.overNumber}.{data.overBallsNumber}
      </Text>
      <View style={styles.scoresContainer}>
        <Text style={styles.overBallNumber}>{scoreHelper}</Text>
      </View>
      <Text style={styles.commentary}>{commentaryMessage}</Text>
    </View>
  );
};
export default CommentaryBallsView;
