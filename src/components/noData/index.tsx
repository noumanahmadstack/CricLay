import {FC} from 'react';
import {Text} from 'react-native';
import styles from './styles';
const NoData: FC = () => {
  return <Text style={styles.title}>No Data Found!</Text>;
};
export default NoData;
