import {FC} from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Feather from 'react-native-vector-icons/Feather';
import Octicons from 'react-native-vector-icons/Octicons';
import colors from '../../../theme/colors';
import FormInput from '../../../components/formInput';
import GradientBtn from '../../btns/gradientBtn';
import {PhoneProps} from '../../../modelInterface/screens/authentication/emailPhone';
import {navigate} from '../../../routes/rootNavigation';
const Phone: FC<PhoneProps> = ({
  onChangePhone,
  onChangePasswordForPhone,
  onChangeNameForPhone,
  onSubmitPhone,
  onSelectCountry,
  errorsForPhone,
  phone,
  nameForPhoneNumber,
  passwordForPhone,
  isLoading,
  disableSubmit,
  country,
  isRegisteration,
}) => {
  return (
    <KeyboardAwareScrollView>
      {isRegisteration && (
        <FormInput
          title="Name"
          placeholder="Enter your name"
          LeftChild={
            <Octicons name="person" size={19} color={colors.disableFont} />
          }
          onChangeText={onChangeNameForPhone}
          error={
            errorsForPhone == 'Please Enter Your Name'
              ? 'Please Enter Your Name'
              : errorsForPhone == 'Name must should contain 3 letters'
              ? 'Name must should contain 3 letters'
              : ''
          }
          value={nameForPhoneNumber}
        />
      )}
      <FormInput
        title="Phone"
        placeholder="Enter your Phone No"
        keyboardType="number-pad"
        onChangeText={onChangePhone}
        isCountryPickerEnable={true}
        value={phone}
        country={country}
        maxLength={11}
        onConfirm={onSelectCountry}
        error={
          errorsForPhone == 'Please enter your Phone Number'
            ? 'Please enter your Phone Number'
            : errorsForPhone ==
              'Your Phone number must should be greater than 10'
            ? 'Your Phone number must should contains 10 digits'
            : null
        }
      />
      <FormInput
        title="Password"
        placeholder="Enter your Password"
        onChangeText={onChangePasswordForPhone}
        isPassword={true}
        LeftChild={
          <Feather name={'unlock'} size={18} color={colors.disableFont} />
        }
        forget={!isRegisteration}
        onPressforgetPassword={() => navigate('ForgetPassword')}
        value={passwordForPhone}
        error={
          errorsForPhone == 'Please Enter Your Password'
            ? 'Please Enter Your Password'
            : errorsForPhone == 'Password Must be atleast 8 Characters Long'
            ? 'Password Must be atleast 8 Characters Long'
            : null
        }
      />
      <GradientBtn
        title={isRegisteration ? 'Sign Up' : 'Sign In'}
        onPress={onSubmitPhone}
        disabled={disableSubmit}
        loading={isLoading}
        containerStyle={{marginVertical: 20}}
      />
    </KeyboardAwareScrollView>
  );
};
export default Phone;
