import React, { FC, useMemo } from 'react';
import { FlatList } from 'react-native';
import { BowlerCaseProps } from '../../../../../../../modelInterface/scoring';
import { calculateBowlerState, calculateMedianOver, hasBowlerPlayed } from '../../../../../../../redux/scoring/amateur/score/action';
import BowlerView from '../../bowlerView';
import Seprator from '../../seprator';

const BowlerCaseScorer: FC<BowlerCaseProps> =
    ({
        bowlerData,
        currentInning,
        isScorecard,
        bowlersData,
        lineupData,
    }) => {
        const BowlerUI = useMemo(() => {
            if (currentInning) {
                const { ballsPerOver, balls, totalOvers } = currentInning || {};
                if (isScorecard) {
                    return (
                        <FlatList
                            data={bowlersData?.filter(item =>
                                hasBowlerPlayed({ bowlerId: item?.bowlerId, balls }),
                            )}
                            keyExtractor={item => item?.bowlerId}
                            ItemSeparatorComponent={() => <Seprator />}
                            renderItem={({ item }) => {
                                if (item?.bowlerId) {
                                    const { overs, wickets, economyRate, runs } = item?.bowlerId
                                        ? calculateBowlerState({
                                            bowlerId: item.bowlerId,
                                            ballsPerOver,
                                            balls,
                                            totalOvers
                                        })
                                        : { runs: 0, overs: 0, wickets: 0, economyRate: 0 };
                                    const medianOver = calculateMedianOver(item?.bowlerId);
                                    if (!!isScorecard || !isScorecard) {
                                        return (
                                            <BowlerView
                                                name={item?.name}
                                                image={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSof5QJ3g-_mlUAeQxJPiZhsktYnjBJCPO_1A&usqp=CAU'}
                                                overs={overs}
                                                medianOver={medianOver}
                                                wickets={wickets}
                                                runs={runs}
                                                economyRate={economyRate}
                                                isSelected={
                                                    lineupData?.bowlingData?.bowlerId == item?.bowlerId
                                                }
                                            />
                                        );
                                    }
                                    return null;
                                }
                                return null;
                            }}
                        />
                    );
                } else if (bowlerData?.bowlerId) {
                    const { overs, wickets, economyRate, runs } = bowlerData?.bowlerId
                        ? calculateBowlerState({
                            bowlerId: bowlerData.bowlerId,
                            ballsPerOver,
                            balls,
                            totalOvers
                        })
                        : { runs: 0, overs: 0, wickets: 0, economyRate: 0 };
                    const medianOver = calculateMedianOver(bowlerData?.bowlerId);
                    return (
                        <BowlerView
                            name={bowlerData?.name ? bowlerData.name : ''}
                            image={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSof5QJ3g-_mlUAeQxJPiZhsktYnjBJCPO_1A&usqp=CAU'}
                            overs={overs}
                            medianOver={medianOver}
                            wickets={wickets}
                            runs={runs}
                            isSelected={
                                lineupData?.bowlingData?.bowlerId == bowlerData?.bowlerId
                            }
                            economyRate={economyRate}
                        />
                    );
                }
            }
        }, [
            bowlersData,
            bowlerData,
            currentInning,
            isScorecard,
            lineupData,
        ]);

        return (
            <>
                {BowlerUI}
            </>
        );
    }
export default BowlerCaseScorer;
