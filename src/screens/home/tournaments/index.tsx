import {FC, memo} from 'react';
// import {Dimensions} from 'react-native';
// import Carousel from "react-native-snap-carousel";
// import Content from './components/content';
import SlidersScreenContainer from '../components/slidersContainer';
// import styles from './styles';
const Tournaments: FC = () => {
  // const {width} = Dimensions.get('screen');
  return (
    <SlidersScreenContainer headerTitle="Tournaments">
      {/* <Carousel
                data={[1, 2, 3, 4,]}
                renderItem={({ item }) => <Content />}
                sliderWidth={width}
                keyExtractor={(item) => item.toString()}
                itemWidth={width / 1.08}
                contentContainerCustomStyle={styles.contentContainerStyle}
            /> */}
    </SlidersScreenContainer>
  );
};
export default memo(Tournaments);
