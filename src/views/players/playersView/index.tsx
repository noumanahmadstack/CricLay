import { FC, memo, useMemo, useState, useCallback, ReactNode } from 'react';
import { View, Text, Image, TouchableOpacity, ActivityIndicator, ImageSourcePropType } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { PlayerViewProps } from '../../../modelInterface/views/playersListView';
import { calculateBatsmanState as amateurCalculateBatsmanState, calculateBowlerState as amateurCalculateBowlerState } from '../../../redux/scoring/amateur/score/action';
import { calculateBatsmanState, calculateBowlerState } from '../../../redux/scoring/normal/score/action';
import { navigate } from '../../../routes/rootNavigation';
import colors from '../../../theme/colors';
import styles from './styles';
import PointView from './pointView';
import LinearGradient from 'react-native-linear-gradient';
import GradientColor from '../../../theme/gradientColors';
const PlayersView: FC<PlayerViewProps> = ({
  onPlayerToAddIntoPlaying,
  onSelectPlayer,
  onLongPress,
  addSubsitute,
  onDelete,
  isMatchPlaying,
  ballsPerOver,
  ballsData,
  isBatsman,
  isPrivate,
  viewType,
  teamId,
  totalOvers,
  isAmateur,
  isImpactPlayer,
  isSubsituted,
  isShowSubsitutePlayer,
  disabled,
  isDeleteable,
  ...props
}) => {
  const { name, isPlayingInMatch, shareableId, id, team, topPerformance, jerseyNumber, role, isWicketKeeper, isVerified, avatarUrl } = props || {};
  const [isLoadingBtn, setIsLoadingBtn] = useState<boolean>(false);
  const onPressAddToMatch = useCallback(async () => {
    if (onPlayerToAddIntoPlaying) {
      setIsLoadingBtn(true);
      await onPlayerToAddIntoPlaying(props);
      setIsLoadingBtn(false);
    }
  }, [onPlayerToAddIntoPlaying, props]);
  const onHandleEditTeamPlayer = useCallback(() => {
    navigate('UpdateTeamPlayer', { teamId, playerId: id, jerseyNumber, role, isWicketKeeper })
  }, [teamId, id])
  const RenderMatchParticipant = useMemo<ReactNode>(() => !isPrivate && isPlayingInMatch !== undefined && (
    <TouchableOpacity onPress={onPressAddToMatch} style={styles.addToTeamBtn}>
      {isLoadingBtn ? (
        <ActivityIndicator color={colors.themeBlue} animating />
      ) : (
        <Text style={styles.addToMatchTitle}>
          {isPlayingInMatch ? 'Added to Match' : 'Add to Match'}
        </Text>
      )}
    </TouchableOpacity>
  ),
    [isLoadingBtn, isPlayingInMatch, onPressAddToMatch, isPrivate],
  );
  const { runs, ballCount, wicketAttributes, disabledSelect, outAt } = isAmateur ? useMemo(() => amateurCalculateBatsmanState({
    batsmanId: props.batsmanId,
    balls: ballsData,
    totalOvers: totalOvers || 0
  }), [props.batsmanId, ballsData, totalOvers]) :
    useMemo(() => calculateBatsmanState({
      batsmanId: props.batsmanId || '',
      balls: ballsData || [],
    }), [props.batsmanId, ballsData]);
  const RenderPlayerStats = useMemo<ReactNode>(() => {
    if (!!isMatchPlaying && ballsData) {
      if (isBatsman && props?.batsmanId) {
        return (
          <Text style={styles.addToMatchTitle}>
            {(wicketAttributes?.wicketType == "retired" ? `Rtrd at ${outAt},` : wicketAttributes?.wicketType ? `Out at ${outAt},` : '') +
              ` ${ballCount}(${runs})`}
          </Text>
        );
      } else if (props?.bowlerId && ballsPerOver) {
        const { overs, wickets, economyRate, runs } = isAmateur ? amateurCalculateBowlerState({
          bowlerId: props.bowlerId,
          ballsPerOver,
          balls: ballsData,
          totalOvers: totalOvers || 0
        }) :
          calculateBowlerState({
            bowlerId: props.bowlerId,
            ballsPerOver,
            balls: ballsData,
          });
        return (
          <View style={styles.bowlerStatContainer}>
            <Text style={styles.addToMatchTitle}>{`${'O \n' + overs}`}</Text>
            <Text style={styles.addToMatchTitle}>{`${'W \n' + wickets}`}</Text>
            <Text style={styles.addToMatchTitle}>{`${'ER \n' + economyRate
              }`}</Text>
            <Text style={styles.addToMatchTitle}>{`${'R \n' + runs}`}</Text>
          </View>
        );
      }
    }
    return null;
  }, [isBatsman, ballsPerOver, ballsData, props?.batsmanId, props?.bowlerId, isAmateur, isMatchPlaying]);
  const onHandlePress = useCallback(() => {
    if (onSelectPlayer && props) {
      onSelectPlayer(props);
    } else {
      navigate('PlayerProfile', { name, logoUrl: '', id, shareableId });
    }
  }, [id, name, onSelectPlayer, props, shareableId]);
  const onHandleLongPress = useCallback(() => {
    if (onLongPress && props && !isImpactPlayer) {
      onLongPress(props);
    }
  }, [id, name, onLongPress, props, shareableId]);
  const onHandleSubsitute = useCallback(() => {
    if (addSubsitute && props) {
      addSubsitute(props);
    }
  }, [id, name, onLongPress, props, shareableId])
  const disableSelectBowler = useMemo<boolean>(() => {
    if (isMatchPlaying) {
      if (!isBatsman && props?.bowlerId && ballsData) {
        const currentBall = ballsData[ballsData.length - 1]
        if (isAmateur && totalOvers) {
          if (totalOvers - 2 == currentBall?.overNumber && currentBall?.overBallsNumber === ballsPerOver) {
            if (currentBall.bowlerId == props?.bowlerId) {
              return true
            }
            return false
          } else if (totalOvers - 1 == currentBall?.overNumber) {
            if (currentBall.bowlerId == props?.bowlerId) {
              return true
            }
            return false
          }
          let consecutiveOvers = 0
          const { overNumber } = currentBall || {}
          let overChanged = false
          let currentOverNumber: number | null = null
          for (let index = 0; index < ballsData.length; index++) {
            const ball = ballsData[index];
            const checkingOvers = overNumber - ((overNumber === 0) ? 0 : 1)
            if (ball.overNumber !== currentOverNumber) {
              overChanged = true
              currentOverNumber = ball.overNumber; // Update the current over number
            }
            if (ball.overNumber >= checkingOvers && overChanged) {
              if (props.bowlerId == ball.bowlerId) {
                consecutiveOvers++
                overChanged = false
              }
            }
          }
          return consecutiveOvers == 2
        } else {
          return ballsData[ballsData?.length - 1]?.bowlerId == props?.bowlerId
        }
      }
    }
    return false;
  }, [isMatchPlaying, isBatsman, ballsData, props?.bowlerId, props?.batsmanId, isAmateur]);
  const handleRoleShortForm = useMemo<string | null>(() => {
    switch (role) {
      case 'player':
        return null;
      case 'captain':
        return '(C)';
      case 'vice_captain':
        return '(VC)';
      case 'twelfth_man':
        return '(12th Man)';
      default:
        return null
    }
  }, [role])
  const handleWicketKeeper = useMemo<string | null>(() => {
    if (isWicketKeeper) {
      return '(WK)'
    } else {
      return null
    }
  }, [role])
  const disabledTouch = disabled ? disabled : isBatsman ? disabledSelect : disableSelectBowler
  const RenderCross = useMemo<ReactNode>(() => {
    if (isDeleteable && onDelete) {
      return <Entypo onPress={() => onDelete(props)} color={colors.appleLightDark} size={22} style={styles.crossIcon} name='circle-with-cross' />
    }
    return null
  }, [isDeleteable, onDelete])

  const playerAvatar = useMemo<ImageSourcePropType>(() => avatarUrl ? { uri: avatarUrl } : require('../../../assets/images/user/user.png'), [avatarUrl])

  const RenderIsVerified = useMemo<ReactNode>(() => isVerified &&
    <MaterialIcons size={16} style={styles.matIcon} color={colors.themeBlue} name='verified' />, [isVerified])

  const RenderJerseyNumber = useMemo<ReactNode>(() => jerseyNumber ?
    <Text style={styles.id}>Jersey: {jerseyNumber}</Text>
    : null, [jerseyNumber])

  const RenderTopPerformer = useMemo<ReactNode>(() => topPerformance &&
    <Entypo name="trophy" size={40} color={colors.actionOrange} />, [topPerformance])

  const RenderEdit = useMemo<ReactNode>(() => viewType == 'editTeamPlayer' &&
    <AntDesign onPress={onHandleEditTeamPlayer} color={colors.themeBlue} size={20} name='edit' />, [viewType])

  const RenderPointView = useMemo<ReactNode>(() =>
    viewType == 'leaderBoard' ?
      <PointView {...props} />
      : null
    , [viewType])
  return (
    <>
      {RenderCross}
      <TouchableOpacity
        disabled={disabledTouch}
        activeOpacity={0.5}
        onPress={onHandlePress}
        onLongPress={onHandleLongPress}
        style={[styles.container, (disabledTouch) && styles.disableContainer]}>
        <View style={styles.internalContainer}>
          <Image
            resizeMode="contain"
            style={styles.dp}
            source={playerAvatar}
          />
          <View style={styles.nameContainer}>
            <View style={styles.row}>
              <Text style={styles.name}>{name} <Text style={styles.id}>{handleRoleShortForm} {handleWicketKeeper}</Text></Text>
              {RenderIsVerified}
            </View>
            <Text style={styles.id}>ID: {shareableId}</Text>
            {RenderJerseyNumber}
          </View>
          {RenderTopPerformer}
          {RenderEdit}
          {RenderMatchParticipant}
          {RenderPlayerStats}
          {RenderPointView}
        </View>
        {isImpactPlayer || isSubsituted ?
          <LinearGradient
            colors={GradientColor.amateurGradient}
            style={styles.impact}>
            <Text style={styles.label}>{isImpactPlayer ? 'Impact Player' : "Subsituted"}</Text>
          </LinearGradient> :
          (
            (isMatchPlaying && isShowSubsitutePlayer) &&
            <LinearGradient
              colors={GradientColor.amateurGradient}
              style={styles.impact}
            >
              <TouchableOpacity disabled={isSubsituted} onPress={onHandleSubsitute}>
                <Text style={styles.label}>{isSubsituted ? "Subsituted" : "Add Subsitute"}</Text>
              </TouchableOpacity>
            </LinearGradient>
          )
        }
      </TouchableOpacity>
    </>
  );
};
export default memo(PlayersView);