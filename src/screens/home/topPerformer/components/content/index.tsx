import {FC} from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import {Image} from 'react-native';
const Content: FC = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image
        resizeMode="stretch"
        style={{
          height: 130,
          width: 95,
          position: 'absolute',
          bottom: 0,
          borderBottomLeftRadius: 10,
        }}
        source={require('../../../../../assets/images/home/afridi.png')}
      />
      <View style={styles.performerNameContainer}>
        <LinearGradient
          style={styles.rankingContainer}
          colors={['#FF8500', '#BC0031']}
          start={{x: 0, y: 0}}
          end={{x: 0, y: 1}}>
          <Text style={styles.rankingTxt}>#1</Text>
        </LinearGradient>
        <View style={styles.playerNameContainer}>
          <Text style={styles.playerName}>SHAHID AFRIDI</Text>
        </View>
        <LinearGradient
          style={styles.totalScoreContainer}
          colors={['#FF8500', '#BC0031']}
          start={{x: 0, y: 0}}
          end={{x: 0, y: 1}}>
          <Text style={styles.totalScore}>890</Text>
        </LinearGradient>
      </View>
      <View style={styles.pointTableContainer}>
        <View style={{width: 80}} />
        <View style={styles.pointContainer}>
          <Text style={styles.points}>M</Text>
          <Text style={styles.name}>17</Text>
        </View>
        <View style={styles.pointContainer}>
          <Text style={styles.points}>HS</Text>
          <Text style={styles.name}>129</Text>
        </View>
        <View style={styles.pointContainer}>
          <Text style={styles.points}>AVG</Text>
          <Text style={styles.name}>59.33</Text>
        </View>
        <View style={styles.pointContainer}>
          <Text style={styles.points}>SP</Text>
          <Text style={styles.name}>157.80</Text>
        </View>
        <View style={styles.pointContainer}>
          <Text style={styles.points}>50/100's</Text>
          <Text style={styles.name}>4/3</Text>
        </View>
      </View>
      <View style={styles.viewFullLeaderBoardContainer}>
        <Text
          onPress={() => console.log('e')}
          style={styles.viewFullLeaderBoardTxt}>
          View Full Leaderboard
        </Text>
      </View>
    </TouchableOpacity>
  );
};
export default Content;
