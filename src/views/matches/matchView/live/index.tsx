import { FC, useMemo } from 'react';
import { ImageSourcePropType, Text, View } from 'react-native';
import { Image } from 'react-native';
import { LiveMatchViewProps } from '../../../../modelInterface/views/matchListView';
import styles from '../styles';
const LiveMatchView: FC<LiveMatchViewProps> = ({ teamOne, teamTwo }) => {

  const teamOneLogo = useMemo<ImageSourcePropType>(() => teamOne.logoUrl
    ? { uri: teamOne.logoUrl }
    : require('../../../../assets/images/teams/Icon.jpg'), [teamOne.logoUrl])

  const teamTwoLogo = useMemo<ImageSourcePropType>(() => teamOne.logoUrl
    ? { uri: teamTwo.logoUrl }
    : require('../../../../assets/images/teams/Icon.jpg'), [teamTwo.logoUrl])

  const teamOneStatus = useMemo<string>(() => teamOne.yetToBat == false
    ? teamOne.runs + '/' + teamOne.wickets
    : 'Yet to Bat', [teamOne])

  const teamTwoStatus = useMemo<string>(() => teamTwo.yetToBat == false
    ? teamTwo.runs + '/' + teamTwo.wickets
    : 'Yet to Bat', [teamTwo])

  return (
    <View style={styles.teamMatchesContainer}>
      <View style={styles.teamContainer}>
        <View style={styles.teamRowContainer}>
          <Image
            style={styles.logoURL}
            source={teamOneLogo}
          />
          <Text numberOfLines={1} ellipsizeMode="tail" style={styles.teamTitle}>
            {teamOne?.name}
          </Text>
        </View>
        <Text style={styles.teamScore}>
          {teamOneStatus}
        </Text>
      </View>
      <View style={styles.teamContainer}>
        <View style={styles.teamRowContainer}>
          <Image
            style={styles.logoURL}
            source={teamTwoLogo}
          />
          <Text numberOfLines={1} ellipsizeMode="tail" style={styles.teamTitle}>
            {teamTwo?.name}
          </Text>
        </View>
        <Text style={styles.teamScore}>
          {teamTwoStatus}
        </Text>
      </View>
    </View>
  );
};
export default LiveMatchView;
