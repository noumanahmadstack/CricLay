import {FC} from 'react';
import {ActivityIndicator} from 'react-native';
import {SimpleLoaderProps} from '../../../modelInterface/components/loaders';
import colors from '../../../theme/colors';
import styles from './styles';
const SimpleLoader: FC<SimpleLoaderProps> = ({isLoading}) => {
  return (
    <ActivityIndicator
      animating={isLoading}
      size="large"
      style={styles.container}
      color={colors.themeBlue}
    />
  );
};
export default SimpleLoader;
