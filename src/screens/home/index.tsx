import {FC} from 'react';
import {FlatList} from 'react-native';
import Pagination from '../../components/pagination';
// import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {SimpleScreenContainer} from '../../components/screensContainers/screenContainers';
import { onMountAllMatches } from '../../redux/matches/getMatches/action';
// import Statuses from './statuses';
// import styles from './styles';
// import JoinNowBanner from './joinNowBanner';
// import ProfileHome from './profile';
// import TopScorrer from './topPerformer';
// import LatestNews from './latestNews';
// import LatestVideos from './latestVideos';
// import Tournaments from './tournaments';
import Matches from './matches';
// import LookingFor from './lookingFor';
// import {HomeRoutesProps} from '../../modelInterface/routes/home';
const Home: FC<any> = ({}) => {
  // const isRegistration = route.params?.isRegisteration ?? true;
  const data = [
    // {
    //     key: '0',
    //     Component: <Statuses />
    // },
    // {
    //     key: '3',
    //     Component: <LookingFor />
    // },
    {
      key: '5',
      Component: <Matches status="started" />,
    },
    {
      key: '6',
      Component: <Matches status="fixture" />,
    },
    {
      key: '7',
      Component: <Matches status="completed" />,
    },
    // {
    //     key: '1',
    //     Component: <ProfileHome />
    // },
    // {
    //     key: '7',
    //     Component: <Tournaments />
    // },
    // {
    //     key: '6',
    //     Component: <TopScorrer />
    // },
    // {
    //     key: '8',
    //     Component: <LatestVideos />
    // },
    // {
    //     key: '9',
    //     Component: <LatestNews />
    // },
  ];
  return (
    <SimpleScreenContainer isBlue={true}>
      {/* {!isRegistration &&
                <>
                    <View style={styles.topHeaderContainer} />
                    <JoinNowBanner />
                </>
            } */}
      <Pagination
        data={data}
        keyExtractor={({key}) => key}
        onRefreshing= {() => {onMountAllMatches({status: 'completed'}), onMountAllMatches({status: 'fixture'}), onMountAllMatches({status: 'started'})}}
        initialNumToRender={3}
        maxToRenderPerBatch={3}
        renderItem={({item}) => <>{item.Component}</>}
      />
    </SimpleScreenContainer>
  );
};
export default Home;
