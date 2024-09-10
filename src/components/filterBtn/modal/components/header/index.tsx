import {FC} from 'react';
import {View, Text, TextInputProps} from 'react-native';
import {DropDownModalHeaderProps} from '../../../../../modelInterface/components/dropDown';
import {InputProps} from '../../../../../modelInterface/components/formInput';
import styles from './styles';

const Header: FC<DropDownModalHeaderProps & InputProps & TextInputProps> = ({
  headerTitle,
}) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.titleText}>{headerTitle}</Text>
    </View>
  );
};
export default Header;
