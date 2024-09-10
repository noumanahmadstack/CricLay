import { FC, memo, useEffect, useMemo, useState } from "react";
import { StyleProp, View, ViewStyle } from "react-native";
import { Text } from "react-native";
import { TimerProps } from "../../modelInterface/components/timer";
import styles from "./styles";

const Timer: FC<TimerProps> = ({ style, isStarted, duration, isAmateur }) => {
    const initialTime = useMemo<number>(() => {
        if (typeof (duration) == 'number') {
            const startingTime = new Date().getTime() - duration * 1000
            return new Date().getTime() - startingTime
        }
        return 0
    }, [])
    const [time, setTime] = useState<number>(initialTime)
    const showMsecs: boolean = false;
    const runTimer = () => {
        let interval
        if (typeof (duration) == 'number') {
            const startingTime = new Date().getTime() - duration * 1000
            if (isStarted) {
                interval = setInterval(() => {
                    const dateToBeSend = new Date().getTime() - startingTime
                    setTime(dateToBeSend)
                }, 1000)
            } else {
                clearInterval(interval)
            }
        }
        return interval
    }
    useEffect(() => {
        const interval = runTimer();
        return () => clearInterval(interval);
    }, [isStarted]);

    const formatTimeString = useMemo(() => {
        let msecs: string | number = time % 1000;
        if (msecs < 10) {
            msecs = `00${msecs}`;
        } else if (msecs < 100) {
            msecs = `0${msecs}`;
        }
        let seconds = Math.floor(time / 1000);
        let minutes = Math.floor(time / 60000);
        let hours = Math.floor(time / 3600000);
        seconds = seconds - minutes * 60;
        minutes = minutes - hours * 60;
        let formatted;
        if (showMsecs) {
            formatted = `${hours < 10 ? 0 : ""}${hours}:${minutes < 10 ? 0 : ""
                }${minutes}:${seconds < 10 ? 0 : ""}${seconds}:${msecs}`;
        } else {
            formatted = `${hours < 10 ? 0 : ""}${hours}:${minutes < 10 ? 0 : ""
                }${minutes}:${seconds < 10 ? 0 : ""}${seconds}`;
        }
        return formatted;
    }, [time, showMsecs])
    const containerStyle = useMemo<StyleProp<ViewStyle>>(() => ([styles.container, style, isAmateur && styles.amateurContainer]), [isAmateur])
    return (
        <View style={containerStyle}>
            <Text style={styles.time}>{formatTimeString}</Text>
        </View>
    )
}
export default memo(Timer)