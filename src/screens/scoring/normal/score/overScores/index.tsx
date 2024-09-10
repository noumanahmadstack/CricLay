import { FC, useCallback, useRef, useEffect, useState } from 'react';
import { FlatList, View, Text, TouchableOpacity, Alert } from 'react-native';
import { BallObjProps } from '../../../../../modelInterface/scoring';
import { OverScoresProps } from '../../../../../modelInterface/screens/scoring';
import colors from '../../../../../theme/colors';
import styles from './styles';
import UpdateBall from './updateBall';
import { updateBallAction } from '../../../../../redux/scoring/normal/score/action';

const OverScores: FC<OverScoresProps> = ({ scoreInOver, ballsPerOver }) => {
  const flatListRef = useRef<FlatList>(null);
  const [isVisibleUpdateModal, setIsVisibleUpdateModal] = useState<boolean>(false);
  const [selectedBallNumber, setSelectedBallNumber] = useState<number>(0)
  const colorsForRuns = useCallback((item: BallObjProps) => {
    if (item.boundaryType == 'six') {
      return colors.fontOrange;
    } else if (item.boundaryType == 'four') {
      return colors.themeBlue;
    } else if (item.ballType == 'wicket') {
      return colors.darkRed;
    } else {
      return colors.gray;
    }
  }, []);
  const scoreHandling = useCallback((overs: BallObjProps) => {
    if (overs.extrasType == 'wide') {
      return `Wd${overs.runs == 1 ? '' : overs.runs - 1}`;
    } else if (overs.extrasType == 'no_ball') {
      if (overs.ballType == 'leg_bye') {
        return `${overs.runs - 1}L N`;
      } else if (overs.ballType == 'bye') {
        return `${overs.runs - 1}B N`;
      }
      return `Nb${overs.runs == 1 ? '' : overs.runs - 1}`;
    } else if (overs.extrasType == 'safe' && overs.ballType == 'bye') {
      return `B${overs.runs}`;
    } else if (overs.extrasType == 'safe' && overs.ballType == 'leg_bye') {
      return `LB${overs.runs}`;
    } else if (overs.wicketAttributes) {
      return 'W';
    } else {
      return overs.runs;
    }
  }, []);

  useEffect(() => {
    if (flatListRef.current) {
      flatListRef.current.scrollToEnd({ animated: true });
    }
  }, [scoreInOver]);
  const handleOnLongPress = (item: BallObjProps) => {
    if (item?.wicketAttributes && item.wicketAttributes !== null) {
      Alert.alert(
        'Warning',
        "You don't have access to edit wickets",
        [
          { text: 'Ok', onPress: () => console.log('Cancel Pressed'), },
        ],
        { cancelable: false }
      )
    } else if (item) {
      setIsVisibleUpdateModal(true)
      setSelectedBallNumber(item.ballNumber)
    }
  }
  return (
    <View style={styles.container}>
      <UpdateBall
        isVisible={isVisibleUpdateModal}
        onRequestClose={() => setIsVisibleUpdateModal(false)}
        ballData={scoreInOver.find((item) => item.ballNumber == selectedBallNumber)}
        onConfirm={updateBallAction}
      />
      <FlatList
        ref={flatListRef}
        data={scoreInOver}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
        ItemSeparatorComponent={() => <View style={styles.seprator} />}
        keyExtractor={({ ballNumber }) => ballNumber.toString()}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <TouchableOpacity activeOpacity={0.8} onLongPress={() => handleOnLongPress(item)}
              style={[
                styles.itemInternalContainer,
                { backgroundColor: colorsForRuns(item) },
              ]}>
              <Text style={styles.scoreText}>{scoreHandling(item)}</Text>
            </TouchableOpacity>
            {item.overBallsNumber == ballsPerOver &&
              item.ballType !== 'extra' && (
                <Text style={styles.hashText}>--</Text>
              )}
          </View>
        )}
      />
    </View>
  );
};
export default OverScores;
