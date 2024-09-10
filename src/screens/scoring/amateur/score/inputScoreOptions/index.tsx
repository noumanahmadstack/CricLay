import { FC, useState } from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { toastMessage } from '../../../../../components/toastMessages';
import { BallObjLocalProps } from '../../../../../modelInterface/scoring';
import { InputScoreOptionsProps } from '../../../../../modelInterface/screens/scoring';
import { WagonWheelForScorer } from '../wagonWheel/scorer';
import styles from './styles';
const InputScoreOptions: FC<InputScoreOptionsProps> = ({
  onRequestOpenWideCases,
  onRequestOpenNoBallCases,
  onRequestOpenByeCases,
  onRequestOpenLegByeCases,
  onRequestOpenNormalRunsCases,
  onPressScore,
  striker
}) => {
  const [isVisibleScoreCardModal, setIsVisibleScoreCardModal] = useState<boolean>(false);
  const ballInitialState: BallObjLocalProps = {
    key: '',
    value: '',
    runs: 0,
    ballType: 'normal'
  }
  const [selectedBall, setSelectedBall] = useState<BallObjLocalProps>(ballInitialState)
  const inputData: BallObjLocalProps[] = [
    {
      key: '0',
      value: '0',
      runs: 0,
      ballType: 'normal',
      boundaryType: 'safe',
      extrasType: 'safe',
    },
    {
      key: '1',
      value: '1',
      runs: 1,
      boundaryType: 'safe',
      ballType: 'normal',
      extrasType: 'safe',
    },
    {
      key: '2',
      value: '2',
      runs: 2,
      ballType: 'normal',
      boundaryType: 'safe',
      extrasType: 'safe',
    },
    {
      key: '3',
      value: '3',
      runs: 3,
      ballType: 'normal',
      boundaryType: 'safe',
      extrasType: 'safe',
    },
    {
      key: '4',
      value: '4',
      runs: 4,
      boundaryType: 'four',
      ballType: 'normal',
      extrasType: 'safe',
    },
    {
      key: '5',
      value: '5',
      runs: 5,
      ballType: 'normal',
      boundaryType: 'safe',
      extrasType: 'safe',
    },
    {
      key: '6',
      value: '6',
      runs: 6,
      boundaryType: 'six',
      ballType: 'normal',
      extrasType: 'safe',
    },
  ];
  const extraData = [
    {
      key: '0',
      value: 'Wide',
      action: onRequestOpenWideCases,
    },
    {
      key: '1',
      value: 'No Ball',
      action: onRequestOpenNoBallCases,
    },
    {
      key: '2',
      value: 'Bye',
      action: onRequestOpenByeCases,
    },
    {
      key: '3',
      value: 'Leg-Bye',
      action: onRequestOpenLegByeCases,
    },
    {
      key: '4',
      value: '4567',
      action: onRequestOpenNormalRunsCases,
    },
  ];
  const onHandlePressScore = (item: BallObjLocalProps | any) => {
    const strikerId = striker?.batsmanId
    if (strikerId == '' || strikerId == null) {
      toastMessage('Please select striker player');
      return;
    } else {
      if (item.ballType == 'normal' && item.runs > 0) {
        setSelectedBall(item)
        setIsVisibleScoreCardModal(true)
      } else {
        onPressScore(item)
      }
    }
  };
  return (
    <View>
      <WagonWheelForScorer
        visible={isVisibleScoreCardModal}
        batter={striker}
        runs={selectedBall?.runs}
        onRequestClose={() => { setIsVisibleScoreCardModal(false), setSelectedBall(ballInitialState) }}
        onSkip={() => { onPressScore(selectedBall), setIsVisibleScoreCardModal(false), setSelectedBall(ballInitialState) }}
        onConfirm={(data) => {
          setIsVisibleScoreCardModal(false),
            onPressScore({ ...selectedBall, ...data }),
            setSelectedBall(ballInitialState)
        }}
      />
      <FlatList
        data={inputData}
        ItemSeparatorComponent={() => <View style={styles.seprator} />}
        numColumns={7}
        columnWrapperStyle={styles.columnWrapperStyle}
        keyExtractor={({ key }) => key}
        renderItem={({ item }) => (
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => onHandlePressScore(item)}
            style={styles.inputBtnContainer}>
            <Text style={styles.title}>{item.value}</Text>
          </TouchableOpacity>
        )}
        ListFooterComponent={
          <FlatList
            data={extraData}
            numColumns={4}
            ItemSeparatorComponent={() => <View style={styles.seprator} />}
            columnWrapperStyle={styles.extraColumnWrapper}
            renderItem={({ item }) => (
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => { item.action ? item.action() : onHandlePressScore(item) }}
                style={styles.extraBtnContainer}>
                <Text style={styles.extrasTitle}>{item.value}</Text>
              </TouchableOpacity>
            )}
          />
        }
      />
    </View>
  );
};
export default InputScoreOptions;