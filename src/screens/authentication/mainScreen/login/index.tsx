import React from 'react';
import StartUp from '../../../../views/authentication/firstScreen';
import {NavigationProps} from '../../../../modelInterface/navigation';
const LoginStartUp: React.FC<NavigationProps> = ({navigation}) => {
  return (
    <StartUp
      text1="Don't have an account? "
      text2="Register here."
      onPressText2={() => navigation.navigate('SignUpStartUp')}
      onPressEmail={() => navigation.navigate('Login')}
    />
  );
};
export default LoginStartUp;
