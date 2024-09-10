import React from 'react';
import { useWindowDimensions } from 'react-native';
import { useSelector } from 'react-redux';
import { TabView } from 'react-native-tab-view';
import TabViewHeader from '../../../components/authentications/tabViewHeader';
import { RootState } from '../../../redux/store/store';
import {
  EmailProps,
  PhoneProps,
  RenderSceneProps,
} from '../../../modelInterface/screens/authentication/emailPhone';
import ScreenContainer from '../../../components/screensContainers/authentication';
import Email from '../../../components/authentications/email';
import Phone from '../../../components/authentications/phone';
import CombineText from '../../../components/combineText';
import { navigate } from '../../../routes/rootNavigation';
import styles from './styles';
const EmailPhone: React.FC<EmailProps & PhoneProps> = props => {
  const { isRegisteration } = props;
  const { routes, index } = useSelector((state: RootState) => state.loginReducer);
  const layout = useWindowDimensions();
  const renderScene = ({ route }: RenderSceneProps) => {
    switch (route.key) {
      case 'Email':
        return <Email {...props} />;
      case 'Phone':
        return <Phone {...props} />;
    }
  };
  return (
    <ScreenContainer>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={() => { }}
        renderTabBar={prop => <TabViewHeader {...prop} />}
        sceneContainerStyle={styles.sceneContainerStyle}
        initialLayout={{ width: layout.width }}
      />
      {isRegisteration ? (
        <CombineText
          text1="Already have an account? "
          text2="Login."
          onPress={() => navigate('Login')}
        />
      ) : (
        <CombineText
          text1="Don't have an account? "
          text2="Register here."
          onPress={() => navigate('SignUp')}
        />
      )}
    </ScreenContainer>
  );
};

export default EmailPhone;
