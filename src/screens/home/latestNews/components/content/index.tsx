import {FC} from 'react';
import {TouchableOpacity, Text, View, Image} from 'react-native';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import styles from './styles';
import colors from '../../../../../theme/colors';
const Content: FC = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image
        style={styles.thumbnail}
        source={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkvEy00RyOa85S49-1_lsRSv_X3Rt7162lUw&usqp=CAU',
        }}
      />
      <View style={styles.bannerContainer}>
        <Text style={styles.bannerTitle}>TATA IPL 2023 REWIND - WEEK 8</Text>
        <SimpleLineIcons color={colors.black} size={16} name="share" />
      </View>
      <View style={styles.bannerInnerContainer}>
        <Text style={styles.bannerDescText}>23 Aug 2023</Text>
      </View>
    </TouchableOpacity>
  );
};
export default Content;
