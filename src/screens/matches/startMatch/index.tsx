import { FC, useEffect, useMemo } from 'react';
import { View, ScrollView, Clipboard } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { useDispatch, useSelector } from 'react-redux';
import { SimpleScreenContainer } from '../../../components/screensContainers/screenContainers';
import FormInput from '../../../components/formInput';
import {
  DateTimeIcon,
  LocationIcon,
  MatchFormatIcon,
  RightArrowIcon,
  ScorerIcon,
} from '../../../assets/svg';
import styles from './styles';
import GradientBtn from '../../../components/btns/gradientBtn';
import { RootState, store } from '../../../redux/store/store';
import {
  setBallType,
  setCategory,
  setDate,
  setErrors,
  setFormat,
  setIsOpenCalendar,
  setIsTossModalOpen,
  setMatchType,
  setOverlayURL,
  setOvers,
  setScorerId,
  setSubCategory,
  setTeamA,
  setTeamB,
  setTossDecision,
  setTossWinningTeamId,
  setVenue,
  setWickets,
} from '../../../redux/matches/startMatch/reducer';
import {
  editMatch,
  onConfirmDate,
  onStartMatch,
  onToss,
  resetState,
} from '../../../redux/matches/startMatch/action';
import Toss from './toss';
import { NavigationProps } from '../../../modelInterface/navigation';
import SimpleLoader from '../../../components/loaders/simpleLoader';
import TeamsIconTitleContainer from '../../../components/teamsIconTitleContainer';
import DropDown from '../../../components/dropDown';
import { toastMessage } from '../../../components/toastMessages';
import { DropDownObjProps } from '../../../modelInterface/commonProps';
import { dateFormatter } from '../../../utilis/dateFormatter';
const StartMatch: FC<NavigationProps | any> = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const {
    teamA,
    teamB,
    isStartingFixtureMatch,
    isStartingLiveMatch,
    isTossModalOpen,
    venue,
    overs,
    formate,
    wickets,
    ball_type,
    isOpenCalendar,
    error,
    toss_winning_team_id,
    toss_decision,
    scorerId,
    categoryType: cat,
    subCategory: sub,
    category,
    scheduled_datetime,
    subCategories,
    
  } = useSelector((state: RootState) => state.startMatchReducer);
  const { matchDetail, isLoading } = useSelector((state: RootState) => state.matchDetailsReducer);
  const { teamOne, teamTwo, venue: matchVenue, wickets: matchWickets, overlayUrl, overs: matchOvers, formate: matchFormate, ballType, scheduledDatetime, scorer, matchType, tournament, matchCategoryType, matchSubCategoryType } = matchDetail
  const { tournament_id, group_id, id, categoryType, subCategory, tournamentType, isAmateur } = route.params || {};
  useEffect(() => {
    if (id) {
      dispatch(setCategory(matchCategoryType));
      dispatch(setSubCategory(matchSubCategoryType));
      dispatch(setTeamA(teamOne));
      dispatch(setTeamB(teamTwo));
      dispatch(setVenue(matchVenue));
      dispatch(setWickets(matchWickets));
      dispatch(setOvers(matchOvers));
      dispatch(setMatchType(matchType));
      dispatch(setFormat(matchFormate));
      dispatch(setBallType(ballType));
      dispatch(setDate(scheduledDatetime));
      dispatch(setOverlayURL(overlayUrl));
      if (scorer) {
        dispatch(setScorerId(scorer?.player?.shareableId));
      }
    }
    return resetState;
  }, [id, matchDetail, dispatch]);
  const copyOverlayURL = async () => {
    await Clipboard.setString(overlayUrl);
    toastMessage('Overlay URL is Copied');
  };
  return (
    <SimpleScreenContainer isBlue={true}>
      {id ? <SimpleLoader isLoading={!!isLoading} /> : null}
      <DateTimePickerModal
        isVisible={isOpenCalendar}
        mode={'datetime'}
        onConfirm={date => onConfirmDate({ date, group_id, tournament_id, categoryType, subCategory,id })}
        onCancel={() => dispatch(setIsOpenCalendar(false))}
      />
      <Toss
        isVisible={isTossModalOpen}
        onRequestClose={() => dispatch(setIsTossModalOpen(false))}
        teamAName={teamA?.name}
        teamBName={teamB?.name}
        isSelectedTeamA={teamA?.id === toss_winning_team_id}
        isSelectedTeamB={teamB?.id === toss_winning_team_id}
        onPressDecision={toss_decision =>
          dispatch(setTossDecision(toss_decision))
        }
        toss_decision={toss_decision}
        isLoading={isStartingLiveMatch}
        error={error}
        onSubmit={() => {
          onToss({ group_id, tournament_id, id, categoryType, subCategory, tournamentType });
        }}
        onPressTeamA={() => dispatch(setTossWinningTeamId(teamA?.id))}
        onPressTeamB={() => dispatch(setTossWinningTeamId(teamB?.id))}
        team1Logo={teamA?.logoUrl}
        team2Logo={teamB?.logoUrl}
      />
      <ScrollView style={styles.container}>
        <TeamsIconTitleContainer
          name1={teamA?.name ? teamA.name : 'Team A'}
          name2={teamB?.name ? teamB.name : 'Team B'}
          team1Logo={teamA.logoUrl}
          team2Logo={teamB.logoUrl}
          onPress1={() => {
            dispatch(setErrors('')),
              navigation.navigate(
                group_id || tournament_id ? 'GroupTeams' : 'SelectTeams',
                { selectTeam: 'A', group_id, tournament_id },
              );
          }}
          onPress2={() => {
            dispatch(setErrors('')),
              navigation.navigate(
                group_id || tournament_id ? 'GroupTeams' : 'SelectTeams',
                { selectTeam: 'B', group_id, tournament_id },
              );
          }}
          errorText1={
            error === 'Please select team A' ? 'Please select team A' : null
          }
          errorText2={
            error === 'Please select team B' ? 'Please select team B' : null
          }
        />
        <FormInput
          title="Select Venue"
          placeholder="Select Your Match Venue Location"
          LeftChild={<LocationIcon />}
          RightChild={<RightArrowIcon />}
          editable={false}
          textInputContainerStyle={styles.inputFields}
          onPress={() => {
            dispatch(setErrors('')), navigation.navigate('Venue', { isAmateur });
          }}
          error={error == 'Please select venue' ? 'Please select venue' : null}
          value={venue?.title}
        />
        <FormInput
          title="Select Match Format"
          placeholder="Select Your Match Format"
          textInputContainerStyle={styles.inputFields}
          editable={false}
          onPress={() => {
            dispatch(setErrors('')),
              navigation.navigate('MatchFormat', {
                tournament_id: tournament_id,
                id,
                tournamentType,
                matchType,
                isAmateur
              });
          }}
          LeftChild={<MatchFormatIcon />}
          RightChild={<RightArrowIcon />}
          value={
            overs.toString() &&
            formate &&
            wickets.toString() &&
            overs.toString() +
            ' - ' +
            formate +
            ' - ' +
            wickets.toString() +
            ' - ' +
            ball_type
          }
          error={
            error === 'Please select overs' ||
              error === 'Please select formate' ||
              error === 'Please select match type' ||
              error === 'Please enter wickets' ||
              error === 'Please select ball type'
              ? 'Please fill match format'
              : null
          }
        />
        <FormInput
          title="Select Scorer"
          placeholder="Enter Your scorer ID"
          textInputContainerStyle={styles.inputFields}
          LeftChild={<ScorerIcon />}
          onChangeText={e => {
            dispatch(setScorerId(e));
          }}
          value={scorerId}
        />
        {
          id ?
          <DropDown
          title="Select Date&Time"
          placeholder="Select DateTime"
         textInputContainerStyle={styles.inputFields}
         LeftChild={<DateTimeIcon />}
         onPress={ ()=> store.dispatch(setIsOpenCalendar(true))}
         value={dateFormatter(scheduled_datetime.toString())}
       /> :
       null
        }
        {overlayUrl ?
          <DropDown
            title="Copy Overlay URL"
            placeholder="Enter Overlay URL"
            textInputContainerStyle={styles.inputFields}
            LeftChild={<ScorerIcon />}
            onPress={copyOverlayURL}
            value={overlayUrl}
          /> : null}
        <View style={styles.btnsRowContainer}>
          <GradientBtn
            title={id ? 'Update' : 'Schedule'}
            loading={isStartingFixtureMatch}
            containerStyle={styles.btnContainer}
            btnStyle={styles.btnStyle}
            onPress={() => {
              id ? editMatch(id) : onStartMatch({ status: 'fixture' });
            }}
            isAmateur={matchType == "amateur" || isAmateur}
          />
          <GradientBtn
            title="Start Match"
            loading={isStartingLiveMatch}
            containerStyle={styles.btnContainer}
            btnStyle={styles.btnStyle}
            onPress={() => {
              dispatch(setDate(new Date())),
                onStartMatch({
                  status: 'started',
                  isStartDirect: true,
                  group_id,
                  tournament_id,
                  categoryType,
                  subCategory
                });
            }}
            isAmateur={matchType == "amateur" || isAmateur}
          />
        </View>
      </ScrollView>
    </SimpleScreenContainer>
  );
};
export default StartMatch;
