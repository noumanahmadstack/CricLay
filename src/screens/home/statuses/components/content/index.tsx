import {FC} from 'react';
import {Image, TouchableOpacity, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import GradientColor from '../../../../../theme/gradientColors';

const Content: FC = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <LinearGradient
        style={styles.internalContainer}
        colors={GradientColor.authenticationBtn}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}>
        <Image
          resizeMode="cover"
          style={styles.image}
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT26MbsATq5kVJoI0iuOrTbpNnvCUFMjJ5gpA&usqp=CAU',
          }}
        />
      </LinearGradient>
      <Text style={styles.title}>Sports the hairdo</Text>
    </TouchableOpacity>
  );
};
export default Content;
