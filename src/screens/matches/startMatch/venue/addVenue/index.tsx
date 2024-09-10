import {FC} from 'react';
import {View, KeyboardAvoidingView} from 'react-native';
import MapView, {Marker} from 'react-native-maps';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {useSelector, useDispatch} from 'react-redux';
import FormInput from '../../../../../components/formInput';
import GradientBtn from '../../../../../components/btns/gradientBtn';
import {SimpleScreenContainer} from '../../../../../components/screensContainers/screenContainers';
import {RootState} from '../../../../../redux/store/store';
import {
  setFullAddress,
  setLatitude,
  setLongitude,
  setSubTitle,
  setTitle,
} from '../../../../../redux/matches/matchVenues/reducer';
import {onCreateVenue} from '../../../../../redux/matches/matchVenues/action';
import styles from './styles';
const AddVenue: FC<any> = ({route}) => {
  const dispatch = useDispatch();
  const {lat, long, isLoading, title, subTitle} = useSelector(
    (state: RootState) => state.matchVenuesReducer,
  );  
  const {isAmateur} = route?.params
  return (
    <SimpleScreenContainer isBlue={true}>
      <View style={styles.autoCompleteContainer}>
        <GooglePlacesAutocomplete
          placeholder="Search"
          onFail={e => console.log(e)}
          fetchDetails={true}
          onPress={(data, details = null) => {
            if (details !== null) {
              dispatch(setLatitude(details.geometry.location.lat.toString()));
              dispatch(setLongitude(details.geometry.location.lng.toString()));
              dispatch(setFullAddress(details.formatted_address));
            }
          }}
          query={{
            key: 'AIzaSyCDz8mveU-vX1Tt4c3i7MW1BbaMGIY5S84',
            language: 'en',
          }}
        />
      </View>
      <KeyboardAvoidingView
        behavior="height"
        keyboardVerticalOffset={70}
        style={styles.keyboardStyle}>
        <MapView
          style={styles.map}
          region={{
            latitude: Number(lat), // Approximate center of Pakistan
            longitude: Number(long), // Approximate center of Pakistan
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          initialRegion={{
            latitude: 31.52037, // Approximate center of Pakistan
            longitude: 74.358749, // Approximate center of Pakistan
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}>
          <Marker
            coordinate={{latitude: Number(lat), longitude: Number(long)}}
            title={'Walton'}
            description={'Lahore'}
          />
        </MapView>
        <FormInput
          title="Landmark"
          placeholder="Add title for your location"
          containerStyle={styles.inputContainer}
          textInputContainerStyle={styles.inputFields}
          onChangeText={e => dispatch(setTitle(e))}
          value={title}
        />
        <FormInput
          title="Near By"
          placeholder="Add subtitle for your location"
          containerStyle={styles.inputContainer}
          textInputContainerStyle={styles.inputFields}
          onChangeText={e => dispatch(setSubTitle(e))}
          value={subTitle}
        />
        <GradientBtn
          title="Add Location"
          containerStyle={styles.btnContainer}
          loading={isLoading}
          onPress={onCreateVenue}
          isAmateur={isAmateur}
        />
      </KeyboardAvoidingView>
    </SimpleScreenContainer>
  );
};
export default AddVenue;
