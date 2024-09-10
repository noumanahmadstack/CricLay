import {FC} from 'react';
import FormInput from '../../../../components/formInput';
import {SearchIcon} from '../../../../assets/svg';
import styles from './styles';
const Players: FC = () => {
  return (
    <>
      <FormInput
        placeholder="Search here..."
        textInputContainerStyle={styles.inputFields}
        LeftChild={<SearchIcon />}
      />
    </>
  );
};
export default Players;
