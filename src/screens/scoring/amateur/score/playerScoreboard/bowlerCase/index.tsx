import React, { FC, useMemo } from 'react';
import { BowlerCaseProps } from '../../../../../../modelInterface/scoring';
import BowlerViewHeader from '../bowlerViewHeader';
import BowlerCaseDetail from './detail';
import BowlerCaseScorer from './scorer';

const BowlerCase: FC<BowlerCaseProps> = React.memo(
  ({
    bowlerData,
    currentInning,
    isScorecard,
    bowlersData,
    isDetailed,
    lineupData,
    onEditBowler,
  }) => {
    const BowlerUI = useMemo(() => {
      if (currentInning && !isDetailed) {
        return <BowlerCaseScorer
          bowlerData={bowlerData}
          currentInning={currentInning}
          isScorecard={isScorecard}
          bowlersData={bowlersData}
          lineupData={lineupData}
        />
      } else if (isDetailed) {
        return <BowlerCaseDetail
          bowlerData={bowlerData}
          bowlersData={bowlersData}
        />
      }
      return null;
    }, [
      bowlersData,
      bowlerData,
      currentInning,
      isScorecard,
      isDetailed,
      lineupData,
    ]);
    return (
      <>
        <BowlerViewHeader onEditBowler={onEditBowler} />
        {BowlerUI}
      </>
    );
  },
);
export default BowlerCase;
