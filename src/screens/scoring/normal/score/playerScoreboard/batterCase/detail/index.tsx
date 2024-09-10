import { FC, useMemo, memo } from 'react';
import { BatterCaseProps } from '../../../../../../../modelInterface/scoring';
import BatterView from '../../batterView';

const BatterCaseDetail: FC<BatterCaseProps> = ({
    strikerId,
    isScorecard,
    matchStatus,
    hideBatterStatus,
    disableTouch,
    item,
}) => {
    const checkStriker = useMemo<boolean>(() => {
        return strikerId == item?.batsmanId;
    }, [item?.batsmanId, strikerId]);
    const currentStatus = useMemo<string | null>(() => {
        const { fielder, wicketType, bowler } = item.wicket || item.batingStat?.wicket || {};
        const { name: bowlerName } = bowler || {};
        const { name: fielderName } = fielder || {};
        if (item?.batingStat || item.wicket) {
            if (wicketType) {
                switch (wicketType) {
                    case 'bowled':
                        return `b ${bowlerName}`;
                    case 'catch_bowled':
                        return `c & b ${bowlerName}`;
                    case 'catch':
                        return `c ${fielderName} & b ${bowlerName}`;
                    case 'catch_behind':
                        return `cb ${fielderName} & b ${bowlerName}`;
                    case 'stumped':
                        return `stmp ${fielderName} & b ${bowlerName}`;
                    case 'lbw':
                        return `lbw ${bowlerName}`;
                    case 'run_out':
                        return `runout ${fielderName}`;
                    case 'hit_wicket':
                        return 'hit wicket';
                    case 'retired_hurt':
                        return 'rtrd out';
                    case 'absent_hurt':
                        return 'absnt out';
                    case 'hit_the_ball_twice':
                        return 'hitballtwice';
                    case 'obstructing_the_field':
                        return 'obstract field';
                    case 'timed_out':
                        return 'time out';
                }
            }
            return 'Not Out';
        } else if (matchStatus == 'started') {
            return 'Yet to Bat';
        } else if (item?.ballsCount && item?.ballsCount > 0) {
            return null;
        }
        return 'DNB';
    }, [
        item.batingStat?.wicket,
        matchStatus,
        item.wicket,
        item?.ballsCount,
        item.batingStat,
    ]);
    return (
        <BatterView
            name={item?.name || ''}
            disableTouch={disableTouch}
            isStriker={checkStriker}
            isOut={!!item?.batingStat?.wicketType}
            currentStatus={hideBatterStatus ? null : currentStatus}
            image={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSof5QJ3g-_mlUAeQxJPiZhsktYnjBJCPO_1A&usqp=CAU'}
            isScorecard={isScorecard}
            runs={item?.batingStat?.runs || item?.runs || '0'}
            ballCount={item?.batingStat?.normalBalls || item?.normalBalls || '0'}
            fours={item?.batingStat?.fours || item?.fours || '0'}
            sixes={item?.batingStat?.sixers || item?.sixers || '0'}
            strikerRate={item?.batingStat?.strikeRate || item?.strikeRate || '0'}
        />
    );
};
export default memo(BatterCaseDetail);