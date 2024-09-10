import React, {FC} from 'react';
import {Modal, View, Text, TouchableOpacity} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import {LoginModalProps} from '../../../modelInterface/components/loginModal';
import colors from '../../../theme/colors';
import styles from './styles';
import {navigate} from '../../../routes/rootNavigation';
const LoginModal: FC<LoginModalProps> = ({visible, onRequestClose}) => {
  const handleOnLogin = () => {
    if (onRequestClose) {
      onRequestClose();
    }
    navigate('Login');
  };
  const handleOnRegister = () => {
    if (onRequestClose) {
      onRequestClose();
    }
    navigate('SignUp');
  };
  return (
    <Modal
      visible={visible}
      transparent={true}
      onRequestClose={onRequestClose}
      animationType="fade">
      <View style={styles.container}>
        <View style={styles.safeAreaViewContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.loginTitle}>LOGIN</Text>
            <Entypo
              onPress={onRequestClose}
              style={styles.crossIcon}
              size={22}
              color={colors.gray}
              name="circle-with-cross"
            />
          </View>
          <View style={styles.contentContainer}>
            <Text style={styles.desc}>Please login to access this feature</Text>
            <View style={styles.btnContainer}>
              <TouchableOpacity onPress={handleOnLogin} style={styles.loginBtn}>
                <Text style={styles.actionBtnTitle}>LOGIN</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={handleOnRegister}
                style={styles.registerBtn}>
                <Text style={styles.actionBtnTitle}>REGISTER</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};
export default LoginModal;
