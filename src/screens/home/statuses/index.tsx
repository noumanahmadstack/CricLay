import {FC, memo} from 'react';
import {View, FlatList} from 'react-native';
import Content from './components/content';
import Seprator from './components/seprator';
import styles from './styles';
const Statuses: FC = () => {
  return (
    <View>
      <FlatList
        data={[1, 2, 3, 4, 5, 6, 7, 8, 8, 9, 9]}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerStyle}
        ItemSeparatorComponent={Seprator}
        renderItem={() => <Content />}
      />
    </View>
  );
};
export default memo(Statuses);
