import {FC} from 'react';
import {FlatList, Modal, SafeAreaView, Text, View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {
  CrossActionBottomTabIcon,
  MatchesActionBtnIcons,
  PlayersActionBtnIcons,
  TeamsActionBtnIcons,
  TournamentsActionBtnIcons,
} from '../../assets/svg';
import {setIsShowActionModal} from '../../redux/authentication/login/reducer';
import {RootState} from '../../redux/store/store';
import styles from './styles';
import ModalHeader from '../../components/modalHeader';
import ListViewSeprator from '../../components/listViewSeprator';
import {navigate} from '../../routes/rootNavigation';
import {checkUserLogined} from '../../redux/authentication/login/action';
const ActionModal: FC = () => {
  const dispatch = useDispatch();
  const {isShowActionModal} = useSelector(
    (state: RootState) => state.loginReducer,
  );
  const {userData} = useSelector((state: RootState) => state.userReducer);
  const options = [
    {
      title: 'Players',
      icon: PlayersActionBtnIcons,
      onPress: () => {
        dispatch(setIsShowActionModal(false)), navigate('AllPlayers');
      }
    },
    {
      title: 'Teams',
      icon: TeamsActionBtnIcons,
      onPress: () => {
        dispatch(setIsShowActionModal(false)), navigate('AllTeams');
      }
    },
    {
      title: 'Matches',
      icon: MatchesActionBtnIcons,
      onPress: () => {
        dispatch(setIsShowActionModal(false)), navigate('Matches');
      }
    },
    {
      title: 'Tournaments',
      icon: TournamentsActionBtnIcons,
      onPress: () => {
        dispatch(setIsShowActionModal(false)), navigate('AllTournaments');
      }
    },
    {
      title: 'Hundred Balls Rules',
      icon: TournamentsActionBtnIcons,
      onPress: () => {
        dispatch(setIsShowActionModal(false)), navigate('AmateurRules');
      }
    }
  ];
  const myOptions = [
    {
      title: 'My Matches',
      icon: MatchesActionBtnIcons,
      onPress: () => {
        if (!userData?.user) {
          checkUserLogined(), dispatch(setIsShowActionModal(false));
        } else {
          {
            dispatch(setIsShowActionModal(false)), navigate('MyMatches');
          }
        }
      },
    },
    {
      title: 'My Tournaments',
      icon: TournamentsActionBtnIcons,
      onPress: () => {
        if (!userData?.user) {
          checkUserLogined(), dispatch(setIsShowActionModal(false));
        } else {
          {
            dispatch(setIsShowActionModal(false)), navigate('Tournaments');
          }
        }
      },
    },
  ];
  return (
    <Modal
      animationType="fade"
      transparent={true}
      onRequestClose={() => dispatch(setIsShowActionModal(false))}
      visible={isShowActionModal}>
      <SafeAreaView style={styles.safeareaContainer}>
        <View>
          <FlatList
            data={options}
            numColumns={3}
            keyExtractor={({title}) => title}
            columnWrapperStyle={styles.columnContainer}
            style={styles.flatlistStyle}
            ListHeaderComponent={<ModalHeader title="Menu" />}
            ListHeaderComponentStyle={styles.listHeaderComponentStyle}
            contentContainerStyle={styles.contentContainerStyle}
            ItemSeparatorComponent={() => <ListViewSeprator />}
            ListFooterComponentStyle={styles.listFooterComponentStyle}
            ListFooterComponent={
              userData?.user ? (
                <FlatList
                  data={myOptions}
                  numColumns={3}
                  keyExtractor={({title}) => title}
                  columnWrapperStyle={styles.columnContainer}
                  style={styles.flatlistStyle}
                  ListHeaderComponentStyle={styles.listHeaderComponentStyle}
                  contentContainerStyle={styles.contentContainerStyle}
                  ItemSeparatorComponent={() => <ListViewSeprator />}
                  renderItem={({item}) => (
                    <View style={styles.itemContainer}>
                      <item.icon onPress={item.onPress} />
                      <Text style={styles.title}>{item.title}</Text>
                    </View>
                  )}
                />
              ) : null
            }
            renderItem={({item}) => (
              <View style={styles.itemContainer}>
                <item.icon onPress={item.onPress} />
                <Text style={styles.title}>{item.title}</Text>
              </View>
            )}
          />
        </View>
      </SafeAreaView>
      <CrossActionBottomTabIcon
        onPress={() => dispatch(setIsShowActionModal(false))}
        style={styles.actionBtn}
      />
    </Modal>
  );
};
export default ActionModal;
