import { FC, useMemo } from 'react';
import { ImageSourcePropType, Text, View } from 'react-native';
import { Image } from 'react-native';
import { CompletedMatchViewProps } from '../../../../modelInterface/views/matchListView';
import styles from '../styles';
const CompletedMatchView: FC<CompletedMatchViewProps> = ({
  teamOne,
  teamTwo,
}) => {
  const teamOneLogo = useMemo<ImageSourcePropType>(() => teamOne.logoUrl
    ? { uri: teamOne.logoUrl }
    : require('../../../../assets/images/teams/Icon.jpg'), [teamOne.logoUrl])

  const teamTwoLogo = useMemo<ImageSourcePropType>(() => teamOne.logoUrl
    ? { uri: teamTwo.logoUrl }
    : require('../../../../assets/images/teams/Icon.jpg'), [teamTwo.logoUrl])

  return (
    <>
      <View style={styles.teamMatchesContainer}>
        <View style={styles.teamContainer}>
          <View style={styles.teamRowContainer}>
            <Image
              style={styles.logoURL}
              source={teamOneLogo}
            />
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              style={styles.teamTitle}>
              {teamOne?.name}
            </Text>
          </View>
          <Text style={styles.teamScore}>
            {teamOne.runs}-{teamOne.wickets}
            {'(' + teamOne.overs + ')'}
          </Text>
        </View>
        <View style={styles.teamContainer}>
          <View style={styles.teamRowContainer}>
            <Image
              style={styles.logoURL}
              source={teamTwoLogo}
            />
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              style={styles.teamTitle}>
              {teamTwo?.name}
            </Text>
          </View>
          <Text style={styles.teamScore}>
            {teamTwo.runs || 0}-{teamTwo.wickets || 0}
            {'(' + (teamTwo.overs || 0) + ')'}
          </Text>
        </View>
      </View>
    </>
  );
};
export default CompletedMatchView;