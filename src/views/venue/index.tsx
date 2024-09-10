import {FC} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useDispatch} from 'react-redux';
import {LocationIconWhite} from '../../assets/svg';
import {StartMatchState} from '../../modelInterface/redux/startMatch/reducer';
import {setVenue} from '../../redux/matches/startMatch/reducer';
import {goBack} from '../../routes/rootNavigation';
import styles from './styles';
const VenueView: FC<StartMatchState['venue']> = props => {
  const dispatch = useDispatch();
  const {title, fullAddress} = props || {};
  const onHandlePress = () => {
    dispatch(setVenue(props));
    goBack();
  };
  return (
    <TouchableOpacity
      onPress={onHandlePress}
      activeOpacity={0.7}
      style={styles.container}>
      <View style={styles.locationIconContainer}>
        <LocationIconWhite />
      </View>
      <View style={styles.titleDescContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.desc}>{fullAddress}</Text>
      </View>
    </TouchableOpacity>
  );
};
export default VenueView;
