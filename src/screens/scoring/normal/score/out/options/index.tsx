import { FC, useState } from 'react';
import { FlatList, Text, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import {
  AbsentOutSvg,
  BowledSvg,
  CatchSvg,
  CaughtBehindSvg,
  CaughtBowledSvg,
  HitBallTwiceOutSvg,
  HitWicketSvg,
  LBWSvg,
  ManKadedIcon,
  ObstractingeOutSvg,
  RetiredOutIcon,
  RetiredOutSvg,
  RunOutSvg,
  StumpSvg,
  TimeOutSvg,
} from '../../../../../../assets/svg';
import { SimpleScreenContainer } from '../../../../../../components/screensContainers/screenContainers';
import { BallObjLocalProps } from '../../../../../../modelInterface/scoring';
import {
  OutOptionsOnConfirmProps,
  OutOptionsProps,
} from '../../../../../../modelInterface/screens/scoring';
import { handleScore } from '../../../../../../redux/scoring/normal/score/action';
import { RootState } from '../../../../../../redux/store/store';
import { goBack } from '../../../../../../routes/rootNavigation';
import ModalForOut from '../modal';
import styles from './styles';
const OutOptions: FC<OutOptionsProps> = ({ }) => {
  const [isOpenOutModal, setIsOpenOutModal] = useState<boolean>(false);
  const { matchDetail, lineupData } = useSelector(
    (state: RootState) => state.scoreReducer,
  );
  const { currentInning } = matchDetail
  const [selectedWicketType, setSelectedWicketType] =
    useState<BallObjLocalProps>({
      key: '',
      value: '',
      runs: 0,
      ballType: '',
      extrasType: '',
      boundaryType: '',
      wicketAttributes: {
        inningId: '',
        wicketType: '', // [bowled catch catch_behind catch_bowled stumped run_out man_kaded lbw hit_wicket retired_hurt absent_hurt retired hit_the_ball_twice obstructing_the_field timed_out]
        playerOutId: '',
        fielderId: '',
      },
    });

  const outCase = {
    runs: 0,
    ballType: 'wicket',
    extrasType: 'safe',
    boundaryType: 'safe',
    wicketAttributes: {
      inningId: currentInning.id,
      wicketType: '', // [bowled catch catch_behind catch_bowled stumped run_out man_kaded lbw hit_wicket retired_hurt absent_hurt retired hit_the_ball_twice obstructing_the_field timed_out]
      playerOutId: '',
      fielderId: '',
    },
  };
  const outTypes: BallObjLocalProps[] | any = [
    {
      key: '0',
      Icon: BowledSvg,
      value: 'Bowled',
      ...outCase,
      wicketAttributes: {
        ...outCase.wicketAttributes,
        wicketType: 'bowled',
        playerOutId: lineupData.strikerId,
      },
    },
    {
      key: '1',
      value: 'Catch',
      Icon: CatchSvg,
      ...outCase,
      wicketAttributes: {
        ...outCase.wicketAttributes,
        wicketType: 'catch',
        playerOutId: lineupData.strikerId,
      },
    },
    {
      key: '2',
      value: 'Caught Behind',
      Icon: CaughtBehindSvg,
      ...outCase,
      wicketAttributes: {
        ...outCase.wicketAttributes,
        wicketType: 'catch_behind',
        playerOutId: lineupData.strikerId,
      },
    },
    {
      key: '3',
      value: 'Caught & Bowled',
      Icon: CaughtBowledSvg,
      ...outCase,
      wicketAttributes: {
        ...outCase.wicketAttributes,
        wicketType: 'catch_bowled',
        playerOutId: lineupData.strikerId,
      },
    },
    {
      key: '4',
      value: 'Stumped',
      Icon: StumpSvg,
      ...outCase,
      wicketAttributes: {
        ...outCase.wicketAttributes,
        wicketType: 'stumped',
        playerOutId: lineupData.strikerId,
      },
    },
    {
      key: '5',
      value: 'Run Out',
      Icon: RunOutSvg,
      ...outCase,
      wicketAttributes: {
        ...outCase.wicketAttributes,
        wicketType: 'run_out',
        playerOutId: lineupData.strikerId,
      },
    },
    {
      key: '6',
      value: 'LBW',
      Icon: LBWSvg,
      ...outCase,
      wicketAttributes: {
        ...outCase.wicketAttributes,
        wicketType: 'lbw',
        playerOutId: lineupData.strikerId,
      },
    },
    {
      key: '7',
      value: 'Hit Wicket',
      Icon: HitWicketSvg,
      ...outCase,
      wicketAttributes: {
        ...outCase.wicketAttributes,
        wicketType: 'hit_wicket',
        playerOutId: lineupData.strikerId,
      },
    },
    {
      key: '8',
      value: 'Retired Hurt',
      Icon: RetiredOutSvg,
      ...outCase,
      wicketAttributes: {
        ...outCase.wicketAttributes,
        wicketType: 'retired_hurt',
        playerOutId: lineupData.strikerId,
      },
    },
    {
      key: '9',
      value: 'Absent Hurt',
      Icon: AbsentOutSvg,
      ...outCase,
      wicketAttributes: {
        ...outCase.wicketAttributes,
        wicketType: 'absent_hurt',
        playerOutId: lineupData.strikerId,
      },
    },
    {
      key: '10',
      value: 'Hit the ball twice',
      Icon: HitBallTwiceOutSvg,
      ...outCase,
      wicketAttributes: {
        ...outCase.wicketAttributes,
        wicketType: 'hit_the_ball_twice',
        playerOutId: lineupData.strikerId,
      },
    },
    {
      key: '11',
      value: 'Obstructing the field',
      Icon: ObstractingeOutSvg,
      ...outCase,
      wicketAttributes: {
        ...outCase.wicketAttributes,
        wicketType: 'obstructing_the_field',
        playerOutId: lineupData.strikerId,
      },
    },
    {
      key: '12',
      value: 'Timed Out',
      Icon: TimeOutSvg,
      ...outCase,
      wicketAttributes: {
        ...outCase.wicketAttributes,
        wicketType: 'timed_out',
        playerOutId: lineupData.strikerId,
      },
    },
    {
      key: '13',
      value: 'Man Kaded',
      Icon: ManKadedIcon,
      ...outCase,
      wicketAttributes: {
        ...outCase.wicketAttributes,
        wicketType: 'man_kaded',
        playerOutId: lineupData.strikerId,
      },
    },
    {
      key: '14',
      value: 'Retired Out',
      Icon: RetiredOutIcon,
      ...outCase,
      wicketAttributes: {
        ...outCase.wicketAttributes,
        wicketType: 'retired_out',
        playerOutId: lineupData.strikerId,
      },
    },
  ];
  const handleOnConfirmForOut = async ({
    batter,
    fielder,
    runs,
    extrasType,
    ballType,
  }: OutOptionsOnConfirmProps) => {
    if (selectedWicketType?.wicketAttributes?.wicketType) {
      const outData: BallObjLocalProps = {
        ...selectedWicketType,
        runs: runs ? runs : 0,
        extrasType,
        ballType,
        wicketAttributes: {
          ...selectedWicketType.wicketAttributes,
          playerOutId: batter.batsmanId,
          fielderId: fielder.bowlerId,
        },
      };
      handleScore(outData);
      setIsOpenOutModal(false);
      goBack();
    }
  };
  return (
    <SimpleScreenContainer isBlue={true}>
      <ModalForOut
        isVisible={isOpenOutModal}
        headerTitle={selectedWicketType?.value}
        wicketType={selectedWicketType.wicketAttributes?.wicketType}
        onRequestClose={() => setIsOpenOutModal(false)}
        onConfirm={handleOnConfirmForOut}
      />
      <FlatList
        data={outTypes}
        keyExtractor={({ key }) => key}
        numColumns={3}
        contentContainerStyle={styles.contentContainerStyle}
        renderItem={({ item }) => (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => {
              setSelectedWicketType(item),
                setIsOpenOutModal(true);
            }}
            style={styles.itemContainer}>
            {item?.Icon && <item.Icon />}
            <Text style={styles.title}>{item.value}</Text>
          </TouchableOpacity>
        )}
      />
    </SimpleScreenContainer>
  );
};
export default OutOptions;
