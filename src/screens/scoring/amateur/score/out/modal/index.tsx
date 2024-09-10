import { FC, useEffect, useMemo, useState } from 'react';
import {
  Modal,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
import { useSelector } from 'react-redux';
import SimpleBtn from '../../../../../../components/btns/simpleBtn';
import FormInput from '../../../../../../components/formInput';
import ModalHeader from '../../../../../../components/modalHeader';
import {
  BallType,
  BatterStatsAttributesProps,
  BowlerStatsAttributesProps,
  ExtrasType,
  SelectPlayerDataProps,
  Wicketstype,
} from '../../../../../../modelInterface/scoring';
import { OutOptionsModalProps } from '../../../../../../modelInterface/screens/scoring';
import { RootState } from '../../../../../../redux/store/store';
import colors from '../../../../../../theme/colors';
import PlayersListView from '../../../../../../views/players/playersListView';
import SelectFielderOpt from './selectFielderOpt';
import styles from './styles';
const ModalForOut: FC<OutOptionsModalProps> = ({
  isVisible,
  headerTitle,
  selectedBall,
  onConfirm,
  onRequestClose,
}) => {
  const { wicketType } = selectedBall?.wicketAttributes || {}
  const { wicketType: secondaryWicketType } = selectedBall?.secondaryWicketAttributes || {}
  const { isLoading, bowlerPlaying } = useSelector(
    (state: RootState) => state.teamPlayerReducer,
  );
  const { batterData, strikerId, bowlingData, nonStrikerId } = useSelector(
    (state: RootState) => state.amateurScoreReducer.lineupData,
  );
  const [isBattingTeam, setIsBattingTeam] = useState<boolean>(false);
  const [ballType, setBallType] = useState<BallType>('wicket');
  const [extraType, setExtraType] = useState<ExtrasType>('safe');
  const [score, setScore] = useState<string>('');
  const [batter, setBatter] = useState<any>({});
  const [nonStriker, setNonStriker] = useState<BatterStatsAttributesProps>({ id: '', name: '', batsmanId: '' });
  const [fielder, setFielder] = useState<BowlerStatsAttributesProps>({ id: '', name: '', bowlerId: '' });
  const [isOpenMatchPlayer, setIsOpenMatchPlayer] = useState<boolean>(false);
  const data = isBattingTeam ? batterData : bowlerPlaying;
  const validStrikerWicketTypes = useMemo<Wicketstype[]>(
    () => [
      'bowled',
      'catch',
      'catch_behind',
      'catch_bowled',
      'stumped',
      'lbw',
      'hit_the_ball_twice',
      'man_kaded',
    ],
    [],
  );
  const extrasType = useMemo<ExtrasType[]>(
    () => [
      'no_ball',
      'wide'
    ],
    [],
  );
  const validShowFielderTypes = useMemo<Wicketstype[]>(
    () => [
      'catch',
      'catch_behind',
      'catch_bowled',
      'stumped',
      'run_out',
      'man_kaded',
    ],
    [],
  );
  const validShowRunsTypes = useMemo<boolean>(() => (wicketType == "catch" || wicketType == "run_out") && !!!secondaryWicketType, [wicketType]);
  // this is for the reset states when modal is open or closed
  useEffect(() => {
    setIsBattingTeam(false);
    setScore('');
    setBatter({});
    setNonStriker({ name: '', id: '', batsmanId: '' });
    setFielder({ name: '', id: '', bowlerId: '' });
    setIsOpenMatchPlayer(false);
    setBallType('wicket');
    setExtraType('safe');
  }, [isVisible]);
  const onHandleClose = () => {
    if (onRequestClose) {
      onRequestClose();
    }
  };
  const handleOnConfirm = () => {
    if (onConfirm) {
      onConfirm({
        batter,
        fielder,
        runs: extraType == 'no_ball' || extraType == 'wide' ? (Number(score) + 1) : Number(score),
        ballType,
        nonStriker,
        extrasType: extraType,
      });
    }
    onRequestClose();
  };
  const handleOnSelectOpt = ({ isBatting }: { isBatting: boolean }) => {
    setIsBattingTeam(isBatting);
    setIsOpenMatchPlayer(true);
  };
  const handleOnSelectPlayer = (data: SelectPlayerDataProps) => {
    setIsOpenMatchPlayer(false);
    if (isBattingTeam) {
      setBatter(data);
    } else {
      setFielder(data as BowlerStatsAttributesProps);
    }
  };

  useEffect(() => {
    if (wicketType && validStrikerWicketTypes.includes(wicketType)) {
      setBatter(batterData.find(item => item.batsmanId == (wicketType == 'man_kaded' ? nonStrikerId : strikerId)));
      if (secondaryWicketType) {
        setNonStriker(batterData.find(item => item.batsmanId == nonStrikerId) || { name: '', id: '', batsmanId: '' });
      }
    } else {
      setBatter({});
      setNonStriker({ id: '', name: '', batsmanId: '' })
    }
    if (wicketType == 'catch_bowled' || wicketType == 'man_kaded') {
      setFielder(bowlingData);
    }
    else {
      setFielder({ id: '', name: '', bowlerId: '' })
    }
  }, [
    wicketType,
    isVisible,
    batterData,
    bowlingData,
    strikerId,
    validStrikerWicketTypes,
  ]);
  const showFielder = useMemo<boolean>(() => {
    if (wicketType && validShowFielderTypes.includes(wicketType)) {
      return true;
    }
    return false;
  }, [wicketType, validShowFielderTypes]);
  const disableOut = (): boolean => {
    const fielderCheck = showFielder ? !!fielder?.name : true;
    if (!!batter?.name && fielderCheck) {
      return false;
    }
    return true;
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
              title={isOpenMatchPlayer ? 'Select Player' : headerTitle}
              onCancel={onHandleClose}
              isAmateur={true}
              onBack={
                isOpenMatchPlayer
                  ? () => {
                    setIsOpenMatchPlayer(false);
                  }
                  : undefined
              }
            />
            {!isOpenMatchPlayer ? (
              <>
                {validShowRunsTypes && (
                  <FormInput
                    title="Runs"
                    placeholder="Enter runs (optional)"
                    containerStyle={styles.inputContainer}
                    onChangeText={setScore}
                    value={score}
                  />
                )}
                <SelectFielderOpt
                  title={`Select Batter ${secondaryWicketType ? '(Catch)' : ''}`}
                  name={batter?.name}
                  disabled={wicketType
                    ? validStrikerWicketTypes.includes(wicketType)
                    : false}
                  onPress={() => handleOnSelectOpt({ isBatting: true })}
                />
                {secondaryWicketType &&
                  <SelectFielderOpt
                    title={`Select Batter ${secondaryWicketType ? '(Run out)' : ''}`}
                    name={nonStriker?.name}
                    disabled={true}
                    onPress={() => handleOnSelectOpt({ isBatting: true })}
                  />
                }
                {showFielder && (
                  <SelectFielderOpt
                    title={`Select Fielder`}
                    name={fielder?.name}
                    onPress={() => handleOnSelectOpt({ isBatting: false })}
                  />
                )}
                <View style={styles.matchPlayerContainer}>
                  {wicketType == "run_out" ?
                    <>
                      {/* <Text style={styles.outTitle}>Is that a byes or leg bye? (optional)</Text>
                      <View style={styles.extraTypeBtnsContainer}>
                        {ballsType.map((item) =>
                          <SimpleBtn
                            key={item}
                            title={item}
                            titleColor={ballType == item ? colors.white : colors.fontBlack}
                            containerStyle={[styles.extraTypeBtnContainer, ballType == item && styles.selectedExtraType]}
                            onPress={() => setBallType((prevState) => {
                              if (prevState == item) {
                                return 'wicket'
                              }
                              return item
                            })}
                          />
                        )}
                      </View> */}
                      <Text style={styles.outTitle}>Is that a nonball or wide? (optional)</Text>
                      <View style={styles.extraTypeBtnsContainer}>
                        {extrasType.map((item) =>
                          <SimpleBtn
                            key={item}
                            title={item}
                            titleColor={extraType == item ? colors.white : colors.fontBlack}
                            containerStyle={[styles.extraTypeBtnContainer, extraType == item && styles.selectedExtraType]}
                            onPress={() => setExtraType((prevState) => {
                              if (prevState == item) {
                                return 'safe'
                              }
                              return item
                            })}
                          />
                        )}
                      </View>
                    </>
                    :
                    wicketType == 'stumped' ?
                      <>
                        <Text style={styles.outTitle}>Is that a wide? (optional)</Text>
                        <SimpleBtn
                          title={'Wide'}
                          titleColor={extraType == 'wide' ? colors.white : colors.fontBlack}
                          containerStyle={[styles.extraTypeBtnContainer, extraType == 'wide' && styles.selectedExtraType]}
                          onPress={() => setExtraType((prevState) => {
                            if (prevState == 'wide') {
                              return 'safe'
                            }
                            return 'wide'
                          })}
                        />
                      </>
                      : null
                  }
                </View>
                <View style={styles.btnContainer}>
                  <SimpleBtn
                    title="Cancel"
                    containerStyle={styles.btnStyle}
                    titleColor={colors.fontBlack}
                    onPress={onHandleClose}
                  />
                  <SimpleBtn
                    title={wicketType == "retired" ? "Retire" : "Out"}
                    onPress={handleOnConfirm}
                    titleColor={colors.white}
                    containerStyle={styles.outBtnStyle}
                    disabled={disableOut()}
                  />
                </View>
              </>
            ) : data.length > 0 ? (
              <PlayersListView
                data={data}
                onSelectPlayer={handleOnSelectPlayer}
              />
            ) : (
              !isLoading && (
                <View style={styles.noPlayerContainer}>
                  <Text style={styles.noPlayerTxt}>No player to show!</Text>
                </View>
              )
            )}
          </View>
        </SafeAreaView>
      </View>
    </Modal>
  );
};
export default ModalForOut;