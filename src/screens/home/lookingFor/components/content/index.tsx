import {FC} from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import styles from './styles';
const Content: FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>What are you looking for?</Text>
      </View>
      <View style={styles.topTableContainer}>
        <TouchableOpacity style={styles.innerLeftContainer}>
          <Text style={styles.name}>Matches</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.innerRightContainer}>
          <Text style={styles.name}>Overall Stats</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.bottomTableContainer}>
        <TouchableOpacity style={styles.innerLeftContainer}>
          <Text style={styles.name}>Points Table</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.innerRightContainer}>
          <Text style={styles.name}>All Teams</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default Content;
