import { FC, useMemo, useState } from 'react';
import { FlatList, View } from 'react-native';
import styles from './styles';
import StatsView from '../../../../views/stats';
import { BatterStatsProps, BowlingStatsProps, FieldingStatsProps } from '../../../../modelInterface/scoring';
import DropDown from '../../../../components/dropDown';
import { RightArrowIcon } from '../../../../assets/svg';
import { PlayerFilterOptionTypes } from '../../../../modelInterface/screens/players';

const Stats: FC<{
    batterStat: BatterStatsProps, bowlerStat: BowlingStatsProps, fielderStat: FieldingStatsProps
}> = (props) => {
    const { batterStat, bowlerStat, fielderStat } = props
    const [selectedFilter, setSelectedFilter] = useState<PlayerFilterOptionTypes>('all')
    const { playedMatches, innings, ballsCount, ballsFaced, fours, sixers, runs, fifties, hundreds, fiftiesPartnership, hundredsPartnership } = batterStat || {};
    const { innings: bowlingInnings, wicketsCount, extraBalls, overs, maidenOvers, economyRate, dotBalls } = bowlerStat || {};
    const { catches, stumpings, runOuts, totalWickets } = fielderStat || {};

    const IMAGE_PREFIX = '../../../../assets/images/tournament/';
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
            imgSrc: require(`${IMAGE_PREFIX}Played-Matches.png`),
        },
        {
            value: innings,
            label: "Innings",
            imgSrc: require(`${IMAGE_PREFIX}Innings.png`),
        },
        {
            value: runs,
            label: "Runs",
            imgSrc: require(`${IMAGE_PREFIX}Runs.png`),
        },
        {
            value: wicketsCount,
            label: "Wickets",
            imgSrc: require(`${IMAGE_PREFIX}Wickets.png`),
        },
        {
            value: ballsCount,
            label: "Total Balls",
            imgSrc: require(`${IMAGE_PREFIX}Balls.png`),
        },
        {
            value: fours,
            label: "Fours",
            imgSrc: require(`${IMAGE_PREFIX}Four.png`),
        },
        {
            value: sixers,
            label: "Sixes",
            imgSrc: require(`${IMAGE_PREFIX}Six.png`),
        },
        {
            value: fifties,
            label: "Fifties",
            imgSrc: require(`${IMAGE_PREFIX}50.png`),
        },
        {
            value: hundreds,
            label: "Hundreds",
            imgSrc: require(`${IMAGE_PREFIX}100.png`),
        },
        {
            value: fiftiesPartnership,
            label: "50's Partnership",
            imgSrc: require(`${IMAGE_PREFIX}50+Partnership.png`),
        },
        {
            value: hundredsPartnership,
            label: "100's Partnership",
            imgSrc: require(`${IMAGE_PREFIX}100+Partnership.png`),
        },
        {
            value: maidenOvers,
            label: "Maidens",
            imgSrc: require(`${IMAGE_PREFIX}Maidens.png`),
        },
        {
            value: dotBalls,
            label: "Dot Balls",
            imgSrc: require(`${IMAGE_PREFIX}Dot-Balls.png`),
        },
        {
            value: catches,
            label: "Catches",
            imgSrc: require(`${IMAGE_PREFIX}Catches.png`),
        },
        {
            value: stumpings,
            label: "Stumps",
            imgSrc: require(`${IMAGE_PREFIX}Stumps.png`),
        },
        {
            value: runOuts || 0,
            label: "Runs Out",
            imgSrc: require(`${IMAGE_PREFIX}Stumps.png`),
        },
        {
            value: ballsFaced,
            label: "Balls Bowled",
            imgSrc: require(`${IMAGE_PREFIX}Ball-Faced.png`),
        },
        {
            value: economyRate,
            label: "Economy",
            imgSrc: require(`${IMAGE_PREFIX}Economy.png`),
        },
    ];

    const battingStatsData = [
        { label: "Played Matches", value: playedMatches, imgSrc: require(`${IMAGE_PREFIX}Played-Matches.png`) },
        { label: "Innings", value: innings, imgSrc: require(`${IMAGE_PREFIX}Innings.png`) },
        { label: "Runs", value: runs, imgSrc: require(`${IMAGE_PREFIX}Runs.png`) },
        { label: "Fours", value: fours, imgSrc: require(`${IMAGE_PREFIX}Four.png`) },
        { label: "Sixes", value: sixers, imgSrc: require(`${IMAGE_PREFIX}Six.png`) },
        { label: "Fifties", value: fifties, imgSrc: require(`${IMAGE_PREFIX}50.png`) },
        { label: "Hundreds", value: hundreds, imgSrc: require(`${IMAGE_PREFIX}100.png`) },
        { label: "Balls Faced", value: ballsFaced, imgSrc: require(`${IMAGE_PREFIX}Ball-Faced.png`) },
        { label: "50's Partnership", value: fiftiesPartnership, imgSrc: require(`${IMAGE_PREFIX}50+Partnership.png`) },
        { label: "100's Partnership", value: hundredsPartnership, imgSrc: require(`${IMAGE_PREFIX}100+Partnership.png`) },
    ];

    const bowlingStatsData = [
        { label: "Innings", value: bowlingInnings, imgSrc: require(`${IMAGE_PREFIX}Innings.png`) },
        { label: "Wickets", value: wicketsCount, imgSrc: require(`${IMAGE_PREFIX}Wickets.png`) },
        { label: "Overs", value: overs, imgSrc: require(`${IMAGE_PREFIX}Ball-Faced.png`) },
        { label: "Maidens", value: maidenOvers, imgSrc: require(`${IMAGE_PREFIX}Maidens.png`) },
        { label: "Dot Balls", value: dotBalls, imgSrc: require(`${IMAGE_PREFIX}Dot-Balls.png`) },
        { label: "Economy", value: economyRate, imgSrc: require(`${IMAGE_PREFIX}Economy.png`) },
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
                columnWrapperStyle={styles.wrapperStyle}
                keyExtractor={(item) => item.label}
                initialNumToRender={3}
                maxToRenderPerBatch={3}
                renderItem={({ item }) => <StatsView {...item} />}
            />
        </View>

    );
};
export default Stats;