import { FC, useMemo, useCallback } from 'react';
import { View, Text, Image } from 'react-native';
import { useSelector } from 'react-redux';
import { GetMatchObjectState } from '../../../../../modelInterface/redux/matches/reducer';
import GradientBtn from '../../../../../components/btns/gradientBtn';
import styles from './styles';
import PlayerScoreboard from '../../../../scoring/normal/score/playerScoreboard';
import LinearGradient from 'react-native-linear-gradient';
import GradientColor from '../../../../../theme/gradientColors';
import { navigate } from '../../../../../routes/rootNavigation';
import { RootState } from '../../../../../redux/store/store';

const ManOfMatch: FC<{ matchDetail: GetMatchObjectState }> = ({ matchDetail }) => {
  const { id } =
    useSelector((state: RootState) => state.userReducer?.userData?.user) || {};
  const { stats, organizer, matchType, scorerId } = matchDetail || {};
  const isOwner = (organizer.id === id || scorerId === id)
  const commonContent = useMemo(
    () => (
      <>
        <View style={styles.container}>
          <LinearGradient
            style={styles.formate}
            colors={matchType === 'amateur' ? GradientColor.amateurGradient : GradientColor.theme}
            start={{ x: 0, y: 0 }}
            end={{ x: 0, y: 1 }}
          >
            <Text style={styles.oversInningTitle}>
              {matchDetail?.formate?.toUpperCase()}
            </Text>
          </LinearGradient>
          <View style={styles.player}>
            <Text style={styles.message}>Best Player Of The Match</Text>
            <View style={styles.seperator} />
            <Image
              resizeMode="contain"
              style={styles.dp}
              source={require('../../../../../assets/images/user/user.png')}
            />
            <Text style={styles.name}>{stats?.manOfTheMatch?.name}</Text>
          </View>
        </View>
        <PlayerScoreboard
          strikerId={''}
          batsmanData={
            stats?.manOfTheMatch?.batingStat?.batsmanId
              ? [stats?.manOfTheMatch?.batingStat]
              : []
          }
          bowlerData={stats?.manOfTheMatch?.bowlingStat}
          isDetailed={true}
          hideBatterStatus={true}
        />
      </>
    ),
    [matchDetail?.formate, stats?.manOfTheMatch],
  );
  const handleUpdatePlayer = useCallback(() => {
    navigate('PlayingPlayers');
  }, []);

  if (stats?.manOfTheMatch) {
    return (
      <>
        {commonContent}
        {isOwner && (
          <GradientBtn
            title="Update Player"
            onPress={handleUpdatePlayer}
            containerStyle={styles.btnContainer}
            isAmateur={matchType === 'amateur' ? true : false}
          />
        )}
      </>
    );
  }
  return (
    <View style={styles.emptyContainer}>
      <Image
        style={styles.emptyImage}
        source={require('../../../../../assets/images/tournament/mom.png')}
      />
      {isOwner && (
        <GradientBtn
          title="Select Player"
          onPress={handleUpdatePlayer}
          containerStyle={styles.btnContainer}
          isAmateur={matchType === 'amateur' ? true : false}
        />
      )}
    </View>
  );
};

export default ManOfMatch;
