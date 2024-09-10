import {FC} from 'react';
import {View, Text, TextInputProps} from 'react-native';
import {DropDownModalHeaderProps} from '../../../../../modelInterface/components/dropDown';
import {InputProps} from '../../../../../modelInterface/components/formInput';
import styles from './styles';
import colors from '../../../../../theme/colors';

const Header: FC<DropDownModalHeaderProps & InputProps & TextInputProps> = ({
  headerTitle,
  isAmateur
}) => {
  return (
    <View style={[styles.headerContainer,{backgroundColor:isAmateur ? colors.darkAmateurPink:colors.themeBlue}]}>
      <Text style={styles.titleText}>{headerTitle}</Text>
    </View>
  );
};
export default Header;
