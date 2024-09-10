import { FC, useMemo } from 'react';
import { ImageSourcePropType, StyleProp, Text, View, ViewStyle } from 'react-native';
import { Image } from 'react-native';
import { VsIcon } from '../../../../assets/svg';
import styles from '../styles';
import { FixtureViewProps } from '../../../../modelInterface/views/matchListView';
const FixtureMatchView: FC<FixtureViewProps> = ({ teamOne, teamTwo, venue, matchType }) => {

  const teamOneLogo = useMemo<ImageSourcePropType>(() => teamOne.logoUrl
    ? { uri: teamOne.logoUrl }
    : require('../../../../assets/images/teams/Icon.jpg'), [teamOne.logoUrl])

  const teamTwoLogo = useMemo<ImageSourcePropType>(() => teamOne.logoUrl
    ? { uri: teamTwo.logoUrl }
    : require('../../../../assets/images/teams/Icon.jpg'), [teamTwo.logoUrl])

  const bottomStyle = useMemo<StyleProp<ViewStyle>>(() => matchType === 'amateur' ? styles.amateurfixtureBottomView : styles.fixtureBottomView, [matchType])

  return (
    <>
      <View style={styles.fixtureView}>
        <View style={styles.teamContainer}>
          <View style={styles.fixtureImageContainer}>
            <Image
              style={styles.logoURL}
              source={teamOneLogo}
            />
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              style={[styles.teamTitle, styles.teamTitleAlignCenter]}>
              {teamOne?.name}
            </Text>
          </View>
        </View>
        <VsIcon style={styles.vsIcon} />
        <View style={styles.teamContainer}>
          <View style={styles.fixtureImageContainer}>
            <Image
              style={styles.logoURL}
              source={teamTwoLogo}
            />
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              style={[styles.teamTitle, styles.teamTitleAlignCenter]}>
              {teamTwo?.name}
            </Text>
          </View>
        </View>
      </View>
    </>
  );
};
export default FixtureMatchView;
