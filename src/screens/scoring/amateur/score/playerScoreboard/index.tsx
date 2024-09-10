import React, { FC, memo, useMemo } from 'react';
import { FlatList } from 'react-native';
import { PlayerScoreboardProps, BatterStatsAttributesProps } from '../../../../../modelInterface/scoring';
import BatterCase from './batterCase';
import BatterViewHeader from './batterViewHeader';
import BowlerCase from './bowlerCase';
import Seprator from './seprator';
import styles from './styles';
import CommaSepratedData from './commaSepratedData';
import { calculateFallOfWicketsFromBackend, calculateFallOfWicketsFromLocal, calculateNotPlayedFromBackend } from '../../../../../redux/scoring/amateur/score/action';
import { initialState } from '../../../../../redux/scoring/amateur/score/reducer';

const AmateurPlayerScoreboard: FC<PlayerScoreboardProps> = memo(
  ({
    batsmanData,
    bowlerData,
    strikerId,
    onSelectStriker,
    isDetailed,
    currentInning,
    isScorecard,
    bowlersData,
    lineupData,
    matchStatus,
    hideBatterStatus,
    onEditBowler,
    inningStatus,
    includeExtras,
    loneSurvivor,
    onFifty,
    onEditBatter
  }) => {
    const { balls, ballsPerOver, totalOvers } = currentInning || {
      balls: initialState.matchDetail.currentInning.balls,
      ballsPerOver: initialState.matchDetail.currentInning.ballsPerOver,
    };
    const notPlayedModifiedData = useMemo<string>(() => {
      if (isDetailed) {
        return calculateNotPlayedFromBackend({ batsmanData });
      }
      return '';
    }, [batsmanData, isDetailed]);

    const fallOfWicketsModifiedData = useMemo<string>(() => {
      if (batsmanData && (isScorecard || !!isDetailed)) {
        if (isDetailed) {
          return calculateFallOfWicketsFromBackend({ batsmanData });
        } else {
          return calculateFallOfWicketsFromLocal({
            balls,
            ballsPerOver,
            batsmanData,
            bowlersData: bowlersData || [],
            totalOvers: totalOvers || 0
          });
        }
      }
      return '';
    }, [
      isDetailed,
      balls,
      ballsPerOver,
      batsmanData,
      bowlersData,
      isScorecard,
    ]);
    const retiredModifiedData = useMemo<string>(() => {
      if (batsmanData && (isScorecard || !!isDetailed)) {
        return calculateFallOfWicketsFromLocal({
          balls,
          ballsPerOver,
          batsmanData,
          bowlersData: bowlersData || [],
          totalOvers: totalOvers || 0,
          wicketType: 'retired'
        });
      }
      return '';
    }, [
      isDetailed,
      balls,
      ballsPerOver,
      batsmanData,
      bowlersData,
      isScorecard,
    ]);
    const renderBatterCase = useMemo(() =>
      ({ item }: { item: BatterStatsAttributesProps }) => (
        <BatterCase
          item={item}
          strikerId={strikerId}
          currentInning={currentInning}
          bowlersData={bowlersData}
          disableTouch={
            (batsmanData && batsmanData?.length < (loneSurvivor ? 1 : 2)) ||
            !!isDetailed ||
            !!isScorecard
          }
          isDetailed={isDetailed}
          isScorecard={isScorecard}
          onSelectStriker={onSelectStriker}
          matchStatus={matchStatus}
          hideBatterStatus={hideBatterStatus}
          lineupData={lineupData}
          onFifty={onFifty}
          onEditBatter={onEditBatter}
        />
      ),
      [
        batsmanData,
        bowlersData,
        strikerId,
        currentInning,
        isDetailed,
        isScorecard,
        onSelectStriker,
        matchStatus,
        hideBatterStatus,
        lineupData,
        loneSurvivor
      ],
    );
    const renderListHeaderComponent = useMemo(
      () => ((batsmanData == null || batsmanData?.length == 0) ? null : <BatterViewHeader />),
      [batsmanData]
    );

    const renderListFooterComponent = useMemo(
      () =>
        bowlersData || !!bowlerData?.bowlerId ? (
          <>
            {fallOfWicketsModifiedData ? (
              <CommaSepratedData
                title={'Fall of wickets'}
                description={fallOfWicketsModifiedData}
                sepratorStyle={styles.seprator}
                style={styles.dnb}
              />
            ) : null}
            {notPlayedModifiedData ? (
              <CommaSepratedData
                title={inningStatus == 'in_progress' ? 'Yet to Bat' : 'Did Not Bat'}
                description={notPlayedModifiedData}
                sepratorStyle={styles.seprator}
                style={styles.dnb}
              />
            ) : null}
            {retiredModifiedData ? (
              <CommaSepratedData
                title={'Retired'}
                description={retiredModifiedData}
                sepratorStyle={styles.seprator}
                style={styles.dnb}
              />
            ) : null}
            <BowlerCase
              currentInning={currentInning}
              bowlerData={bowlerData}
              bowlersData={bowlersData}
              isDetailed={isDetailed}
              isScorecard={isScorecard}
              lineupData={lineupData}
              onEditBowler={onEditBowler}
            />
          </>
        ) : null,
      [
        bowlerData,
        bowlersData,
        currentInning,
        isDetailed,
        isScorecard,
        lineupData,
        fallOfWicketsModifiedData,
        notPlayedModifiedData,
        inningStatus,
        onEditBowler
      ],
    );

    return (
      <FlatList
        data={
          isDetailed
            ? batsmanData?.filter(batter => batter?.batingStat !== null)
            : batsmanData
        }
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => item?.batsmanId}
        style={styles.container}
        ItemSeparatorComponent={() => <Seprator />}
        ListHeaderComponentStyle={styles.listHeaderComponentStyle}
        ListHeaderComponent={renderListHeaderComponent}
        contentContainerStyle={styles.contentContainerStyle}
        ListFooterComponentStyle={(batsmanData == null || batsmanData?.length == 0) ? null : styles.ListFooterComponentStyle}
        ListFooterComponent={renderListFooterComponent}
        renderItem={renderBatterCase}
      />
    );
  },
);
export default AmateurPlayerScoreboard;