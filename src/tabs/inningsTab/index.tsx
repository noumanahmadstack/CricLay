import { FC, useState } from 'react';
import { useWindowDimensions } from 'react-native';
import { TabView } from 'react-native-tab-view';
import TabBarHeaders from '../../components/tabBarHeaders';
import {
  InningsTabScreenProps,
  RenderSceneInningTabProps,
} from '../../modelInterface/scoring';
import Inning from './innings';

const InningsTab: FC<InningsTabScreenProps> = ({ data, tabType }) => {
  const isAmateur= data.some((item) => item.isAmateur)
  const layout = useWindowDimensions();
  const [index, setIndex] = useState<number>(0);
  const routes = data.map(item => {
    return {
      key: `${item.inningNumber}Inning`,
      title: `${item.batingTeam.name}`,
      data: item && item,
    };
  });
  const renderScene = ({ route }: RenderSceneInningTabProps) => {
    return <Inning isAmateur={isAmateur} tabType={tabType} {...route.data} />;
  };
  if (data.length > 0) {
    return (
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        renderTabBar={props => (
          <TabBarHeaders {...props} selectedIndex={index} onPress={setIndex} isAmateur={isAmateur} />
        )}
        sceneContainerStyle={{ marginVertical: 10 }}
        initialLayout={{ width: layout.width }}
      />
    );
  }
  return null;
};
export default InningsTab;
