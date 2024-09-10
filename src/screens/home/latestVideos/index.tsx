import {FC, memo} from 'react';
// import {Dimensions} from 'react-native';
// import Carousel from 'react-native-snap-carousel';
// import Content from './components/content';
import SlidersScreenContainer from '../components/slidersContainer';
// import styles from './styles';
const LatestVideos: FC = () => {
  // const {width} = Dimensions.get('screen');
  return (
    <SlidersScreenContainer headerTitle="Latest Videos">
      {/* <Carousel
                data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 0]}
                renderItem={() => <Content />}
                sliderWidth={width}
                enableMomentum = {true}
                itemWidth={width / 1.35}
                enableSnap={false}
                contentContainerCustomStyle={styles.contentContainerStyle}
            /> */}
    </SlidersScreenContainer>
  );
};
export default memo(LatestVideos);
