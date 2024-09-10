import React, { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  View,
  useWindowDimensions,
} from 'react-native';
import { GetAmatureTournament } from '../../../redux/tournaments/getTournament/action';
import { TabView } from 'react-native-tab-view';
import styles from './styles';
import { RootState } from '../../../redux/store/store';
import SimpleLoader from '../../../components/loaders/simpleLoader';
import RenderHtmlComponent from '../../../components/renderHtml';
import NewTabBarHeaders from '../../../components/newTabBarHeader';
import { PointsIcon } from '../../../assets/svg';


const AmateurRules: FC<any> = ({ }) => {
  const { tournamentRule, isLoading } = useSelector((state: RootState) => state.getTournamentReducer);
  const [index, setIndex] = useState<number>(0);
  const layout = useWindowDimensions();
  useEffect(() => {
    GetAmatureTournament();
  }, []);
  const routes = tournamentRule.map((item: any) => {
    return {
      key: item?.id,
      title: item?.title,
      data: item.content,
      LeftChild: PointsIcon
    };
  })
  const renderScene = ({ route }: any) => {
    const { data } = route
    return (
      <RenderHtmlComponent
        html={data}
      />
    )
  };
  return (
    <View style={styles.mainWrapper}>
      <SimpleLoader isLoading={isLoading} />
      {tournamentRule.length > 0 ?
        <TabView
          navigationState={{ index, routes }}
          renderScene={renderScene}
          onIndexChange={setIndex}
          renderTabBar={(props) => (
            <NewTabBarHeaders selectedIndex={index} onPress={setIndex} {...props} isAmateur={true} />
          )}
          initialLayout={{ width: layout.width }}
        /> : null}
    </View>
  );
};
export default AmateurRules;