import React from 'react';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import Feather from 'react-native-vector-icons/Feather';
import Octicons from 'react-native-vector-icons/Octicons';
import FormInput from '../../../components/formInput';
import GradientBtn from '../../btns/gradientBtn';
import {EmailProps} from '../../../modelInterface/screens/authentication/emailPhone';
import {navigate} from '../../../routes/rootNavigation';
import colors from '../../../theme/colors';
const Email: React.FC<EmailProps> = ({
  onChangeEmail,
  onChangePasswordForEmail,
  onSubmitEmail,
  onChangeNameForEmail,
  errorsForEmail,
  email,
  nameForEmail,
  passwordForEmail,
  disableSubmit,
  isLoading,
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
          onChangeText={onChangeNameForEmail}
          error={
            errorsForEmail == 'Please Enter Your Name'
              ? 'Please Enter Your Name'
              : errorsForEmail == 'Name must should contain 3 letters'
              ? 'Name must should contain 3 letters'
              : ''
          }
          value={nameForEmail}
        />
      )}
      <FormInput
        title="Email"
        placeholder="Enter your Email"
        keyboardType="email-address"
        LeftChild={
          <Octicons name="mail" color={colors.disableFont} size={18} />
        }
        onChangeText={onChangeEmail}
        value={email}
        error={
          errorsForEmail == 'Please Enter Your Email'
            ? 'Please Enter Your Email'
            : errorsForEmail == 'Please Enter a Valid Email'
            ? 'Please Enter a Valid Email'
            : null
        }
      />
      <FormInput
        title="Password"
        placeholder="Enter your Password"
        onChangeText={onChangePasswordForEmail}
        LeftChild={
          <Feather name={'unlock'} size={18} color={colors.disableFont} />
        }
        isPassword={true}
        forget={!isRegisteration}
        onPressforgetPassword={() => navigate('ForgetPassword')}
        value={passwordForEmail}
        error={
          errorsForEmail == 'Please Enter Your Password'
            ? 'Please Enter Your Password'
            : errorsForEmail == 'Password Must be atleast 8 Characters Long'
            ? 'Password Must be atleast 8 Characters Long'
            : null
        }
      />
      <GradientBtn
        title={isRegisteration ? 'Sign Up' : 'Sign In'}
        onPress={onSubmitEmail}
        disabled={disableSubmit}
        loading={isLoading}
        containerStyle={{marginVertical: 20}}
      />
    </KeyboardAwareScrollView>
  );
};
export default Email;
