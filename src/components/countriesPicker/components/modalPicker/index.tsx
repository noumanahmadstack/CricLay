import React, {useState} from 'react';
import {FlatList, Modal, SafeAreaView, View} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import {
  CountriesPickerProps,
  ModalContentProps,
} from '../../../../modelInterface/components/countriesPicker';
import {countriesList} from '../../../../utilis/countriesLists';
import colors from '../../../../theme/colors';
import styles from './styles';
import Content from './components/content';
import CountrySearchInput from './components/input';
import {CountryProps} from '../../../../modelInterface/country';
const ModalPicker: React.FC<CountriesPickerProps> = ({
  isVisible,
  onClose,
  onConfirm,
}) => {
  const [searchKeywords, setSearchKeywords] = useState<string>('');
  const handlePress = (e: ModalContentProps) => {
    if (onClose && onConfirm) {
      onConfirm(e);
      onClose();
    }
  };
  const searchCountries = (
    query: string,
    countryList: CountryProps[],
  ): CountryProps[] => {
    const normalizedQuery = query.toLowerCase();
    return countryList.filter(country =>
      country.name.toLowerCase().includes(normalizedQuery),
    );
  };
  return (
    <Modal visible={isVisible} animationType="fade" onRequestClose={onClose}>
      <SafeAreaView style={styles.container}>
        <Entypo
          onPress={onClose}
          style={styles.crossBtn}
          name="circle-with-cross"
          size={22}
          color={colors.disableFont}
        />
        <CountrySearchInput
          placeholder="Search your country here..."
          onChangeText={setSearchKeywords}
        />
        <FlatList
          data={searchCountries(searchKeywords, countriesList)}
          keyExtractor={({code}) => code}
          style={styles.flatlistStyle}
          ItemSeparatorComponent={() => <View style={styles.seprator} />}
          renderItem={({item}) => (
            <Content {...item} onPress={e => handlePress(e)} />
          )}
        />
      </SafeAreaView>
    </Modal>
  );
};
export default ModalPicker;
