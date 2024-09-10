import { FC, ReactNode, useMemo, useState } from 'react';
import { Text, View, Linking, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FloatingTabBtn from '../../../../../components/floatingAddBtn';
import TeamsIconTitleContainer from '../../../../../components/teamsIconTitleContainer';
import { GetMatchObjectState } from '../../../../../modelInterface/redux/matches/reducer';
import { RootState } from '../../../../../redux/store/store';
import MatchSummaryTab from '../../../../../tabs/matchSummary';
import SummaryOptionsModal from '../../../../scoring/normal/score/actions/summaryToggle';
import styles from './styles';
import { summaryToggleAction } from '../../../../../redux/matches/matchDetails/action';
import colors from '../../../../../theme/colors';
import { navigate } from '../../../../../routes/rootNavigation';
const MatchSummary: FC<{ matchDetail: GetMatchObjectState, isAmateur?: boolean }> = ({
  matchDetail,
  isAmateur
}) => {
  const { id, teamOne, teamTwo, winningTeam, summary, message, actionStatus, organizer, scorerId, streamingLinks } = matchDetail;
  const { user } = useSelector((state: RootState) => state.userReducer?.userData)
  const { teamOne: teamOneSummary, teamTwo: teamTwoSummary, matchSummaryUrl } = summary || {};
  const [isVisibleSummary, setIsVisibleSummary] = useState<boolean>(false)

  const handlePress = () => {
    if (matchSummaryUrl !== undefined) {
      Linking.openURL(matchSummaryUrl);
    }
  };
  const organizerAccess = useMemo<boolean>(() => (user?.id == scorerId || user?.id == organizer?.id), [organizer, scorerId, user])
  const RenderYouTubeIcon = useMemo(() => {
    if (streamingLinks?.length > 0) {
      return <AntDesign onPress={() => navigate('StreamingList', { streamingLinks, id })} style={styles.youtubeIcon} size={50} name='youtube' color={colors.darkRed} />
    }
    return null
  }, [streamingLinks, id])
  const RenderDownloadBtn = useMemo<ReactNode>(() => {
    if (organizerAccess) {
      return (
        <TouchableOpacity onPress={handlePress}>
          <Ionicons name="cloud-download-outline" size={30} color={colors.themeBlue} style={styles.downloadIcon} />
        </TouchableOpacity>
      )
    }
    return null
  }, [handlePress])
  const RenderMatchSummaryTab = useMemo<ReactNode>(() => {
    if (!actionStatus) {
      return <MatchSummaryTab teamOne={teamOneSummary} teamTwo={teamTwoSummary} isAmateur={isAmateur} />
    }
    return null
  }, [actionStatus, teamOneSummary, teamTwoSummary, isAmateur])
  const RenderFloatingBtn = useMemo<ReactNode>(() => {
    if (organizerAccess) {
      return <FloatingTabBtn btnType='ticker' isAmateur={isAmateur} onPress={() => setIsVisibleSummary(true)} />
    }
    return null
  }, [organizerAccess, isAmateur])
  return (
    <>
      <SummaryOptionsModal
        isVisible={isVisibleSummary}
        onRequestClose={() => setIsVisibleSummary(false)}
        onConfirm={summaryToggleAction}
        matchDetail={matchDetail}
        isAmateur={isAmateur}
      />
      <TeamsIconTitleContainer
        name1={
          teamOne
            ? teamOne.name + '\n' + (teamOne?.runs + '/' + teamOne?.wickets)
            : '--'
        }
        name2={
          teamTwo
            ? teamTwo.name + '\n' + (teamTwo?.runs + '/' + teamTwo?.wickets)
            : '--'
        }
        isSelected1={Boolean(teamOne?.id == winningTeam?.id)}
        isSelected2={Boolean(teamTwo?.id == winningTeam?.id)}
        over1={teamOne?.overs}
        over2={teamTwo?.overs}
        team1Logo={teamOne?.logoUrl}
        team2Logo={teamTwo?.logoUrl}
      />
      {teamOne?.id && teamTwo?.id ? (
        <View style={styles.row}>
          <View style={styles.messageContainer}>
            <Text style={styles.message}>{message}</Text>
          </View>
          {RenderYouTubeIcon}
          {RenderDownloadBtn}
        </View>
      ) : null}
      {RenderMatchSummaryTab}
      {RenderFloatingBtn}
    </>
  );
};
export default MatchSummary;
