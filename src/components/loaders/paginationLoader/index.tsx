import {memo, FC} from 'react';
import {ActivityIndicator} from 'react-native';
import {PaginationLoaderProps} from '../../../modelInterface/components/paginationLoader';
import colors from '../../../theme/colors';
import styles from './styles';

const PaginationLoader: FC<PaginationLoaderProps> = memo(
  ({isLoading, style}) => {
    return (
      <ActivityIndicator
        style={[styles.container, style]}
        animating={isLoading ? isLoading : false}
        color={colors.themeBlue}
        size={22}
      />
    );
  },
);
export default PaginationLoader;
