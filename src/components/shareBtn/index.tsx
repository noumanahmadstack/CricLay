import { FC } from 'react';
import { TouchableOpacity } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import colors from '../../theme/colors';
const ShareBtn: FC<{ onPress: () => void }> = ({ onPress }) => {
    return (
        <TouchableOpacity
            onPress={onPress}>
            <Entypo name="share-alternative" size={24} color={colors.white} />
        </TouchableOpacity>
    );
};
export default ShareBtn;