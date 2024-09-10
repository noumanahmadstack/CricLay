import {FC} from 'react';
import {Text} from 'react-native';
import {ErrorTextProps} from '../../modelInterface/components/errorText';
import styles from './styles';
const ErrorText: FC<ErrorTextProps> = ({error, textStyle}) => {
  if (error !== '') {
    return <Text style={[styles.txt, textStyle]}>{error}</Text>;
  } else {
    return null;
  }
};
export default ErrorText;
