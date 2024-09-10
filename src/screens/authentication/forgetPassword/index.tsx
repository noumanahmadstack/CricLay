import React from 'react';
import { Text, View } from 'react-native';
import ScreenContainer from '../../../components/screensContainers/authentication';
import FormInput from '../../../components/formInput';
import GradientBtn from '../../../components/btns/gradientBtn';
import styles from './styles';
const ForgetPassword: React.FC = () => {
  return (
    <ScreenContainer>
      <View style={styles.container}>
        <Text style={styles.title}>
          Forgot Password {'\n'}
          <Text style={styles.description}>
            Please enter the email or phone number associated with your account.
          </Text>
        </Text>
        <FormInput
          title="Email/Phone No"
          placeholder="Enter your Email"
          keyboardType="email-address"
        />
        <GradientBtn
          title="Submit"
          // onPress={onSubmitEmail}
          // disabled={disabledEmailSubmit}
          // loading={isLoadingEmail}
          containerStyle={styles.containerStyle}
        />
      </View>
    </ScreenContainer>
  );
};
export default ForgetPassword;
