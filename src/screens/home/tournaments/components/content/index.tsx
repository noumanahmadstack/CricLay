import {FC} from 'react';
import {TouchableOpacity, Text, View, Image} from 'react-native';
import styles from './styles';
const Content: FC = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.playIconContainer}>
        <Image
          style={styles.thumbnail}
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkvEy00RyOa85S49-1_lsRSv_X3Rt7162lUw&usqp=CAU',
          }}
        />
      </View>
      <View style={styles.bannerContainer}>
        <Text style={styles.bannerTitle}>PCL</Text>
        {/* <Text style={styles.bannerTitle}>{item}</Text> */}
        <Text style={styles.bannerDescText}>Pakistan Corporate League</Text>
      </View>
    </TouchableOpacity>
  );
};
export default Content;
