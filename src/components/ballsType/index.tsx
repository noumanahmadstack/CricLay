import {FC, useState} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {
  BallTypeProps,
  BallTypeObjProps,
} from '../../modelInterface/components/ballType';
import styles from './styles';
const BallsType: FC<BallTypeProps> = ({onPress, value}) => {
  const balls = [
    {
      title: 'Leather\nBall',
      key: 'leather',
      image: require('../../assets/images/startMatch/leatherBall.png'),
    },
    {
      title: 'Tennnis\nBall',
      key: 'tennis',
      image: require('../../assets/images/startMatch/tenisBall.png'),
    },
  ];
  const initialValueIndex = () => {
    if (value) {
      return balls.findIndex((item: BallTypeObjProps) => item.key == value);
    } else {
      return '';
    }
  };
  const [selectedIndex, setSelectedIndex] = useState<number | string>(
    initialValueIndex(),
  );
  const handleOnSubmit = (item: BallTypeObjProps, index: number) => {
    setSelectedIndex(index);
    if (onPress) {
      onPress(item);
    }
  };
  return (
    <>
      <Text
        style={[
          styles.title,
          typeof selectedIndex === 'number' && styles.selectedTitle,
        ]}>
        Select Ball Type
      </Text>
      <View style={styles.ballsRowContainer}>
        {balls.map((item, index) => (
          <View key={index}>
            <TouchableOpacity
              key={index}
              onPress={() => handleOnSubmit(item, index)}
              style={[
                styles.ballsContainer,
                selectedIndex === index && styles.selectedBallsContainer,
              ]}>
              <Image style={styles.ballImage} source={item.image} />
            </TouchableOpacity>
            <Text
              style={[
                styles.ballName,
                selectedIndex === index && styles.selectedBallName,
              ]}>
              {item.title}
            </Text>
          </View>
        ))}
      </View>
    </>
  );
};
export default BallsType;
