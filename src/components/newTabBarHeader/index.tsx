import { FC } from 'react';
import { Text, TouchableOpacity, ScrollView } from 'react-native';
import { TabBarProps } from '../../modelInterface/components/tabBarheader';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';
import GradientColor from '../../theme/gradientColors';
const NewTabBarHeaders: FC<TabBarProps> = ({
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
        <ScrollView showsHorizontalScrollIndicator={false} style={styles.container} horizontal>
            {navigationState?.routes?.map((item, index) => (
                <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => handlePress(index)}
                    key={index}
                    style={[styles.itemContainer]}
                >
                    <LinearGradient
                        colors={(selectedIndex == index) ? (isAmateur ? GradientColor.amateurGradient : GradientColor.blueGradient) : GradientColor.whiteGradient}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        style={[styles.internalItemContainer]}
                    >
                        {item.LeftChild ?
                            <item.LeftChild style={selectedIndex == index ? styles.leftChild : null} focused={selectedIndex == index} />
                            : null}
                        {selectedIndex == index ?
                            <>
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
                            </>
                            : null
                        }
                    </LinearGradient>
                </TouchableOpacity>

            ))}
        </ScrollView>
    );
};
export default NewTabBarHeaders;
