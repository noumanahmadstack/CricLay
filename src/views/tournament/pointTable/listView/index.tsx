import { FC, useMemo, useState } from 'react';
import Entypo from 'react-native-vector-icons/Entypo';
import {
    FlatList,
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
    Modal,
    Image,
} from 'react-native';
import {
    AddTeamtoGroup,
    CreateGroup,
} from '../../../../redux/tournaments/createTournament/action';
import styles from './styles';
import EmptyText from '../../../../components/emptyText';
import { marginHorizontal } from '../../../../theme/margins';
import { TournamentTeamObjProps } from '../../../../modelInterface/team';
import { GetTournamentGroupProps } from '../../../../modelInterface/tournaments';
import FloatingTabBtn from '../../../../components/floatingAddBtn';
import EditGroup from '../../../../tabs/tournament/groups/editModal';
import Pagination from '../../../../components/pagination';
import TournamentGroupView from '../view'
import { GetAllTournamentGroups } from '../../../../redux/tournaments/getTournament/action';

const PointTable: FC<{ tournament_id: string, isPrivate: boolean, teams: TournamentTeamObjProps[], allTournamentGroups: GetTournamentGroupProps[],tournamentType:string }> = ({ tournament_id, isPrivate,teams, allTournamentGroups ,tournamentType}) => {
    const [visible, setVisible] = useState<boolean>(false);
    const [editVisible, setEditVisible] = useState<boolean>(false);
    const [selectedGroup, setSelectedGroup] = useState<GetTournamentGroupProps>({
        id: '',
        tournament_id: '',
        group_id: '',
        teams: {
            collection: [],
        },
        tournamentTeams: {
            collection: []
        }
    })
    const AddTeam = (item: TournamentTeamObjProps) => {
        AddTeamtoGroup({ tournament_id, team_id: item?.id, group_id: selectedGroup?.id });
    };
    const CreateGroupBtn = useMemo(() => {
        if (!isPrivate) {
            return (
                <FloatingTabBtn
                    onPress={() => CreateGroup({ tournament_id })}
                   isAmateur={tournamentType == 'amateur'}
                />
            )
        }
    }, [isPrivate, tournament_id])
    return (
        <SafeAreaView style={styles.safeAriaView}>
            <Modal
                visible={visible}
                animationType="fade"
                onRequestClose={() => setVisible(false)}>
                <SafeAreaView style={styles.modalHeader}>
                    <Entypo
                        name="cross"
                        color={'white'}
                        size={30}
                        style={styles.crossIcon}
                        onPress={() => setVisible(false)}
                    />
                    <Text style={styles.headerTitle}>Select Teams</Text>
                </SafeAreaView>
                <View style={styles.modalFLatlistWrapper}>
                    <FlatList
                        data={teams}
                        style={{ margin: marginHorizontal }}
                        showsVerticalScrollIndicator={false}
                        keyExtractor={({ id }) => id}
                        initialNumToRender={5}
                        maxToRenderPerBatch={5}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                style={styles.modalInnerTouchableOpacity}
                                onPress={() => AddTeam(item)}>
                                <View style={styles.modalInnerView}>
                                    <Image
                                        style={styles.modalInnerImamge}
                                        source={
                                            item.logoUrl
                                                ? { uri: item.logoUrl }
                                                : require('../../../../assets/images/teams/Icon.jpg')
                                        }
                                    />
                                    <View style={styles.contentWrapper}>
                                        <Text style={styles.modalTeamTitle}>{item?.name}</Text>
                                        <Text style={styles.teamDesc}>
                                            We Play with heart and soul
                                        </Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )}
                    />
                </View>
            </Modal>
            <EditGroup
                onClose={() => setEditVisible(false)}
                visible={editVisible}
                setSelectedGroup={setSelectedGroup}
                selectedGroup={selectedGroup}
                tournament_id={tournament_id}
                isAmateur={tournamentType == 'amateur'}
            />
            <Pagination
                data={allTournamentGroups}
                ListEmptyComponent={<EmptyText title="Create Groups and Add Teams to generate point table" />}
                onRefreshing={() => GetAllTournamentGroups({ tournament_id })}
                renderItem={({ item }) => (
                    <TournamentGroupView
                        item={item}
                        isPrivate={isPrivate}
                        tournament_id={tournament_id}
                        setEditVisible={setEditVisible}
                        setVisible={setVisible}
                        setSelectedGroup={setSelectedGroup}
                    />
                )}
            />
            {CreateGroupBtn}
        </SafeAreaView>
    );
};
export default PointTable;
