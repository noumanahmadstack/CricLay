import {FC} from 'react';
import {Text, View} from 'react-native';
import TeamIconTitle from '../../components/teamIconTitle';
import {TeamIconTitleContainerProps} from '../../modelInterface/components/teamsIconTitleContainer';
import styles from './styles';
const TeamsIconTitleContainer: FC<TeamIconTitleContainerProps> = ({
  name1,
  name2,
  onPress1,
  onPress2,
  isSelected1,
  isSelected2,
  over1,
  over2,
  team1Logo,
  team2Logo,
  errorText1,
  errorText2,
}) => {
  return (
    <View style={styles.container}>
      <TeamIconTitle
        name={name1 || '--'}
        onPress={onPress1}
        isSelected={isSelected1}
        over={over1}
        logoURL={team1Logo}
        errorText={errorText1}
      />
      <Text style={styles.vsTxt}>vs</Text>
      <TeamIconTitle
        name={name2 || '--'}
        onPress={onPress2}
        isSelected={isSelected2}
        over={over2}
        logoURL={team2Logo}
        errorText={errorText2}
      />
    </View>
  );
};
export default TeamsIconTitleContainer;
