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
import { BallObjLocalProps, BallObjProps } from '../../../../../../modelInterface/scoring';
import {
  OutOptionsOnConfirmProps,
} from '../../../../../../modelInterface/screens/scoring';
import { handleScore } from '../../../../../../redux/scoring/amateur/score/action';
import { RootState } from '../../../../../../redux/store/store';
import { goBack } from '../../../../../../routes/rootNavigation';
import ModalForOut from '../modal';
import styles from './styles';
const OutOptionsAmateur: FC<any> = ({ route }) => {
  const { loneSurvivor } = route.params || {}
  const [isOpenOutModal, setIsOpenOutModal] = useState<boolean>(false);
  const { matchDetail, lineupData } = useSelector(
    (state: RootState) => state.amateurScoreReducer,
  );
  const { currentInning } = matchDetail
  const { id: inningId } = currentInning
  const [selectedBall, setselectedBall] =
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

  const outCase: BallObjProps = {
    runs: 0,
    ballType: 'wicket',
    extrasType: 'safe',
    boundaryType: 'safe',
    wicketAttributes: {
      inningId: currentInning.id,
      wicketType: '',
      playerOutId: '',
      fielderId: '',
    },
    inningId: '',
    overBallsNumber: 0,
    overNumber: 0,
    batsmanId: '',
    bowlerId: '',
    nonStrikerId: '',
    ballNumber: 0
  };
  const outTypes: BallObjLocalProps[] = [
    {
      key: '0',
      Icon: BowledSvg,
      value: 'Bowled',
      ...outCase,
      wicketAttributes: {
        inningId,
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
        inningId,
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
        inningId,
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
        inningId,
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
        inningId,
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
        inningId,
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
        inningId,
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
        inningId,
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
        inningId,
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
        inningId,
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
        inningId,
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
        inningId,
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
        inningId,
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
        inningId,
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
        inningId,
        wicketType: 'retired_out',
        playerOutId: lineupData.strikerId,
      },
    },
    {
      key: '15',
      value: 'Retired',
      Icon: RetiredOutIcon,
      ...outCase,
      wicketAttributes: {
        inningId,
        wicketType: 'retired',
        playerOutId: lineupData.strikerId,
      },
    },
    {
      key: '16',
      value: 'Dual Dismissal',
      Icon: CaughtBowledSvg,
      ...outCase,
      wicketAttributes: {
        inningId,
        wicketType: 'catch',
        playerOutId: lineupData.strikerId,
      },
      secondaryWicketAttributes: {
        inningId,
        wicketType: 'run_out',
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
    nonStriker
  }: OutOptionsOnConfirmProps) => {
    if (selectedBall?.wicketAttributes?.wicketType) {
      const ball: BallObjLocalProps = {
        ...selectedBall,
        runs: runs ? runs : 0,
        extrasType,
        ballType,
        wicketAttributes: {
          ...selectedBall.wicketAttributes,
          playerOutId: batter.batsmanId,
          fielderId: fielder.bowlerId,
        },
      };
      if (selectedBall.secondaryWicketAttributes && nonStriker) {
        ball.secondaryWicketAttributes = {
          ...selectedBall.secondaryWicketAttributes,
          playerOutId: nonStriker.batsmanId,
          fielderId: fielder.bowlerId,
        }
      }      
      handleScore({ ball, currentInning, lineupData, loneSurvivor });
      setIsOpenOutModal(false);
      goBack();
    }
  };
  return (
    <SimpleScreenContainer isBlue={true}>
      <ModalForOut
        isVisible={isOpenOutModal}
        headerTitle={selectedBall?.value}
        selectedBall={selectedBall}
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
              setselectedBall(item),
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
export default OutOptionsAmateur;