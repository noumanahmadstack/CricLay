import React, {FC} from 'react';
import {TabBar} from 'react-native-tab-view';
import styles from './styles';
import renderLabel from './label';
import {TabViewHeaderProps} from '../../modelInterface/tabs';
const TabViewHeader: FC<TabViewHeaderProps> = props => {
  return (
    <TabBar
      {...props}
      indicatorStyle={styles.indicatorStyle}
      style={styles.style}
      indicatorContainerStyle={styles.indicatorContainerStyle}
      renderLabel={renderLabel}
    />
  );
};
export default TabViewHeader;