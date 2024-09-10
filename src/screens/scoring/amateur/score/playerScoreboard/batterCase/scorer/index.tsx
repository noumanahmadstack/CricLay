import { FC, useCallback, useEffect, useMemo } from 'react';
import { BatterCaseProps, CalculateBatsmanStatsProps } from '../../../../../../../modelInterface/scoring';
import {
    calculateBatsmanState,
    calculateStrikeRate,
    hasBatsmanPlayed,
    outBy,
} from '../../../../../../../redux/scoring/amateur/score/action';
import BatterView from '../../batterView';

const BatterCaseScorer: FC<BatterCaseProps> = ({
    disableTouch,
    onSelectStriker,
    onFifty,
    onEditBatter,
    currentInning,
    isScorecard,
    bowlersData,
    matchStatus,
    lineupData,
    item,
}) => {
    const { strikerId, nonStrikerId } = lineupData || {}
    const handleOnSelectStriker = useCallback(() => {
        if (onSelectStriker) {
            onSelectStriker(item);
        }
    }, [item, onSelectStriker]);

    const onHandleLongPress = useCallback(() => {
        if (onEditBatter) {
            onEditBatter(item)
        }
    }, [item, onEditBatter])


    const { balls, totalOvers } = currentInning || { balls: [], totalOvers: 0 };
    const { runs, ballCount, sixes, fours, wicketAttributes, bowlerId, showAlert, secondaryWicketAttributes } =
        useMemo<CalculateBatsmanStatsProps>(() => calculateBatsmanState({ batsmanId: item?.batsmanId, balls, totalOvers }),
            [item?.batsmanId, balls, totalOvers]);
    useEffect(() => {
        if (showAlert && !isScorecard && onFifty) {
            onFifty(item)
        }
    }, [showAlert]);
    const { wicketType } = wicketAttributes || {};
    const isIncluded = useMemo<boolean>(() => {
        return hasBatsmanPlayed({ batsmanId: item?.batsmanId, balls })
    }, [item?.batsmanId, balls])
    const checkStriker = useMemo<boolean>(() => (!wicketType || wicketType == "retired") && item?.batsmanId === strikerId,
        [item?.batsmanId, wicketType, strikerId],
    );
    const currentBall = balls[balls.length - 1]
    const handleStrikeRate = useMemo<number>(() => {
        return calculateStrikeRate(runs, ballCount)
    }, [runs, ballCount])
    const currentStatus = useMemo<string>(() => {
        if ((wicketAttributes?.wicketType || secondaryWicketAttributes?.wicketType) && !!isScorecard) {
            switch (wicketAttributes.wicketType || secondaryWicketAttributes?.wicketType) {
                case 'bowled':
                    return `b ${outBy({ id: bowlerId, bowlersData })?.name}`;
                case 'catch_bowled':
                    return `c & b ${outBy({ id: bowlerId, bowlersData })?.name}`;
                case 'catch':
                    return `c ${outBy({ id: wicketAttributes.fielderId, bowlersData })?.name
                        } & b ${outBy({ id: bowlerId, bowlersData })?.name}`;
                case 'catch_behind':
                    return `cb ${outBy({ id: wicketAttributes.fielderId, bowlersData })?.name
                        } & b ${outBy({ id: bowlerId, bowlersData })?.name}`;
                case 'stumped':
                    return `stmp ${outBy({ id: wicketAttributes.fielderId, bowlersData })?.name
                        } & b ${outBy({ id: bowlerId, bowlersData })?.name}`;
                case 'lbw':
                    return `lbw ${outBy({ id: bowlerId, bowlersData })?.name}`;
                case 'run_out':
                    return `runout ${outBy({ id: (wicketAttributes?.fielderId || secondaryWicketAttributes?.fielderId), bowlersData })?.name}`;
                case 'hit_wicket':
                    return 'hit wicket';
                case 'retired_hurt':
                    return 'rtrd hurt';
                case 'retired_out':
                    return 'rtrd out';
                case 'absent_hurt':
                    return 'absnt out';
                case 'hit_the_ball_twice':
                    return 'hitballtwice';
                case 'obstructing_the_field':
                    return 'obstract field';
                case 'man_kaded':
                    return 'Mankad';
                case 'timed_out':
                    return 'time out';
                case 'retired':
                    return (strikerId == item?.batsmanId || nonStrikerId == item?.batsmanId) ? "Not out" : 'retired';
            }

        } else if (isIncluded) {
            return 'Not out';
        } else if (matchStatus == 'started') {
            return 'Yet to Bat';
        }
        return 'DNB';
    }, [wicketAttributes, matchStatus, isIncluded, bowlerId, bowlersData, currentBall]);

    if (item?.batsmanId && (!!isScorecard || !isScorecard)) {
        return (
            <BatterView
                name={`${item?.name} ${item.isSubsituted ? "(Sub)" : ''}` || ''}
                disableTouch={disableTouch}
                onSelect={handleOnSelectStriker}
                isStriker={checkStriker}
                image={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSof5QJ3g-_mlUAeQxJPiZhsktYnjBJCPO_1A&usqp=CAU'}
                isOut={!!wicketType}
                isScorecard={isScorecard}
                currentStatus={currentStatus}
                runs={runs || '0'}
                ballCount={ballCount || '0'}
                fours={fours || '0'}
                sixes={sixes || '0'}
                strikerRate={handleStrikeRate}
                onLongPress={onHandleLongPress}
            />
        );
    }
    return null;
};
export default BatterCaseScorer;