import React from 'react';
import {TabBar, TabBarProps} from 'react-native-tab-view';
import colors from '../../../theme/colors';
import styles from './styles';
const TabViewHeader: React.FC<TabBarProps<any>> = props => {
  return (
    <TabBar
      {...props}
      indicatorStyle={styles.indicatorStyle}
      style={styles.style}
      activeColor={colors.fontBlack}
      labelStyle={styles.labelStyle}
      inactiveColor={colors.disableFont}
      indicatorContainerStyle={styles.indicatorContainerStyle}
    />
  );
};
export default TabViewHeader;
