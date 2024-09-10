import { FC, useCallback, useRef, useEffect, useState } from 'react';
import { FlatList, View, Text, TouchableOpacity, Alert } from 'react-native';
import { BallObjProps } from '../../../../../modelInterface/scoring';
import { OverScoresProps } from '../../../../../modelInterface/screens/scoring';
import colors from '../../../../../theme/colors';
import styles from './styles';
import UpdateBall from './updateBall';
import { updateBallAction } from '../../../../../redux/scoring/amateur/score/action';

const OverScores: FC<OverScoresProps> = ({ scoreInOver, ballsPerOver, totalOvers }) => {
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
  const scoreHandling = useCallback((overs: BallObjProps, indexes: number) => {
    let extraCount = 0;
    for (let i = 0; i <= indexes; i++) {
      const item = scoreInOver[i];
      if (item.overNumber === overs.overNumber && item.extrasType !== "safe") {
        extraCount++;
      }
    }
    const lastOver = overs?.overNumber
    const extraCountability = extraCount > 1 ? (lastOver == totalOvers - 1 ? 2 : 4) : 2;
    const wicketType = overs.wicketAttributes?.wicketType == "retired" ? "RT" : overs.secondaryWicketAttributes ? "DD" : overs.wicketAttributes ? "W" : ""
    const showAddSymbol = wicketType ? ' + ' : ''
    if (overs.extrasType == 'wide') {
      return `WD${extraCountability}` + (extraCountability > overs.runs ? "" : ((overs.runs - extraCountability) ? ` + ${overs.runs - extraCountability}` : "") + `${showAddSymbol}${wicketType}`);
    } else if (overs.extrasType == 'no_ball') {
      if (overs.ballType == 'leg_bye') {
        return `NB${extraCountability}` + (extraCountability > overs.runs ? "" : ((overs.runs - extraCountability) ? ` + L${overs.runs - extraCountability}` : "") + `${showAddSymbol}${wicketType}`);
      } else if (overs.ballType == 'bye') {
        return `NB${extraCountability}` + (extraCountability > overs.runs ? "" : ((overs.runs - extraCountability) ? ` + B${overs.runs - extraCountability}` : "") + `${showAddSymbol}${wicketType}`);
      }
      return `NB${extraCountability}` + (extraCountability > overs.runs ? "" : ((overs.runs - extraCountability) ? ` + ${overs.runs - extraCountability}` : "") + `${showAddSymbol}${wicketType}`);
    } else if (overs.extrasType == 'safe' && overs.ballType == 'bye') {
      return `B${overs.runs}` + `${showAddSymbol}${wicketType}`;
    } else if (overs.extrasType == 'safe' && overs.ballType == 'leg_bye') {
      return `LB${overs.runs}` + `${showAddSymbol}${wicketType}`;
    } else if (overs.wicketAttributes) {
      return wicketType
    } else {
      return overs.runs;
    }
  }, [scoreInOver]);
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
        isAmateur={true}
      />
      <FlatList
        ref={flatListRef}
        data={scoreInOver}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contentContainer}
        ItemSeparatorComponent={() => <View style={styles.seprator} />}
        keyExtractor={({ ballNumber }) => ballNumber.toString()}
        renderItem={({ item, index }) => (
          <View style={styles.itemContainer}>
            <TouchableOpacity activeOpacity={0.8} onLongPress={() => handleOnLongPress(item)}
              style={[
                styles.itemInternalContainer,
                { backgroundColor: colorsForRuns(item) },
              ]}>
              <Text style={styles.scoreText}>{scoreHandling(item, index)}</Text>
            </TouchableOpacity>
            {item.overBallsNumber == ballsPerOver &&
              (
                <Text style={styles.hashText}>--</Text>
              )}
          </View>
        )}
      />
    </View>
  );
};
export default OverScores;
