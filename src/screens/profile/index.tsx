import React, {FC, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Octicons from 'react-native-vector-icons/Octicons';
import FormInput from '../../components/formInput';
import {SimpleScreenContainer} from '../../components/screensContainers/screenContainers';
import colors from '../../theme/colors';
import styles from './styles';
import {RootState} from '../../redux/store/store';
import GradientBtn from '../../components/btns/gradientBtn';
import Feather from 'react-native-vector-icons/Feather';
import {
  setConfirmPassword,
  setCurrentPassword,
  setName,
  setNewPassword,
  setErrors,
} from '../../redux/profile/reducer';
import {
  onDelete,
  disableSubmit,
  onUpdateProfile,
} from '../../redux/profile/action';
const Profile: FC = () => {
  const dispatch = useDispatch();
  const {
    name: mainName,
    email,
    phoneNumber,
  } = useSelector((state: RootState) => state.userReducer.userData?.user) || {};
  const {
    name,
    password,
    newPassword,
    passwordConfirmation,
    isLoading,
    errors,
    isUpdating,
  } = useSelector((state: RootState) => state.profileReducer) || {};
  useEffect(() => {
    if (mainName) {
      dispatch(setName(mainName));
    }
  }, [dispatch, mainName]);
  return (
    <SimpleScreenContainer isBlue={true}>
      <KeyboardAwareScrollView style={styles.container}>
        {/* <TouchableOpacity disabled={true} onPress={() => toastMessage('Picture updating feature is not done yet!')} activeOpacity={0.8}>
                    <Image style={styles.dp} source={require('../../assets/images/logo.jpg')} />
                </TouchableOpacity> */}
        <FormInput
          title="Name"
          placeholder="Enter your name"
          LeftChild={
            <Octicons name="person" size={19} color={colors.disableFont} />
          }
          onChangeText={e => {
            dispatch(setErrors('')), dispatch(setName(e));
          }}
          value={name}
          error={
            errors == 'Please Enter Your Name'
              ? 'Please Enter Your Name'
              : errors == 'Name must should contain 3 letters'
              ? 'Name must should contain 3 letters'
              : null
          }
        />
        <FormInput
          title="Email"
          placeholder="Enter your Email"
          keyboardType="email-address"
          LeftChild={
            <Octicons name="mail" color={colors.disableFont} size={18} />
          }
          editable={false}
          value={email}
        />
        {phoneNumber ? (
          <FormInput
            title="Phone"
            placeholder="Enter your Phone No"
            keyboardType="number-pad"
            // onChangeText={(e) => { dispatch(setErrors('')), dispatch(setPhoneNumber(e)) }}
            value={phoneNumber}
            editable={false}
            maxLength={12}
            error={
              errors == 'Please enter your Phone Number'
                ? 'Please enter your Phone Number'
                : errors == 'Your Phone number must should be greater than 10'
                ? 'Your Phone number must should contains 10 digits'
                : null
            }
          />
        ) : null}
        <FormInput
          title="New Password"
          placeholder="Enter your New Password (Optional)"
          onChangeText={e => {
            dispatch(setErrors('')), dispatch(setNewPassword(e));
          }}
          isPassword={true}
          LeftChild={
            <Feather name={'unlock'} size={18} color={colors.disableFont} />
          }
          value={newPassword}
          error={
            errors == 'Please Enter Your Password'
              ? 'Please Enter Your New Password'
              : errors == 'Password Must be atleast 8 Characters Long'
              ? 'Password Must be atleast 8 Characters Long'
              : null
          }
        />
        <FormInput
          title="Confirm Password"
          placeholder="Enter your Confirm Password (Optional)"
          onChangeText={e => {
            dispatch(setErrors('')), dispatch(setConfirmPassword(e));
          }}
          isPassword={true}
          LeftChild={
            <Feather name={'unlock'} size={18} color={colors.disableFont} />
          }
          value={passwordConfirmation}
          error={
            errors == "Password doesn't match" ? "Password doesn't match" : null
          }
        />
        <FormInput
          title="Current Password"
          placeholder="Current password needed to save changes"
          onChangeText={e => {
            dispatch(setErrors('')), dispatch(setCurrentPassword(e));
          }}
          isPassword={true}
          LeftChild={
            <Feather name={'unlock'} size={18} color={colors.disableFont} />
          }
          value={password}
          error={
            errors == 'Please enter your current password to save changes'
              ? 'Please enter your current password to save changes'
              : null
          }
        />
        <GradientBtn
          title="Update"
          containerStyle={styles.btnContainer}
          disabled={disableSubmit({
            mainName,
            name,
            password,
            newPassword,
            passwordConfirmation,
          })}
          onPress={onUpdateProfile}
          loading={isUpdating}
        />
        <GradientBtn
          title="Delete Account"
          containerStyle={styles.btnContainer}
          onPress={onDelete}
          loading={isLoading}
          disabled={false}
        />
      </KeyboardAwareScrollView>
    </SimpleScreenContainer>
  );
};
export default Profile;
