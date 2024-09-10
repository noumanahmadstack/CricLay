import {FC} from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import styles from './styles';
import {LahoreQalandarIcon} from '../../../../../assets/svg';
const Content: FC = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.teamContainer}>
        <Text style={styles.teamName}>Points</Text>
        <LahoreQalandarIcon style={styles.teamIcon} />
      </View>
      <View style={styles.pointTableContainer}>
        <View style={styles.pointContainer}>
          <Text style={styles.points}>15</Text>
          <Text style={styles.name}>Matches</Text>
        </View>
        <View style={styles.pointContainer}>
          <Text style={styles.points}>1</Text>
          <Text style={styles.name}>Run</Text>
        </View>
        <View style={styles.pointContainer}>
          <Text style={styles.points}>6</Text>
          <Text style={styles.name}>Wickets</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default Content;
