import React, { FC, memo, useCallback, useMemo } from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { GetTournamentGroupProps } from '../../../../modelInterface/tournaments';
import { DeleteGroup } from '../../../../redux/tournaments/createTournament/action';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import TournamentTeamListView from '../../teams/listView'
const TournamentGroupView: FC<
    {
        tournament_id?: string,
        isPrivate?: boolean,
        item: GetTournamentGroupProps,
        setSelectedGroup: (data: GetTournamentGroupProps) => void,
        setVisible: (data: boolean) => void,
        setEditVisible: (data: boolean) => void,
    }
> = ({ tournament_id, isPrivate, item, setSelectedGroup, setEditVisible, setVisible }) => {
    const EditBtn = useMemo(() => {
        if (!isPrivate) {
            return (
                <View
                    style={styles.smallIconView}>
                    <AntDesign
                        name="edit"
                        color={'#C7C6C6'}
                        size={20}
                        onPress={() => {
                            setEditVisible(true), setSelectedGroup(item)
                        }}
                    />
                </View>
            )
        }
    }, [item])
    const AddTournamentTeamBtn = useMemo(() => {
        if (!isPrivate && item?.tournamentTeams?.collection.length > 0) {
            return (
                <View
                    style={styles.smallIconView}>
                    <AntDesign
                        name="plus"
                        color={'#C7C6C6'}
                        size={20}
                        onPress={() => {
                            setVisible(true), setSelectedGroup(item)
                        }}
                    />
                </View>
            )
        }
    }, [item])
    const DeleteGroupBtn = useMemo(() => {
        if (!isPrivate && item?.tournamentTeams?.collection?.length < 1) {
            return (
                <View
                    style={styles.smallIconView}>
                    <FontAwesome5
                        name="trash"
                        color={'#C7C6C6'}
                        size={20}
                        onPress={() => DeleteGroup({ group_id: item?.id })}
                    />
                </View>
            )
        }
    }, [item])
    const onAddTournammentTeam = useCallback(() => {
        setVisible(true), setSelectedGroup(item)
    }, [item])
    return (
        <View style={styles.groupListWrapper}>
            <View style={styles.row}>
                <Text style={styles.groupTitle}>{item?.name}</Text>
                <View style={[styles.rowDirection]}>
                    {EditBtn}
                    {AddTournamentTeamBtn}
                    {DeleteGroupBtn}
                </View>
            </View>
            <View style={styles.pointTableView}>
                <View style={{ width: '35%' }} />
                {item?.tournamentTeams?.collection?.length > 0 && (
                    <View style={styles.pointTableHeader}>
                        <Text style={styles.headerText}>M</Text>
                        <Text style={styles.headerText}>W</Text>
                        <Text style={styles.headerText}>L</Text>
                        <Text style={styles.headerText}>T</Text>
                        <Text style={styles.headerText}>P</Text>
                        <Text style={[styles.headerText, { width: '35%' }]}>NRR</Text>
                    </View>
                )}
            </View>
            <View style={styles.TeamView}>
                <TournamentTeamListView
                    data={item?.tournamentTeams?.collection}
                    tournament_id={tournament_id}
                    isPrivate={isPrivate}
                    group_id={item?.id}
                    onPressAdd={onAddTournammentTeam}
                />
            </View>
        </View>
    );
};
export default memo(TournamentGroupView)