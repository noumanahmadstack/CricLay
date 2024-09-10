import {FC} from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import GradientColor from '../../../../../theme/gradientColors';
import {
  LahoreQalandarSmallIcon,
  MultanSultanSmallIcon,
} from '../../../../../assets/svg';
const Content: FC = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.nameContainer}>
        <LinearGradient
          style={styles.overInnings}
          colors={GradientColor.theme}
          start={{x: 0, y: 0}}
          end={{x: 0, y: 1}}>
          <Text style={styles.oversInningTitle}>T20</Text>
        </LinearGradient>
        <Text style={styles.matchesName}>JM Super Cricket League</Text>
        <LinearGradient
          style={styles.matchStatus}
          colors={GradientColor.theme}
          start={{x: 0, y: 0}}
          end={{x: 0, y: 1}}>
          <Text style={styles.matchStatusTxt}>Live</Text>
        </LinearGradient>
      </View>
      <View style={styles.teamMatchesContainer}>
        <View style={styles.teamContainer}>
          <View style={styles.teamRowContainer}>
            <LahoreQalandarSmallIcon />
            <Text style={styles.teamTitle}>LQ</Text>
          </View>
          <View style={styles.teamRowContainer}>
            <Text style={styles.teamOver}>(30/100 Balls, T:130)</Text>
            <Text style={styles.teamScore}>39/0</Text>
          </View>
        </View>
        <View style={styles.teamContainer}>
          <View style={styles.teamRowContainer}>
            <MultanSultanSmallIcon />
            <Text style={styles.teamTitle}>PZ</Text>
          </View>
          <View style={styles.teamRowContainer}>
            {/* <Text style={styles.teamOver}>(30/100 Balls, T:130)</Text> */}
            <Text style={styles.teamScore}>Yet to Bat</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default Content;
