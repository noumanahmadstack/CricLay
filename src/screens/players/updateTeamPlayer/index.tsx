import { FC, useMemo, useState } from "react";
import { TouchableWithoutFeedback, View, Keyboard } from "react-native";
import { useSelector } from "react-redux";
import GradientBtn from "../../../components/btns/gradientBtn";
import DropDown from "../../../components/dropDown";
import FormInput from "../../../components/formInput";
import { SimpleScreenContainer } from "../../../components/screensContainers/screenContainers";
import ToggleBtn from "../../../components/toggleBtn";
import { DropDownObjProps } from "../../../modelInterface/commonProps";
import { PlayerRoleProps } from "../../../modelInterface/player";
import { updateTeamPlayerAction } from "../../../redux/players/addPlayer/action";
import { RootState } from "../../../redux/store/store";
import colors from "../../../theme/colors";
import styles from "./styles";
const UpdateTeamPlayer: FC<any> = ({ route }) => {
    const { teamId, playerId, jerseyNumber: JRN, role: playerRole, isWicketKeeper: isWicketK } = route.params || {}
    const { isLoading } = useSelector((state: RootState) => state.addPlayerReducer)
    const handleValue = useMemo<string>(() => {
        switch (playerRole) {
            case 'player':
                return 'Player';
            case 'captain':
                return 'Captain';
            case 'vice_captain':
                return 'Vice Captain';
            case 'twelfth_man':
                return '12th Man';
            default:
                return 'player'
        }
    }, [playerRole])
    const [role, setRole] = useState<{ key: PlayerRoleProps, value: string }>(playerRole ? {
        key: playerRole,
        value: handleValue
    } : {
        key: 'player',
        value: 'Player'
    })
    const [jerseyNumber, setJerseyNumber] = useState<string>((JRN && JRN.toString()) || '')
    const [isWicketKeeper, setIsWicketKeeper] = useState<boolean>(isWicketK || false)
    const playerRoles: DropDownObjProps[] = [
        {
            key: 'player',
            value: "Player"
        },
        {
            key: 'captain',
            value: "Captain"
        },
        {
            key: 'vice_captain',
            value: "Vice Captain"
        },
        {
            key: 'twelfth_man',
            value: "12th Man"
        },
    ]
    const disableSubmit = useMemo<boolean>(() => {
        if (jerseyNumber == JRN && role.key === playerRole && isWicketKeeper === isWicketK) {
            return true
        }
        return false
    }, [jerseyNumber, role, isWicketKeeper])
    return (
        <SimpleScreenContainer>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View style={styles.container}>
                    <DropDown
                        title="Player Role"
                        placeholder="Select Player role"
                        data={playerRoles}
                        isDropDown={true}
                        onConfirm={setRole}
                        value={role.value}
                        containerStyle={styles.fields}
                        textInputContainerStyle={styles.textInputContainerStyle}

                    />
                    <FormInput
                        title="Jersey Number"
                        placeholder="Enter jersey number"
                        onChangeText={setJerseyNumber}
                        value={jerseyNumber}
                        containerStyle={styles.fields}
                        textInputContainerStyle={styles.textInputContainerStyle}
                        keyboardType='number-pad'
                    />
                    <ToggleBtn
                        title="Player is wicket keeper?"
                        value={isWicketKeeper}
                        onValueChange={setIsWicketKeeper}
                        containerStyle={styles.dropDown}
                        trackColor={{ true: colors.themeBlue, false: colors.white }}
                    />
                </View>
            </TouchableWithoutFeedback>
            <GradientBtn
                title="Submit"
                disabled={disableSubmit}
                loading={isLoading}
                onPress={() => { Keyboard.dismiss(), updateTeamPlayerAction({ teamId, playerId, jerseyNumber: Number(jerseyNumber), isWicketKeeper, role: role.key }) }}
            />
        </SimpleScreenContainer>
    )
}
export default UpdateTeamPlayer