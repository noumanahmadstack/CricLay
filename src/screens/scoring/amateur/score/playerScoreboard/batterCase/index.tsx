import { FC } from 'react';
import { BatterCaseProps } from '../../../../../../modelInterface/scoring';
import BatterCaseDetail from './detail';
import BatterCaseScorer from './scorer';

const BatterCase: FC<BatterCaseProps> = ({
  disableTouch,
  strikerId,
  onSelectStriker,
  onFifty,
  onEditBatter,
  isDetailed,
  currentInning,
  isScorecard,
  bowlersData,
  matchStatus,
  hideBatterStatus,
  lineupData,
  item,
}) => {
  if (currentInning && !isDetailed) {
    return (<BatterCaseScorer
      item={item}
      isDetailed={isDetailed}
      matchStatus={matchStatus}
      disableTouch={disableTouch}
      currentInning={currentInning}
      lineupData={lineupData}
      bowlersData={bowlersData}
      hideBatterStatus={hideBatterStatus}
      isScorecard={isScorecard}
      onSelectStriker={onSelectStriker}
      onFifty={onFifty}
      onEditBatter={onEditBatter}
    />)
  } else if (isDetailed) {
    return (<BatterCaseDetail
      strikerId={strikerId}
      isScorecard={isScorecard}
      matchStatus={matchStatus}
      hideBatterStatus={hideBatterStatus}
      item={item}
      disableTouch={true}
    />)
  }
  return null;
};
export default BatterCase;
