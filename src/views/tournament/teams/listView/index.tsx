import React, { FC, memo, useMemo } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';
import { TournamentObjectProps } from '../../../../modelInterface/tournaments';
import TournamentTeamsView from '../view';
import Pagination from '../../../../components/pagination';
import EmptyText from '../../../../components/emptyText';
const TournamentTeamListView: FC<
    {
        data: TournamentObjectProps[],
        isPrivate?: boolean,
        onPressAdd?: () => void,
        tournament_id?: string,
        group_id?: string
    }
> = ({ data, isPrivate, onPressAdd, tournament_id, group_id }) => {
    const AddTeamBtn = useMemo(() => {
        if (!isPrivate) {
            return (
                <TouchableOpacity
                    disabled={!!isPrivate}
                    style={styles.addTeamTouchableOpacity}
                    onPress={onPressAdd}>
                    <Text style={styles.addButtonText}>
                        Add Team
                    </Text>
                </TouchableOpacity>
            )
        }
    }, [onPressAdd, isPrivate])
    return (
        <Pagination
            data={data}
            ListEmptyComponent={
                <View style={styles.groupInternalView}>
                    <EmptyText containerStyle={styles.height} title='This group has no Teams' />
                    <>
                        {AddTeamBtn}
                    </>
                </View>
            }
            renderItem={({ item }) => (
                <TournamentTeamsView
                    team={item}
                    tournament_id={tournament_id}
                    isPrivate={isPrivate}
                    group_id={group_id}
                />
            )}
        />
    )


};
export default memo(TournamentTeamListView);