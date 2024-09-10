import React, {useState} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {CountriesPickProps} from '../../modelInterface/components/countriesPicker';
import colors from '../../theme/colors';
import ModalPicker from './components/modalPicker';
import styles from './styles';
const CountriesPicker: React.FC<CountriesPickProps> = ({
  onConfirm,
  country,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <ModalPicker
        isVisible={isOpen}
        onClose={() => setIsOpen(false)}
        onConfirm={onConfirm}
      />
      <TouchableOpacity
        onPress={() => setIsOpen(prevState => !prevState)}
        style={styles.container}>
        <MaterialIcons
          color={colors.grayIcon}
          size={22}
          name={isOpen ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
        />
        <Text style={styles.country}>{country?.emoji}</Text>
      </TouchableOpacity>
    </>
  );
};
export default CountriesPicker;
