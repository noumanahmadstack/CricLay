import { FC, memo, ReactNode, useMemo } from 'react';
import { View, Text } from 'react-native';
import { PlayerViewProps } from '../../../../modelInterface/views/playersListView';
import styles from '../styles';
import Seprator from '../../../../screens/scoring/normal/score/playerScoreboard/seprator';
import LinearGradient from 'react-native-linear-gradient';
import GradientColor from '../../../../theme/gradientColors';

const PointView: FC<PlayerViewProps> = ({
    ...props
}) => {
    const { bowlingPoints, battingPoints, fielderPoints, totalPoints, bowlingStat, batingStat, fielderStat } = props || {};
    const RenderBattingStats = useMemo<ReactNode>(() => batingStat &&
        <>
            <Text style={styles.headingName}>Batting</Text>
            <View style={styles.initialPointView}>
                <Text style={styles.initialPoint}>
                    Runs{'\n'}
                    <Text style={styles.initialPoint}>{batingStat?.runs}</Text>
                </Text>
                <Text style={styles.initialPoint}>
                    Sixes{'\n'}
                    <Text style={styles.initialPoint}>{batingStat?.sixers}</Text>
                </Text>
                <Text style={styles.initialPoint}>
                    Four{'\n'}
                    <Text style={styles.initialPoint}>{batingStat?.fours}</Text>
                </Text>
                <Text style={styles.initialPoint}>
                    Points{'\n'}
                    <Text style={styles.initialPoint}>{battingPoints}</Text>
                </Text>
            </View>
            <Seprator />
        </>, [batingStat])

    const RenderBowlingStats = useMemo<ReactNode>(() => bowlingStat &&
        <>
            <Text style={styles.headingName}>Bowling</Text>
            <View style={styles.initialPointView}>
                <Text style={styles.initialPoint}>
                    Runs{'\n'}
                    <Text style={styles.initialPoint}>{bowlingStat?.runs}</Text>
                </Text>
                <Text style={styles.initialPoint}>
                    Overs{'\n'}
                    <Text style={styles.initialPoint}>{bowlingStat?.overs}</Text>
                </Text>
                <Text style={styles.initialPoint}>
                    Wickets{'\n'}
                    <Text style={styles.initialPoint}>{bowlingStat?.wicketsCount}</Text>
                </Text>
                <Text style={styles.initialPoint}>
                    Points{'\n'}
                    <Text style={styles.initialPoint}>{bowlingPoints}</Text>
                </Text>
            </View>
            <Seprator />
        </>
        , [bowlingStat])

    const RenderFieldingStats = useMemo<ReactNode>(() =>
        fielderStat &&
        <>
            <Text style={styles.headingName}>Fielding</Text>
            <View style={styles.initialPointView}>
                <Text style={styles.initialPoint}>
                    Run Out{'\n'}
                    <Text style={styles.initialPoint}>{fielderStat?.runOuts}</Text>
                </Text>
                <Text style={styles.initialPoint}>
                    Catches{'\n'}
                    <Text style={styles.initialPoint}>{fielderStat?.catches}</Text>
                </Text>
                <Text style={styles.initialPoint}>
                    Stumped{'\n'}
                    <Text style={styles.initialPoint}>{fielderStat?.stumpings}</Text>
                </Text>
                <Text style={styles.initialPoint}>
                    Points{'\n'}
                    <Text style={styles.initialPoint}>{fielderPoints}</Text>
                </Text>
            </View>
            <Seprator />
        </>
        , [fielderStat])
    return (
        <View style={styles.pointViewTableContainer}>
            {RenderBattingStats}
            {RenderBowlingStats}
            {RenderFieldingStats}
            <Text style={styles.headingName}>Total</Text>
            <LinearGradient
                colors={GradientColor.authenticationBtn}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 1 }} style={styles.pointView}>
                <Text style={styles.point}>
                    Batting{'\n'}
                    <Text style={styles.point}>{battingPoints}</Text>
                </Text>
                <Text style={styles.point}>
                    Bowling{'\n'}
                    <Text style={styles.point}>{bowlingPoints}</Text>
                </Text>
                <Text style={styles.point}>
                    Fielding{'\n'}
                    <Text style={styles.point}>{fielderPoints}</Text>
                </Text>
                <Text style={styles.point}>
                    Total{'\n'}
                    <Text style={styles.point}>{totalPoints}</Text>
                </Text>
            </LinearGradient>
        </View>
    );
};
export default memo(PointView);