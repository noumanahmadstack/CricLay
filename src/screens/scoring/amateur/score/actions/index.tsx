import { FC, useEffect, useState } from 'react';
import { FlatList, Text, TouchableOpacity } from 'react-native';
import { useSelector } from 'react-redux';
import { EndInningIcon, SettingIcon } from '../../../../../assets/svg';
import { SimpleScreenContainer } from '../../../../../components/screensContainers/screenContainers';
import { drawMatchAction, getMatchSummaryStatus, onHandleEndInning, summaryToggleAction } from '../../../../../redux/scoring/amateur/score/action';
import DrawOptionsModal from './drawCase';
import styles from './styles';
import SummaryOptionsModal from './summaryToggle';
import { RootState } from '../../../../../redux/store/store';
import PointsToggleModal from './pointsToggle';
const ScoringActionAmateur: FC = () => {
  const { matchDetail } = useSelector((state: RootState) => state.amateurScoreReducer);
  const { innings, teamOne, teamTwo } = matchDetail || {}
  const [isVisibleDraw, setIsVisibleDraw] = useState<boolean>(false)
  const [isVisibleSummary, setIsVisibleSummary] = useState<boolean>(false)
  const [isVisiblePointsModal, setIsVisiblePointsModal] = useState<boolean>(false);
  const data = [
    {
      key: '0',
      title: 'End Innings',
      icon: EndInningIcon,
      action: () => innings.length == 2 ? setIsVisiblePointsModal(true) : onHandleEndInning({ action: true })
    },
    {
      key: '1',
      title: 'Draw Match',
      icon: EndInningIcon,
      action: () => setIsVisibleDraw(true)
    },
    {
      key: '2',
      title: 'Setting',
      icon: SettingIcon,
      action: () => setIsVisibleSummary(true)
    }
  ];
  useEffect(() => {
    getMatchSummaryStatus();
  }, []);

  return (
    <SimpleScreenContainer isBlue={true}>
      <DrawOptionsModal
        isVisible={isVisibleDraw}
        onRequestClose={() => setIsVisibleDraw(false)}
        onConfirm={drawMatchAction}
      />
      <SummaryOptionsModal
        isVisible={isVisibleSummary}
        onRequestClose={() => setIsVisibleSummary(false)}
        onConfirm={summaryToggleAction}
        matchDetail={matchDetail}
      />
      <PointsToggleModal
        isVisible={isVisiblePointsModal}
        onRequestClose={() => setIsVisiblePointsModal(false)}
        onConfirm={(kitPoint) => onHandleEndInning({ action: true, kitPoint })}
        teamOne={teamOne}
        teamTwo={teamTwo}
      />
      <FlatList
        data={data}
        keyExtractor={({ key }) => key}
        columnWrapperStyle={styles.contentContainer}
        numColumns={3}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={item.action} activeOpacity={0.5}>
            <item.icon />
            <Text style={styles.title}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </SimpleScreenContainer>
  );
};
export default ScoringActionAmateur;
