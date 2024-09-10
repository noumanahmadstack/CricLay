import { FC, useMemo, useState } from 'react';
import { FlatList, View } from 'react-native';
import styles from './styles';
import StatsView from '../../../../views/stats';
import { BatterStatsProps, BowlingStatsProps, FieldingStatsProps } from '../../../../modelInterface/scoring';
import DropDown from '../../../../components/dropDown';
import { RightArrowIcon } from '../../../../assets/svg';
import { PlayerFilterOptionTypes } from '../../../../modelInterface/screens/players';
import { AllStat } from '../../../../modelInterface/redux/teams/reducer';

const Stats: FC<{
    overAllStat: AllStat, batterStat: BatterStatsProps, bowlerStat: BowlingStatsProps, fielderStat: FieldingStatsProps
}> = (props) => {
    const { overAllStat, batterStat, bowlerStat, fielderStat } = props
    const [selectedFilter, setSelectedFilter] = useState<PlayerFilterOptionTypes>('all')
    const { playedMatches, drawnMatches, lossMatches, wonMatches, highestRuns, lowestRuns, potmAward, tournamentCount } = overAllStat || {};
    const { playedMatches: teamPlayedMatches, innings, fours, sixers, runs, fifties, hundreds, highestPartnership, highestScore } = batterStat || {};
    const { innings: bowlingInnings, maidenOvers, fiveWickets, threeWickets, totalWickets, normalBalls, runs: bowlerRuns } = bowlerStat || {};
    const { catches, stumpings, runOuts, totalWickets: fielderTotalWickets } = fielderStat || {};

    const IMAGE_PREFIX = '../../../../assets/images/teams/';
    const dropDownData = [
        {
            key: 'all',
            value: "All"
        },
        {
            key: "batting",
            value: "Batting"
        },
        {
            key: "bowling",
            value: "Bowling"
        },
        {
            key: "fielder",
            value: "Fielding"
        }
    ]
    const allStatsData = [

        {
            value: playedMatches,
            label: "Played Matches",
            imgSrc: require(`${IMAGE_PREFIX}PlayedMatches.png`),
        },
        {
            value: potmAward,
            label: "Awards",
            imgSrc: require(`${IMAGE_PREFIX}POM.png`),
        },
        {
            value: drawnMatches,
            label: "Draw Matches",
            imgSrc: require(`${IMAGE_PREFIX}DrawMatch.png`),
        },
        {
            value: wonMatches,
            label: "Won Matches",
            imgSrc: require(`${IMAGE_PREFIX}WinMatches.png`),
        },
        {
            value: lossMatches,
            label: "Loss Matches",
            imgSrc: require(`${IMAGE_PREFIX}PlayedMatches.png`),
        },
        {
            value: tournamentCount,
            label: "Tournaments",
            imgSrc: require(`${IMAGE_PREFIX}TournamentCount.png`),
        },
        {
            value: highestRuns,
            label: "Highest Runs",
            imgSrc: require(`${IMAGE_PREFIX}HighestRuns.png`),
        },
        {
            value: lowestRuns,
            label: "Lowest Runs",
            imgSrc: require(`${IMAGE_PREFIX}LowestRuns.png`),
        }
    ];
    const battingStatsData = [
        { label: "Played Matches", value: teamPlayedMatches, imgSrc: require(`${IMAGE_PREFIX}PlayedMatches.png`) },
        { label: "Innings", value: innings, imgSrc: require(`${IMAGE_PREFIX}Innings.png`) },
        { label: "Runs", value: runs, imgSrc: require(`${IMAGE_PREFIX}Runs.png`) },
        { label: "Fours", value: fours, imgSrc: require(`${IMAGE_PREFIX}Four.png`) },
        { label: "Sixes", value: sixers, imgSrc: require(`${IMAGE_PREFIX}Six.png`) },
        { label: "Fifties", value: fifties, imgSrc: require(`${IMAGE_PREFIX}50.png`) },
        { label: "Hundreds", value: hundreds, imgSrc: require(`${IMAGE_PREFIX}100.png`) },
        { label: "Highest Score", value: highestScore, imgSrc: require(`${IMAGE_PREFIX}50+Partnership.png`) },
        { label: "Highest Partnership", value: highestPartnership, imgSrc: require(`${IMAGE_PREFIX}100+Partnership.png`) },
    ];
    const bowlingStatsData = [
        { label: "Innings", value: bowlingInnings, imgSrc: require(`${IMAGE_PREFIX}Innings.png`) },
        { label: "Wickets", value: totalWickets, imgSrc: require(`${IMAGE_PREFIX}Wickets.png`) },
        { label: "3 Wickets", value: threeWickets, imgSrc: require(`${IMAGE_PREFIX}Wickets.png`) },
        { label: "5 Wickets", value: fiveWickets, imgSrc: require(`${IMAGE_PREFIX}Wickets.png`) },
        { label: "Runs", value: bowlerRuns, imgSrc: require(`${IMAGE_PREFIX}Runs.png`) },
        { label: "Maidens", value: maidenOvers, imgSrc: require(`${IMAGE_PREFIX}Maidens.png`) },
        { label: "Normal Balls", value: normalBalls, imgSrc: require(`${IMAGE_PREFIX}Dot-Balls.png`) },
    ];
    const fieldingStatsData = [
        { label: "Catches", value: catches, imgSrc: require(`${IMAGE_PREFIX}Catches.png`) },
        { label: "Stumps", value: stumpings, imgSrc: require(`${IMAGE_PREFIX}Stumps.png`) },
        { label: "Run Outs", value: runOuts || 0, imgSrc: require(`${IMAGE_PREFIX}Stumps.png`) },
    ];
    const statsData = useMemo(() => {
        switch (selectedFilter) {
            case 'all':
                return allStatsData;
            case 'batting':
                return battingStatsData;
            case 'bowling':
                return bowlingStatsData;
            case 'fielder':
                return fieldingStatsData;
            default:
                return [];
        }
    }, [selectedFilter, props]);
    return (
        <View style={styles.View}>
            <DropDown
                data={dropDownData}
                isDropDown={true}
                title="Select Stat Type"
                placeholder="Select Stat Type"
                onConfirm={(e) => setSelectedFilter(e?.key)}
                textInputContainerStyle={styles.inputFields}
                RightChild={<RightArrowIcon />}
            />
            <FlatList
                data={statsData}
                numColumns={3}
                showsVerticalScrollIndicator={false}
                keyExtractor={(item) => item.label}
                initialNumToRender={10}
                maxToRenderPerBatch={10}
                renderItem={({ item }) => <StatsView {...item} />}
            />
        </View>

    );
};
export default Stats;

