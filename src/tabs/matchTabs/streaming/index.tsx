import {FC, useState} from 'react';
import {useWindowDimensions} from 'react-native';
import {TabView} from 'react-native-tab-view';
import TabViewHeader from '../../../components/simpleTabViewHeader';
import {RenderSceneProps} from '../../../modelInterface/screens/authentication/emailPhone';
import LiveStreams from './live';
import RecentStreams from './recent';
const StreamingTabs: FC = () => {
  const [index, setIndex] = useState<number>(0);
  const layout = useWindowDimensions();
  const routes = [
    {
      key: 'LiveMatches',
      title: 'Live Matches',
    },
    {
      key: 'RecentMatches',
      title: 'Recent Matches',
    },
  ];

  const renderScene = ({route}: RenderSceneProps) => {
    switch (route.key) {
      case 'LiveMatches':
        return <LiveStreams />;
      case 'RecentMatches':
        return <RecentStreams />;
    }
  };
  return (
    <TabView
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      renderTabBar={e => <TabViewHeader {...e} />}
      initialLayout={{width: layout.width}}
    />
  );
};
export default StreamingTabs;
