import { FC } from "react";
import { View } from "react-native";
import { TournamentObjectProps } from "../../../../modelInterface/tournaments";
import TournamentView from "../../../../views/tournament/view";
import styles from "./styles";
const Tournament: FC<{ tournament: TournamentObjectProps }> = ({ tournament }) => {    
    return (
        <View style={styles.container}>
            <TournamentView {...tournament} />
        </View>
    )
}
export default Tournament