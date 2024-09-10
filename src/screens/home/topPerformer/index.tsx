import {FC, memo} from 'react';
// import {FlatList, Dimensions} from 'react-native';
// import Carousel from "react-native-snap-carousel";
// import Content from './components/content';
// import styles from './styles';
import SlidersScreenContainer from '../components/slidersContainer';
const TopScorrer: FC = () => {
  // const {width} = Dimensions.get('screen');
  return (
    <SlidersScreenContainer headerTitle="Top Performer" disableViewAll={true}>
      {/* <Carousel
                data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 0]}
                renderItem={() => <Content />}
                sliderWidth={width}
                enableMomentum={true}
                initialNumToRender={2}
                keyExtractor={(item) => item.toString()}
                maxToRenderPerBatch={2}
                itemWidth={width / 1.08}
                contentContainerCustomStyle={styles.contentContainerStyle}
            /> */}
    </SlidersScreenContainer>
  );
};
export default memo(TopScorrer);
