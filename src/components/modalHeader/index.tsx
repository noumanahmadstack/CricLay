import { FC } from 'react';
import { View, Text } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ModalHeaderProps } from '../../modelInterface/components/modalHeader';
import colors from '../../theme/colors';
import styles from './styles';
const ModalHeader: FC<ModalHeaderProps> = ({onCancel, onBack, title,tournamentType,isAmateur}) => {
  const handleOnCancel = () => {
    if (onCancel) {
      onCancel();
    }
  };
  const handleOnBack = () => {
    if (onBack) {
      onBack();
    }
  };
  return (
    <View style={[styles.container, isAmateur && styles.isAmateurBackground]}>
      {!!onBack && (
        <Ionicons
          onPress={handleOnBack}
          size={18}
          color={colors.white}
          style={styles.backIcon}
          name="arrow-back"
        />
      )}
      <Text style={styles.title}>{title}</Text>
      {!!onCancel && (
        <Entypo
          onPress={handleOnCancel}
          size={18}
          color={colors.white}
          style={styles.crossIcon}
          name="circle-with-cross"
        />
      )}
    </View>
  );
};
export default ModalHeader;
