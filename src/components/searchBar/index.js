import {Text} from 'react-native';
import FormInput from '../formInput';
import {SearchIcon} from '../../assets/svg';
import styles from './styles';
const SearchBar = ({value, onChangeText, onSubmitEditing}) => {
  return (
    <FormInput
      placeholder="Search here..."
      LeftChild={<SearchIcon />}
      returnKeyType="search"
      textInputContainerStyle={styles.inputFields}
      RightChild={
        value?.length > 0 && (
          <Text onPress={onSubmitEditing} style={styles.searchBtn}>
            Search
          </Text>
        )
      }
      onSubmitEditing={onSubmitEditing}
      onChangeText={onChangeText}
      value={value}
    />
  );
};
export default SearchBar;
