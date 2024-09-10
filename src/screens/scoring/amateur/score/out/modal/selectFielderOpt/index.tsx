import { FC } from 'react';
import {
    Image,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { TeamSelectIcon } from '../../../../../../../assets/svg';
import { SelectFielderOptProps } from '../../../../../../../modelInterface/screens/scoring';
import styles from './styles';
const SelectFielderOpt: FC<SelectFielderOptProps> = ({
    title,
    name,
    image,
    disabled,
    onPress
}) => {
    return (
        <View style={styles.matchPlayerContainer}>
            <Text style={styles.outTitle}>{title}</Text>
            <TouchableOpacity
                style={styles.playerContainer}
                disabled={disabled}
                onPress={onPress}>
                {!!name ? (
                    <Image
                        style={styles.dp}
                        source={image ? { uri: image } : require('../../../../../../../assets/images/user/user.png')}
                    />
                ) : (
                    <View style={styles.placeholderIconContainer}>
                        <TeamSelectIcon />
                    </View>
                )}
                <Text
                    style={[styles.playerName, !!name && styles.playerNameColor]}>
                    {!!name ? name : 'Select Batter'}
                </Text>
            </TouchableOpacity>
        </View>

    );
};
export default SelectFielderOpt;
