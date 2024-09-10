import {FC, memo} from 'react';
// import {Dimensions} from 'react-native';
// import Carousel from 'react-native-snap-carousel';
// import Content from './components/content';
import SlidersScreenContainer from '../components/slidersContainer';
// import styles from './styles';
const NewsBlog: FC = () => {
  // const {width} = Dimensions.get('window');
  return (
    <SlidersScreenContainer headerTitle="Latest News">
      {/* <Carousel
                data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 0]}
                sliderWidth={width}
                itemWidth={width / 1.35}
                enableSnap={false}
                contentContainerCustomStyle={styles.contentContainerStyle}
                renderItem={() => <Content />}
            /> */}
    </SlidersScreenContainer>
  );
};
export default memo(NewsBlog);
