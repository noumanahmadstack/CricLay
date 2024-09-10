import { FC, useEffect } from 'react';
import { View, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { RootState } from '../../../../redux/store/store';
import { SimpleScreenContainer } from '../../../../components/screensContainers/screenContainers';
import DropDown from '../../../../components/dropDown';
import styles from './styles';
import { MatchFrmtIcon, OversIcon, WicketIcon } from '../../../../assets/svg';
import BallsType from '../../../../components/ballsType';
import GradientBtn from '../../../../components/btns/gradientBtn';
import colors from '../../../../theme/colors';
import {
  setBallType,
  setErrors,
  setFormat,
  setMatchType,
  setOvers,
  setWickets,
} from '../../../../redux/matches/startMatch/reducer';
import FormInput from '../../../../components/formInput';
import ErrorText from '../../../../components/errorText';
import { onDoneMatchFormat } from '../../../../redux/matches/startMatch/action';
const MatchFormat: FC<any> = ({ route }) => {
  const dispatch = useDispatch();
  const { error, oversData, matchFromat, matchType, ball_type } = useSelector(
    (state: RootState) => state.startMatchReducer,
  );
  const { tournament_id, tournamentType, matchType: type, isAmateur } = route?.params;
  useEffect(() => {
    if (tournament_id) {
      if (isAmateur) {
        dispatch(setFormat(matchFromat[2].key))
        dispatch(setMatchType(matchType[3].key));
      } else {
        dispatch(setMatchType(matchType[2].key));
      }
    } else {
      const modifiedMatchType = type ? type : matchType[0].key
      dispatch(setMatchType(modifiedMatchType));
    }
  }, [dispatch, matchType, tournament_id, tournamentType]);

  return (
    <SimpleScreenContainer isBlue={true}>
      <View style={styles.container}>
        <DropDown
          data={oversData}
          isDropDown={true}
          isCustomInputForDropDown={true}
          LeftChildForDropDownInput={
            <FontAwesome5
              size={18}
              name="baseball-ball"
              color={colors.disableFont}
            />
          }
          title="Select Overs"
          placeholder="Select overs for the match"
          onConfirm={e => {
            dispatch(setErrors('')), dispatch(setOvers(e));
          }}
          returnString={true}
          textInputContainerStyle={styles.inputFields}
          LeftChild={<OversIcon />}
          error={error === 'Please select overs' ? 'Please select overs' : null}
          isAmateur={type == 'amateur'}
        />
        {
          !isAmateur &&
          <DropDown
            data={matchFromat}
            isDropDown={true}
            title="Select Match Format"
            placeholder="Select your match format"
            onConfirm={e => {
              dispatch(setErrors('')), dispatch(setFormat(e?.key));
            }}
            textInputContainerStyle={styles.inputFields}
            LeftChild={<MatchFrmtIcon />}
            error={
              error === 'Please select formate' ? 'Please select formate' : null
            }
          />
        }
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.keyBoardWrapper}>
            <FormInput
              title="Select Wicket"
              placeholder="Select wickets"
              keyboardType='number-pad'
              onChangeText={e => {
                dispatch(setErrors('')), dispatch(setWickets(Number(e)));
              }}
              textInputContainerStyle={styles.inputFields}
              LeftChild={<WicketIcon />}
              error={
                error === 'Please enter wickets' ? 'Please enter wickets' : null
              }
            />
          </View>
        </TouchableWithoutFeedback>
        <BallsType
          onPress={({ key }: { key: string }) => {
            dispatch(setErrors('')), dispatch(setBallType(key));
          }}
          value={ball_type}
        />
        <ErrorText
          error={
            error === 'Please select ball type'
              ? 'Please select ball type'
              : null
          }
          textStyle={styles.ballErrorTxt}
        />
      </View>
      <GradientBtn
        title="Done"
        containerStyle={styles.btnContainer}
        onPress={onDoneMatchFormat}
        isAmateur={type == 'amateur' || isAmateur}
      />
    </SimpleScreenContainer>
  );
};
export default MatchFormat;
