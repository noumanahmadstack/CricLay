import { Linking, Alert } from 'react-native';
import { checkVersion } from "react-native-check-version";

const openStore = (url: string) => {
    Linking.openURL(url);
}
export const checkUpdates = async () => {
    const version = await checkVersion();
    if (version.needsUpdate) {
        Alert.alert(
            'Update Available',
            'A new version of the app is available. Please update to the latest version.',
            [
                {
                    text: 'Cancel',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                },
                { text: 'Update', onPress: () => openStore(version.url) },
            ],
            { cancelable: false }
        );
    }
};