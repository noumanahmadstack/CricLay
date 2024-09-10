import { FC } from 'react';
import { FlatList } from 'react-native';
import styles from '../styles';
import StatsView from '../../../../../views/stats';
import { GetTournamentObjectProps } from '../../../../../modelInterface/tournaments';

const Stats: FC<{ getTournament: GetTournamentObjectProps }> = ({ getTournament }) => {
    const { playedMatchesCount, inningsCount, runsCount, wicketsCount, extrasBallsCount, ballsCount, foursCount, sixersCount, fiftiesCount, hundredsCount, fiftiesPartnershipCount, hundredsPartnershipCount, maidenCount, dotBallsCount, catchesCount, stumpsCount, ballsFacedCount, economy } = getTournament?.stats || {};
    const IMAGE_PREFIX = '../../../../../assets/images/tournament/';
    const statsData = [
        {
            value: playedMatchesCount,
            label: "Played Matches",
            imgSrc: require(`${IMAGE_PREFIX}Played-Matches.png`),
        },
        {
            value: inningsCount,
            label: "Innings",
            imgSrc: require(`${IMAGE_PREFIX}Innings.png`),
        },
        {
            value: runsCount,
            label: "Runs",
            imgSrc: require(`${IMAGE_PREFIX}Runs.png`),
        },
        {
            value: wicketsCount,
            label: "Wickets",
            imgSrc: require(`${IMAGE_PREFIX}Wickets.png`),
        },
        {
            value: extrasBallsCount,
            label: "Extras",
            imgSrc: require(`${IMAGE_PREFIX}Extra.png`),
        },
        {
            value: ballsCount,
            label: "Balls",
            imgSrc: require(`${IMAGE_PREFIX}Balls.png`),
        },
        {
            value: foursCount,
            label: "Fours",
            imgSrc: require(`${IMAGE_PREFIX}Four.png`),
        },
        {
            value: sixersCount,
            label: "Sixes",
            imgSrc: require(`${IMAGE_PREFIX}Six.png`),
        },
        {
            value: fiftiesCount,
            label: "Fifties",
            imgSrc: require(`${IMAGE_PREFIX}50.png`),
        },
        {
            value: hundredsCount,
            label: "Hundreds",
            imgSrc: require(`${IMAGE_PREFIX}100.png`),
        },
        {
            value: fiftiesPartnershipCount,
            label: "50's Partnership",
            imgSrc: require(`${IMAGE_PREFIX}50+Partnership.png`),
        },
        {
            value: hundredsPartnershipCount,
            label: "100's Partnership",
            imgSrc: require(`${IMAGE_PREFIX}100+Partnership.png`),
        },
        {
            value: maidenCount,
            label: "Maidens",
            imgSrc: require(`${IMAGE_PREFIX}Maidens.png`),
        },
        {
            value: dotBallsCount,
            label: "Dot Balls",
            imgSrc: require(`${IMAGE_PREFIX}Dot-Balls.png`),
        },
        {
            value: catchesCount,
            label: "Catches",
            imgSrc: require(`${IMAGE_PREFIX}Catches.png`),
        },
        {
            value: stumpsCount,
            label: "Stumps",
            imgSrc: require(`${IMAGE_PREFIX}Stumps.png`),
        },
        {
            value: ballsFacedCount,
            label: "Balls Bowled",
            imgSrc: require(`${IMAGE_PREFIX}Ball-Faced.png`),
        },
        {
            value: economy,
            label: "Economy",
            imgSrc: require(`${IMAGE_PREFIX}Economy.png`),
        },
    ];

    return (
        <FlatList
            data={statsData}
             style={styles.mainWrapper}
            numColumns={3}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item.label}
            initialNumToRender={3}
            maxToRenderPerBatch={3}
            renderItem={({ item }) => <StatsView {...item} />}
        />
    );
};
export default Stats;
