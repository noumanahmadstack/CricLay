import { FC } from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { LiveIcon } from '../../assets/svg';
import styles from './styles';
const VideoStreamingBtn: FC<{ title: string, onPress?: () => void }> = ({
    title,
    onPress
}) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.messageContainer}>
            <LiveIcon />
            <Text style={styles.message}>
                {title}
            </Text>
        </TouchableOpacity>
    );
};
export default VideoStreamingBtn;