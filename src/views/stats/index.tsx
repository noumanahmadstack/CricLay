import { FC, memo } from 'react';
import { Image, Text, View, ImageSourcePropType } from 'react-native';
import styles from './styles';

const StatsView: FC<{ imgSrc: ImageSourcePropType, value?: number | string, label: string }> = ({ imgSrc, value, label }) => {
    return (
        <View style={styles.statView}>
            <Image source={imgSrc}/>
            <Text
                numberOfLines={1}
                ellipsizeMode="tail"
                style={styles.stat}>
                {value}
            </Text>
            <Text
                numberOfLines={2}
                ellipsizeMode="tail"
                style={styles.title}>
                {label}
            </Text>
        </View>
    );
};
export default memo(StatsView);
