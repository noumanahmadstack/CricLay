import {FC} from 'react';
import {View, Text} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import {TossModalHeaderProps} from '../../../../../modelInterface/screens/match';
import colors from '../../../../../theme/colors';
import styles from './styles';
const Header: FC<TossModalHeaderProps> = ({onPressCross}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Toss?</Text>
      <Entypo
        onPress={onPressCross}
        style={{}}
        size={22}
        color={colors.white}
        name="circle-with-cross"
      />
    </View>
  );
};
export default Header;
