import {FC} from 'react';
import {Text, View, Share, Alert, Clipboard} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import styles from './styles';
import colors from '../../../../../theme/colors';
import {toastMessage} from '../../../../../components/toastMessages';
const SettingBar: FC<{
  shareableId: string;
  syncBalls: number;
  onPressActions: () => void;
  overlayUrl?: string;
}> = ({shareableId, syncBalls, onPressActions, overlayUrl}) => {
  const onShare = async () => {
    try {
      const result = await Share.share({
        message: `Criclay | Match ID: ${shareableId}`,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error: any) {
      Alert.alert(error.message);
    }
  };
  const handlePress = async () => {
    if (overlayUrl) {
      await Clipboard.setString(overlayUrl);
      toastMessage('Overlay URL is copied to clipboard!');
    }
  };
  return (
    <View style={styles.container}>
      <View style={styles.internalContainer}>
        <View style={styles.offlineDataCountContainer}>
          <Text onPress={onPressActions} style={styles.offlineDataCount}>
            {syncBalls}
          </Text>
          <Ionicons
            onPress={onPressActions}
            color={colors.fontBlack}
            size={18}
            name="settings-outline"
          />
        </View>
        {overlayUrl ? (
          <Text onPress={handlePress} style={styles.overlayURL}>
            Copy Overlay URL
          </Text>
        ) : null}
        <AntDesign
          onPress={onShare}
          size={16}
          name="sharealt"
          color={colors.fontBlack}
        />
      </View>
      <View style={styles.seprator} />
    </View>
  );
};
export default SettingBar;
