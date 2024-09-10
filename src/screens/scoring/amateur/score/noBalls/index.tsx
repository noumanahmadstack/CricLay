import { FC, useState } from 'react';
import {
  FlatList,
  Modal,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import ModalHeader from '../../../../../components/modalHeader';
import { BallObjLocalProps, BallType } from '../../../../../modelInterface/scoring';
import { WideOptionsModalProps } from '../../../../../modelInterface/screens/scoring';
import styles from './styles';
const NoBallCases: FC<WideOptionsModalProps> = ({
  isVisible,
  onConfirm,
  onRequestClose,
}) => {
  const [contentType, setContentType] = useState<BallType | 'normalBall'>('');
  const byeData: BallObjLocalProps[] = [
    {
      key: '0',
      value: '1 B',
      runs: 2,
      ballType: 'bye',
      extrasType: 'no_ball',
    },
    {
      key: '1',
      value: '2 B',
      runs: 3,
      ballType: 'bye',
      extrasType: 'no_ball',
    },
    {
      key: '2',
      value: '3 B',
      runs: 4,
      ballType: 'bye',
      extrasType: 'no_ball',
    },
    {
      key: '3',
      value: '4 B',
      boundaryType: 'four',
      runs: 5,
      ballType: 'bye',
      extrasType: 'no_ball',
    },
    {
      key: '4',
      value: '5 B',
      runs: 6,
      ballType: 'bye',
      extrasType: 'no_ball',
    },
    {
      key: '6',
      value: '6 B',
      boundaryType: 'six',
      runs: 7,
      ballType: 'bye',
      extrasType: 'no_ball',
    },
    {
      key: '6',
      value: '7 B',
      runs: 8,
      ballType: 'bye',
      extrasType: 'no_ball',
    },
  ];
  const legByeData: BallObjLocalProps[] = [
    {
      key: '0',
      value: '1 LB',
      runs: 2,
      ballType: 'leg_bye',
      extrasType: 'no_ball',
    },
    {
      key: '1',
      value: '2 LB',
      runs: 3,
      ballType: 'leg_bye',
      extrasType: 'no_ball',
    },
    {
      key: '2',
      value: '3 LB',
      runs: 4,
      ballType: 'leg_bye',
      extrasType: 'no_ball',
    },
    {
      key: '3',
      value: '4 LB',
      boundaryType: 'four',
      runs: 5,
      ballType: 'leg_bye',
      extrasType: 'no_ball',
    },
    {
      key: '4',
      value: '5 LB',
      runs: 6,
      ballType: 'leg_bye',
      extrasType: 'no_ball',
    },
    {
      key: '6',
      value: '6 LB',
      boundaryType: 'six',
      runs: 7,
      ballType: 'leg_bye',
      extrasType: 'no_ball',
    },
    {
      key: '6',
      value: '7 LB',
      runs: 8,
      ballType: 'leg_bye',
      extrasType: 'no_ball',
    },
  ];
  const extraData: BallObjLocalProps[] | any = [
    {
      key: '0',
      value: 'No Ball',
      runs: 1,
      ballType: 'extra',
      extrasType: 'no_ball',
    },
    {
      key: '1',
      value: 'Nb+1',
      runs: 2,
      ballType: 'extra',
      extrasType: 'no_ball',
    },
    {
      key: '2',
      value: 'Nb+2',
      runs: 3,
      ballType: 'extra',
      extrasType: 'no_ball',
    },
    {
      key: '3',
      value: 'Nb+3',
      runs: 4,
      ballType: 'extra',
      extrasType: 'no_ball',
    },
    {
      key: '4',
      value: 'Nb+4',
      boundaryType: 'four',
      runs: 5,
      ballType: 'extra',
      extrasType: 'no_ball',
    },
    {
      key: '6',
      value: 'Nb+5',
      runs: 6,
      ballType: 'extra',
      extrasType: 'no_ball',
    },
    {
      key: '6',
      value: 'Nb+6',
      boundaryType: 'six',
      runs: 7,
      ballType: 'extra',
      extrasType: 'no_ball',
    },
    {
      key: '7',
      value: 'Bye',
      action: () => setContentType('bye'),
      ballType: 'extra',
      extrasType: 'no_ball',
    },
    {
      key: '8',
      value: 'Leg-Bye',
      action: () => setContentType('leg_bye'),
      ballType: 'extra',
      extrasType: 'no_ball',
    },
    {
      key: '9',
      value: '4 5 6 7',
      action: () => setContentType('normalBall'),
      ballType: 'extra',
      extrasType: 'no_ball',
    },
  ];

  const normalData: BallObjLocalProps[] = [
    {
      key: '0',
      value: '4',
      runs: 4,
      ballType: 'normal',
      boundaryType: 'safe',
      extrasType: 'safe',
    },
    {
      key: '1',
      value: '5',
      runs: 5,
      boundaryType: 'safe',
      ballType: 'normal',
      extrasType: 'safe',
    },
    {
      key: '2',
      value: '6',
      runs: 6,
      ballType: 'normal',
      boundaryType: 'safe',
      extrasType: 'safe',
    },
    {
      key: '3',
      value: '7',
      runs: 7,
      ballType: 'normal',
      boundaryType: 'safe',
      extrasType: 'safe',
    },
    {
      key: '4',
      value: '8',
      runs: 8,
      boundaryType: 'safe',
      ballType: 'normal',
      extrasType: 'safe',
    },
    {
      key: '5',
      value: '9',
      runs: 9,
      ballType: 'normal',
      boundaryType: 'safe',
      extrasType: 'safe',
    },
    {
      key: '6',
      value: '10',
      runs: 10,
      boundaryType: 'safe',
      ballType: 'normal',
      extrasType: 'safe',
    },
    {
      key: '7',
      value: '11',
      runs: 11,
      boundaryType: 'safe',
      ballType: 'normal',
      extrasType: 'safe',
    },
    {
      key: '8',
      value: '12',
      runs: 12,
      boundaryType: 'safe',
      ballType: 'normal',
      extrasType: 'safe',
    },
    {
      key: '9',
      value: '13',
      runs: 13,
      boundaryType: 'safe',
      ballType: 'normal',
      extrasType: 'safe',
    },
  ];
  const onHandleClose = () => {
    if (onRequestClose) {
      onRequestClose();
    }
  };
  const handleOnConfirm = (data: BallObjLocalProps) => {
    if (onConfirm) {
      onConfirm(data);
    }
    setContentType('');
    onRequestClose();
  };
  return (
    <Modal
      visible={isVisible}
      transparent={true}
      animationType="fade"
      onRequestClose={onHandleClose}>
      <View style={styles.container}>
        <SafeAreaView style={styles.mainContainer}>
          <View style={styles.internalContainer}>
            <ModalHeader
              isAmateur={true}
              title={'No Ball cases'}
              onCancel={onHandleClose}
              onBack={contentType ? () => setContentType('') : undefined}
            />
            <FlatList
              data={
                contentType == 'bye'
                  ? byeData
                  : contentType == 'leg_bye'
                    ? legByeData
                    : contentType == 'normalBall'
                      ? normalData
                      : extraData
              }
              keyExtractor={({ key }) => key}
              numColumns={3}
              contentContainerStyle={styles.contentContainerStyle}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() =>
                    item?.action ? item?.action() : handleOnConfirm(item)
                  }
                  style={styles.itemContainer}>
                  <Text style={styles.title}>{item.value}</Text>
                </TouchableOpacity>
              )}
            />
          </View>
        </SafeAreaView>
      </View>
    </Modal>
  );
};
export default NoBallCases;
