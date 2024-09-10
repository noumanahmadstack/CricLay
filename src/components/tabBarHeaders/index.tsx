import {FC} from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {TabBarProps} from '../../modelInterface/components/tabBarheader';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import GradientColor from '../../theme/gradientColors';
const TabBarHeaders: FC<TabBarProps> = ({
  navigationState,
  onPress,
  selectedIndex,
  leftCount,
  isAmateur
}) => {
  const handlePress = (index: number) => {
    if (onPress) {
      onPress(index);
    }
  };
  return (
    <View style={styles.containers}>

      {navigationState?.routes?.map((item, index) => (
        <TouchableOpacity
          onPress={() => handlePress(index)}
          key={index}
          style={[
            styles.itemContainer
          ]}>
            <LinearGradient
               colors={ (selectedIndex == index ) ? (isAmateur ? GradientColor.amateurGradient:GradientColor.blueGradient):GradientColor.transparentGradient}
               start={{ x: 0, y: 0 }}
               end={{ x: 1, y: 0 }}
               style={[styles.itemContainer]}
            >
          <Text
            style={[
              styles.title,
              selectedIndex == index && styles.selectedTitle,
            ]}>
            {item.title}
          </Text>
          {typeof leftCount === 'number' && index == 0 && (
            <Text
              style={[
                styles.title,
                selectedIndex == index && styles.selectedTitle,
              ]}>
              {' '}
              ({leftCount})
            </Text>
          )}
          </LinearGradient>
        </TouchableOpacity>
      ))}
    </View>
  );
};
export default TabBarHeaders;
