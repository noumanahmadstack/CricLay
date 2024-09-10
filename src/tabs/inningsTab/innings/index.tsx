import { FC, useMemo } from 'react';
import { InningScreenProps } from '../../../modelInterface/scoring';
import Card from './card';
import Partnership from './partnership';
import Commentary from './commentary';
import Players from './players';
import Stats from './stats';
const Inning: FC<InningScreenProps> = props => {
  const { tabType } = props || {};
  const MemoizedComponent = useMemo(() => {
    if (tabType === 'commentary') {
      return <Commentary {...props} />;
    } else if (tabType === 'partnership') {
      return <Partnership {...props}/>;
    } else if (tabType === 'card') {
      return <Card {...props} />;
    } else if (tabType === 'playingPlayers') {
      return <Players {...props} />;
    } else if (tabType === 'stats') {
      return <Stats {...props} />
    }
    return <Card {...props} />;
  }, [props, tabType]);
  return MemoizedComponent;
};
export default Inning;
