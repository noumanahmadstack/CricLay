import {FC} from 'react';
import {View} from 'react-native';
import styles from './styles';
import ListHeaderComponent from '../listHeader';
import {
  ListHeaderProps,
  SlidersScreenContainerProps,
} from '../../../../modelInterface/screens/home';
const SlidersScreenContainer: FC<
  SlidersScreenContainerProps & ListHeaderProps
> = ({children, onPressViewAll, headerTitle, disableViewAll}) => {
  return (
    <View style={styles.container}>
      <ListHeaderComponent
        onPressViewAll={onPressViewAll}
        headerTitle={headerTitle}
        disableViewAll={disableViewAll}
      />
      {children}
    </View>
  );
};
export default SlidersScreenContainer;
