import React, { FC } from 'react';
import {
  SafeAreaView,
  View,
  Image,
  Text,
  TouchableOpacity,
  Linking,
} from 'react-native';
import { useSelector } from 'react-redux';
import Fontisto from 'react-native-vector-icons/Fontisto';
import { RootState } from '../../../redux/store/store';
import { navigate } from '../../rootNavigation';
import styles from './styles';
import { onLogout } from '../../../redux/user/action';
import colors from '../../../theme/colors';
import Entypo from 'react-native-vector-icons/Entypo';
import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { DrawerContentComponentProps } from '@react-navigation/drawer/lib/typescript/src/types';
const CustomDrawer: FC<DrawerContentComponentProps> = (props) => {
  const { name, email, id, player } =
    useSelector((state: RootState) => state.userReducer.userData?.user) || {};
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.dpContainer}>
        <TouchableOpacity
          style={styles.profileContainer}
          onPress={() => (id ? navigate('PlayerProfile', { name, id: player?.id, shareableId: player?.shareableId }) : navigate('LoginStartUp'))}
          activeOpacity={0.8}>
          <Image
            resizeMode="contain"
            style={styles.dp}
            source={player?.avatarUrl ? { uri: player.avatarUrl } : require('../../../assets/images/logo.jpg')}
          />
          {
            id &&
            <TouchableOpacity style={styles.editView} onPress={() => navigate('Profile')}>
              <Entypo name='edit' size={18} />
            </TouchableOpacity>
          }
        </TouchableOpacity>
        <Text
          onPress={() => (id ? navigate('Profile') : navigate('LoginStartUp'))}
          disabled={!!id}
          style={styles.name}>
          {name || 'Sign In / Sign up'}
        </Text>
        {email && <Text style={styles.email}>{email}</Text>}
      </SafeAreaView>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <SafeAreaView style={styles.itemsContainer}>
        {id ? (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={onLogout}
            style={styles.logoutContainer}>
            <Fontisto
              size={26}
              name="power"
              color={colors.themeBlue}
              onPress={onLogout}
            />
            <Text style={styles.logoutTxt}>Logout</Text>
          </TouchableOpacity>
        ) : null}
        <View style={styles.drawerPoweredByTextContainer}>
          <Text style={styles.powerBy}>Powered by </Text>
          <TouchableOpacity
            onPress={() => Linking.openURL('https://www.eritheialabs.com')}>
            <Text style={styles.eritheiaTitle}>Eritheia Labs</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};
export default CustomDrawer;
