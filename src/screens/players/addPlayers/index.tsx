import React, {FC} from 'react';
import {View, ScrollView, TouchableOpacity, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {RootState} from '../../../redux/store/store';
import {
  CityIcon,
  CountryIcon,
  EmptyProfilePic,
  NameIcon,
} from '../../../assets/svg';
import FormInput from '../../../components/formInput';
import GradientBtn from '../../../components/btns/gradientBtn';
import {SimpleScreenContainer} from '../../../components/screensContainers/screenContainers';
import styles from './styles';
import {
  setCity,
  setCountry,
  setEmail,
  setName,
} from '../../../redux/players/addPlayer/reducer';
import {disableSubmit, onSubmit} from '../../../redux/players/addPlayer/action';
import {AddPlayersRoutesProps} from '../../../modelInterface/routes/players';
const AddPlayers: FC<AddPlayersRoutesProps | any> = ({route}) => {
  const {teamId,isAmateur} = route.params || {};
  const dispatch = useDispatch();
  const {name, email, country, city, isLoading} = useSelector(
    (state: RootState) => state.addPlayerReducer,
  );
  return (
    <SimpleScreenContainer>
      <ScrollView>
        <View style={styles.dpContainer}>
          <TouchableOpacity style={styles.emptyDp}>
            <EmptyProfilePic />
          </TouchableOpacity>
          <Text style={styles.addPhotoTitle}>Add Photo</Text>
        </View>
        <FormInput
          title="Name"
          placeholder="Enter your name"
          textInputContainerStyle={styles.inputFields}
          LeftChild={<NameIcon />}
          autoCapitalize={'words'}
          containerStyle={styles.containerStyle}
          onChangeText={e => {
            dispatch(setName(e));
          }}
          value={name}
        />
        <FormInput
          title="Email"
          placeholder="Enter your email"
          textInputContainerStyle={styles.inputFields}
          LeftChild={<NameIcon />}
          containerStyle={styles.containerStyle}
          onChangeText={e => {
            dispatch(setEmail(e));
          }}
          value={email}
        />
        <FormInput
          title="Country"
          placeholder="Select your country"
          textInputContainerStyle={styles.inputFields}
          LeftChild={<CountryIcon />}
          containerStyle={styles.containerStyle}
          onChangeText={e => {
            dispatch(setCountry(e));
          }}
          value={country}
        />
        <FormInput
          title="City"
          placeholder="Select your city"
          LeftChild={<CityIcon />}
          textInputContainerStyle={styles.inputFields}
          containerStyle={styles.containerStyle}
          onChangeText={e => {
            dispatch(setCity(e));
          }}
          value={city}
        />
      </ScrollView>
      <View style={{paddingBottom: 20}}>
        <GradientBtn
          title="Add Player"
          onPress={() => onSubmit({teamId})}
          disabled={disableSubmit()}
          loading={isLoading}
          isAmateur={isAmateur}
        />
      </View>
    </SimpleScreenContainer>
  );
};
export default AddPlayers;
