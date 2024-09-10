import {FC} from 'react';
import {TouchableOpacity, Text, View, Image} from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';
import colors from '../../../../../theme/colors';
import {PlayIcon} from '../../../../../assets/svg';
const Content: FC = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.playIconContainer}>
        <PlayIcon style={styles.playIcon} />
        <Image
          style={styles.thumbnail}
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkvEy00RyOa85S49-1_lsRSv_X3Rt7162lUw&usqp=CAU',
          }}
        />
      </View>
      <View style={styles.bannerContainer}>
        <Text style={styles.bannerTitle}>
          Mobile T20 Cricket Champion Trohpy 2023
        </Text>
        <SimpleLineIcons color={colors.black} size={16} name="share" />
      </View>
      <View style={styles.bannerInnerContainer}>
        <View style={styles.timeViewContainer}>
          <Text style={styles.bannerDescText}>23 Aug 2023 | </Text>
          <MaterialCommunityIcons
            size={16}
            color={colors.disableFont}
            name="eye-outline"
          />
          <Text style={styles.bannerDescText}> 88.1k</Text>
        </View>
        <Text style={styles.bannerDescText}>15:23 mins</Text>
      </View>
    </TouchableOpacity>
  );
};
export default Content;
