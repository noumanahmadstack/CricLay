import React from 'react';
import {Text, View} from 'react-native';
import {PersonIcon} from '../../../assets/svg';
import colors from '../../../theme/colors';
import LoginBtn from '../../../components/btns/loginBtns';
import CombineText from '../../../components/combineText';
import ScreenContainer from '../../../components/screensContainers/authentication';
import {StartUpInterface} from '../../../modelInterface/screens/authentication/mainScreen/startUpScreen/mainComponent';
import styles from './styles';
const StartUp: React.FC<StartUpInterface> = ({
  text1,
  text2,
  onPressText2,
  onPressEmail,
  // onPressGoogle,
  // onPressFacebook,
  // onPressApple,
}) => {
  return (
    <ScreenContainer>
      <View style={styles.container}>
        <Text style={styles.title}>Welcome to Cricklay!</Text>
        <LoginBtn
          title="Email & Phone No"
          LeftChild={<PersonIcon />}
          containerStyle={styles.emailBtnContainer}
          titleColor={colors.black}
          onPress={onPressEmail}
        />
        {/* {Platform.OS === "android" ?
                    <LoginBtn
                        title="Login with Google"
                        LeftChild={<GoogleIcon />}
                        containerStyle={styles.googleBtnContainer}
                        titleColor={colors.white}
                        onPress={onPressGoogle}
                    />
                    :
                    <LoginBtn
                        title="Login with Apple"
                        LeftChild={<AppleIcon />}
                        containerStyle={styles.appleBtnContainer}
                        titleColor={colors.white}
                        onPress={onPressApple}
                    />
                }
                <LoginBtn
                    title="Login with Facebook"
                    LeftChild={<FacebookIcon />}
                    containerStyle={styles.facebookBtnContainer}
                    titleColor={colors.white}
                    onPress={onPressFacebook}
                /> */}
      </View>
      <CombineText text1={text1} text2={text2} onPress={onPressText2} />
    </ScreenContainer>
  );
};
export default StartUp;
