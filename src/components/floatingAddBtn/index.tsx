import { FC } from 'react';
import { TouchableOpacity } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
import GradientColor from '../../theme/gradientColors';
import styles from './styles';
import colors from '../../theme/colors';
import { FloatingBtnProps } from '../../modelInterface/components/floatingBtn';
const FloatingTabBtn: FC<FloatingBtnProps> = ({ containerStyle, onPress, btnType,isAmateur }) => {  
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, containerStyle]}>
      <LinearGradient
        colors={isAmateur ? GradientColor.amateurGradient :GradientColor.authenticationBtn}
        style={styles.gradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}>
        {btnType == 'ticker' ?
          <MaterialCommunityIcons size={32} name="ticket-confirmation-outline" color={colors.white} />
          : <Entypo size={32} name="plus" color={colors.white} />
        }
      </LinearGradient>
    </TouchableOpacity>
  );
};
export default FloatingTabBtn;
