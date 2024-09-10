import { launchCamera, launchImageLibrary, ImagePickerResponse } from 'react-native-image-picker';
import { toastMessage } from '../../components/toastMessages';
interface ImagePickerResult {
    success: boolean;
    resp?: ImagePickerResponse | null;
}
export const ImagePicker = async (): Promise<ImagePickerResult> => {
    try {
        const result = await launchImageLibrary({ mediaType: 'photo' });
        if (result.assets) {
            return {
                success: true,
                resp: result
            }
        } else if (result.didCancel) {
            toastMessage("Photo uploading is cancelled")
        } else if (result.errorCode) {
            toastMessage(result.errorCode)
        }
        return {
            success: false,
            resp: null
        }
    } catch (error) {
        return {
            success: false,
            resp: null
        }
    }
}
export const CameraPicker = async (): Promise<ImagePickerResult> => {
    try {
        const result = await launchCamera({ mediaType: 'photo' });
        if (result.assets) {
            return {
                success: true,
                resp: result
            }
        } else if (result.didCancel) {
            toastMessage("Photo uploading is cancelled")
        } else if (result.errorCode) {
            toastMessage(result.errorCode)
        }
        return {
            success: false,
            resp: null
        }
    } catch (error) {
        return {
            success: false,
            resp: null
        }
    }
}