import React, { FC, useCallback } from 'react';
import { View, ScrollView, TouchableOpacity, Text, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../redux/store/store';
import {
    EmptyProfilePic,
    ImageUploader,
    NameIcon,
} from '../../../../assets/svg';
import FormInput from '../../../../components/formInput';
import GradientBtn from '../../../../components/btns/gradientBtn';
import { SimpleScreenContainer } from '../../../../components/screensContainers/screenContainers';
import styles from './styles';
import { AddPlayersRoutesProps } from '../../../../modelInterface/routes/players';
import { ImagePicker } from '../../../../utilis/imagePicker';
import { PhoneProps } from '../../../../modelInterface/screens/authentication/emailPhone';
import { setCnicPicture, setCountryCode, setEmail, setMessage, setName, setPhoneNumber, setProfilePicture } from '../../../../redux/profile/reducer';
import { claimProfile, disableClaim } from '../../../../redux/profile/action';
const ClaimPlayer: FC<AddPlayersRoutesProps | PhoneProps | any> = ({ route }) => {
    const { playerId } = route.params || {};
    const dispatch = useDispatch();
    const { name, email, phoneNumber, isLoading, countryCode, message, profilePicture, idCardPicture } = useSelector(
        (state: RootState) => state.profileReducer,
    );
    const onHandleImage = async () => {
        const { success, resp } = await ImagePicker()
        if (success && resp?.assets) {
            dispatch(setProfilePicture(resp?.assets[0]))
        }
    }
    const onHandleCnicImage = async () => {
        const { success, resp } = await ImagePicker()
        if (success && resp?.assets) {
            dispatch(setCnicPicture(resp?.assets[0]))
        }
    }
    const onSelectCountry = useCallback((e: any) => {
        dispatch(setCountryCode(e));
    }, [countryCode])
    return (
        <SimpleScreenContainer>
            <ScrollView>
                <View style={styles.dpContainer}>
                    <TouchableOpacity style={styles.emptyDp} onPress={onHandleImage}>
                        {
                            profilePicture.uri ?
                            <Image source={profilePicture} style={styles.emptyDp} />
                            :
                            <EmptyProfilePic/>
                        }
                    </TouchableOpacity>
                    <Text style={styles.addPhotoTitle}>Add Photo</Text>
                </View>
                <FormInput
                    title="Name"
                    placeholder="Enter your name"
                    textInputContainerStyle={styles.inputFields}
                    LeftChild={<NameIcon />}
                    autoCapitalize={'words'}
                    containerStyle={styles.containerStyle}
                    onChangeText={e => {
                        dispatch(setName(e));
                    }}
                    value={name}
                />
                <FormInput
                    title="Email"
                    placeholder="Enter your email"
                    textInputContainerStyle={styles.inputFields}
                    LeftChild={<NameIcon />}
                    containerStyle={styles.containerStyle}
                    onChangeText={e => {
                        dispatch(setEmail(e));
                    }}
                    value={email}
                />
                <FormInput
                    title="Phone"
                    placeholder="Enter your Phone No"
                    keyboardType="number-pad"
                    textInputContainerStyle={styles.inputFields}
                    containerStyle={styles.containerStyle}
                    onChangeText={e => {
                        dispatch(setPhoneNumber(e));
                    }}
                    isCountryPickerEnable={true}
                    value={phoneNumber}
                    country={countryCode}
                    maxLength={11}
                    onConfirm={(e: any) => onSelectCountry(e)}
                />
                <FormInput
                    title="Message"
                    placeholder="Add your message"
                    textInputContainerStyle={styles.inputFields}
                    LeftChild={<NameIcon />}
                    containerStyle={styles.containerStyle}
                    onChangeText={e => {
                        dispatch(setMessage(e));
                    }}
                    value={message}
                />
                <Text style={styles.addCnicTitle}>Upload and Attach CNIC</Text>
                <View style={styles.emptyCnic}>
                    <TouchableOpacity style={styles.emptyCnic}>
                        {
                            idCardPicture.uri ? 
                            <Image resizeMode="contain" source={idCardPicture} style={styles.cnicContainer}/>
                            :
                            <>
                            <ImageUploader />
                            <Text style={styles.addPhotoTitle}>Click here to Upload</Text>
                            </> 
                        }
                        <TouchableOpacity style={styles.chooseFile} onPress={onHandleCnicImage}>
                            <Text>Choose File</Text>
                        </TouchableOpacity>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            <View style={{ paddingBottom: 10 }}>
                <GradientBtn
                    title="Claim Profile"
                    onPress={() => claimProfile(playerId)}
                    disabled={disableClaim()}
                    loading={isLoading}
                />
            </View>
        </SimpleScreenContainer>
    );
};
export default ClaimPlayer;
