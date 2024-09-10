import { FC } from 'react';
import { Text, TouchableOpacity, Image } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import LinearGradient from 'react-native-linear-gradient';
import GradientColor from '../../theme/gradientColors';
import { TeamIconTitleProps } from '../../modelInterface/components/teamIconTitle';
import styles from './styles';
import ErrorText from '../errorText';
import { TickIcon, VerifiedIcon } from '../../assets/svg';
import { View } from 'react-native';
import colors from '../../theme/colors';
const TeamIconTitle: FC<TeamIconTitleProps> = ({
  name,
  isSelected,
  isVerified,
  over,
  onPress,
  logoURL,
  errorText,
}) => {
  const onHandlePress = () => {
    if (onPress) {
      onPress();
    }
  };
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onHandlePress}
      style={styles.container}>
      <LinearGradient
        colors={
          isSelected
            ? GradientColor.authenticationBtn
            : GradientColor.transparentGradient
        }
        style={styles.gradientContainer}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}>
          <Image
            resizeMode="contain"
            style={styles.teamPlaceholder}
            source={
              logoURL
                ? { uri: logoURL }
                : require('../../assets/images/teams/Icon.jpg')
            }
          />
      </LinearGradient>
      <View style={styles.row}>
      <Text style={[styles.name, !!isSelected && styles.selectedName]}>
        {name}
        </Text>
        {isVerified &&
             <MaterialIcons size={20} color={colors.themeBlue} name='verified' />
          }
        </View>
      {over ? <Text style={styles.over}>{over} Ov's</Text> : null}
      {errorText ? <ErrorText error={errorText} /> : null}
    </TouchableOpacity>
  );
};
export default TeamIconTitle;
