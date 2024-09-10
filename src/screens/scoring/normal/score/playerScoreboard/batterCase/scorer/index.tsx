import { FC, useCallback, useMemo } from 'react';
import { BatterCaseProps, CalculateBatsmanStatsProps } from '../../../../../../../modelInterface/scoring';
import {
    calculateBatsmanState,
    calculateStrikeRate,
    hasBatsmanPlayed,
    outBy,
} from '../../../../../../../redux/scoring/normal/score/action';
import BatterView from '../../batterView';

const BatterCaseScorer: FC<BatterCaseProps> = ({
    disableTouch,
    strikerId,
    onSelectStriker,
    currentInning,
    isScorecard,
    bowlersData,
    matchStatus,
    onEditBatter,
    item,
}) => {
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
    const { balls } = currentInning || { balls: [] };
    const { runs, ballCount, sixes, fours, wicketAttributes, bowlerId } =
        useMemo<CalculateBatsmanStatsProps>(() => calculateBatsmanState({ batsmanId: item?.batsmanId, balls }),
            [item?.batsmanId, balls]);
    const { wicketType } = wicketAttributes || {};
    const isIncluded = hasBatsmanPlayed({ batsmanId: item?.batsmanId, balls });
    const checkStriker = useMemo<boolean>(() => !wicketType && item?.batsmanId === strikerId,
        [item?.batsmanId, wicketType, strikerId],
    );
    const currentStatus = useMemo<string>(() => {
        if (wicketAttributes?.wicketType) {
            switch (wicketAttributes.wicketType) {
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
                    return `runout ${outBy({ id: wicketAttributes.fielderId, bowlersData })?.name
                        }`;
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
            }
        } else if (isIncluded) {
            return 'Not out';
        } else if (matchStatus == 'started') {
            return 'Yet to Bat';
        }
        return 'DNB';
    }, [wicketAttributes, matchStatus, isIncluded, bowlerId, bowlersData]);
    if (item?.batsmanId && (!!isScorecard || !isScorecard)) {
        return (
            <BatterView
                name={item?.name || ''}
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
                strikerRate={calculateStrikeRate(runs, ballCount) || '0'}
                onLongPress={onHandleLongPress}
            />
        );
    }
    return null;
};
export default BatterCaseScorer;