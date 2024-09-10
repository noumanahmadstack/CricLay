import React from 'react';
import StartUp from '../../../../views/authentication/firstScreen';
import {NavigationProps} from '../../../../modelInterface/navigation';
const SignUpStartUp: React.FC<NavigationProps> = ({navigation}) => {
  return (
    <StartUp
      text1="Already have an account? "
      text2="Login here."
      onPressText2={() => navigation.navigate('LoginStartUp')}
      onPressEmail={() => navigation.navigate('SignUp')}
    />
  );
};
export default SignUpStartUp;
