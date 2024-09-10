import {FC, useEffect} from 'react';
import {ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {SimpleScreenContainer} from '../../../components/screensContainers/screenContainers';
import FormInput from '../../../components/formInput';
import styles from './styles';
import {DateTimeIcon, NameIcon} from '../../../assets/svg';
import GradientBtn from '../../../components/btns/gradientBtn';
import DropDown from '../../../components/dropDown';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import colors from '../../../theme/colors';
import BallsType from '../../../components/ballsType';
import {
  setBallType,
  setCityName,
  setCountryName,
  setPlayerPerTeam,
  setSeasonYear,
  setTournamentName,
  setTournamentType,
  setStartDate,
  setEndDate,
  setTypeDescription,
  setUpdatedStartDate,
  setUpdatedEndDate,
} from '../../../redux/tournaments/createTournament/reducer';
import {RootState} from '../../../redux/store/store';
import {
  resetCreateTournament,
  submitTournament,
} from '../../../redux/tournaments/createTournament/action';
import {NavigationProps} from '../../../modelInterface/navigation';
import {setTournament} from '../../../redux/tournaments/getTournament/reducer';
import {
  dateFormatter,
  capitalizeFirstLetter,
} from '../../../utilis/dateFormatter';

const CreateTournament: FC<NavigationProps> = () => {
  const dispatch = useDispatch();
  const {
    name,
    seasonYear,
    playerPerTeam,
    country,
    city,
    startDate,
    endDate,
    tournamentType,
    ballType,
    typeDescription,
  } = useSelector((state: RootState) => state.createTournamentReducer);
  const {getTournament} = useSelector(
    (state: RootState) => state.getTournamentReducer,
  );
  const tournament_id = getTournament?.id;
  const startDateFormat = dateFormatter(getTournament?.startDate);
  const endDateFormat = dateFormatter(getTournament?.endDate);
  const typeData = [
    {
      key: '0',
      value: 'Open',
    },
    {
      key: '1',
      value: 'School',
    },
    {
      key: '2',
      value: 'Community',
    },
    {
      key: '3',
      value: 'Corporate',
    },
    {
      key: '4',
      value: 'Club',
    },
    {
      key: '5',
      value: 'Other',
    },
  ];
  useEffect(() => {
    return () => {
      resetCreateTournament();
    };
  }, []);
  return (
    <SimpleScreenContainer isBlue={true}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {/* <View style={{flex:1,height:120,backgroundColor:"#E4E4E4",marginTop:20,borderRadius:10}}/> */}
        <FormInput
          title="Tournament Name"
          placeholder="Tournament Name"
          LeftChild={<NameIcon />}
          textInputContainerStyle={styles.inputFields}
          onChangeText={e =>
            dispatch(
              tournament_id
                ? setTournament({...getTournament, name: e})
                : dispatch(setTournamentName(e)),
            )
          }
          value={tournament_id ? getTournament?.name : name}
        />
        <FormInput
          keyboardType="numeric"
          title="Season Year"
          placeholder="Season Year"
          LeftChild={<DateTimeIcon />}
          textInputContainerStyle={styles.inputFields}
          onChangeText={e =>
            dispatch(
              tournament_id
                ? setTournament({...getTournament, seasonYear: e})
                : dispatch(setSeasonYear(e)),
            )
          }
          value={
            tournament_id ? getTournament?.seasonYear.toString() : seasonYear
          }
        />
        <FormInput
          keyboardType="numeric"
          title="Player Per Team"
          placeholder="Player Per Team"
          LeftChild={<NameIcon />}
          textInputContainerStyle={styles.inputFields}
          onChangeText={e =>
            dispatch(
              tournament_id
                ? setTournament({...getTournament, playerPerTeam: Number(e)})
                : dispatch(setPlayerPerTeam(Number(e))),
            )
          }
          value={
            tournament_id
              ? getTournament?.playerPerTeam?.toString()
              : playerPerTeam.toString()
          }
        />
        <FormInput
          title="Country"
          placeholder="Country Name"
          LeftChild={<DateTimeIcon />}
          textInputContainerStyle={styles.inputFields}
          onChangeText={e =>
            dispatch(
              tournament_id
                ? setTournament({...getTournament, country: e})
                : dispatch(setCountryName(e)),
            )
          }
          value={tournament_id ? getTournament?.country : country}
        />
        <FormInput
          title="City"
          placeholder="City Name"
          LeftChild={<DateTimeIcon />}
          textInputContainerStyle={styles.inputFields}
          onChangeText={e =>
            dispatch(
              tournament_id
                ? setTournament({...getTournament, city: e})
                : dispatch(setCityName(e)),
            )
          }
          value={tournament_id ? getTournament?.city : city}
        />
        <DropDown
          title="Start Date"
          placeholder="Select Start Date"
          isCalendar={true}
          LeftChild={<DateTimeIcon />}
          textInputContainerStyle={styles.inputFields}
          onConfirm={e => {
            dispatch(
              tournament_id
                ? setUpdatedStartDate(e)
                : dispatch(setStartDate(e)),
            );
          }}
          value={
            tournament_id ? startDateFormat.toString() : startDate.toString()
          }
        />
        {(startDate || tournament_id) && (
          <DropDown
            title="End Date"
            placeholder="Select End Date"
            isCalendar={true}
            LeftChild={<DateTimeIcon />}
            textInputContainerStyle={styles.inputFields}
            onConfirm={e => {
              dispatch(
                tournament_id ? setUpdatedEndDate(e) : dispatch(setEndDate(e)),
              );
            }}
            value={
              tournament_id ? endDateFormat.toString() : endDate.toString()
            }
          />
        )}

        <DropDown
          data={typeData}
          isDropDown={true}
          // isCustomInputForDropDown={true}
          LeftChildForDropDownInput={
            <FontAwesome5Icon
              size={18}
              name="baseball-ball"
              color={colors.disableFont}
            />
          }
          title="Tournament Type"
          placeholder="Tournament Type"
          onConfirm={e => {
            dispatch(
              tournament_id
                ? setTournament({...getTournament, tournamentType: e})
                : dispatch(setTournamentType(e)),
            );
          }}
          returnString={true}
          textInputContainerStyle={styles.inputFields}
          value={
            tournament_id
              ? capitalizeFirstLetter(getTournament?.tournamentType)
              : tournamentType
          }
        />
        {(getTournament?.tournamentType === 'Other' ||
          tournamentType === 'Other') && (
          <FormInput
            title="Type Description"
            placeholder="Enter Type Description"
            LeftChild={<DateTimeIcon />}
            textInputContainerStyle={styles.inputFields}
            onChangeText={e =>
              dispatch(
                tournament_id
                  ? setTournament({...getTournament, typeDescription: e})
                  : dispatch(setTypeDescription(e)),
              )
            }
            value={
              tournament_id ? getTournament?.typeDescription : typeDescription
            }
          />
        )}

        <BallsType
          value={tournament_id ? getTournament?.ballType : ballType}
          onPress={({key}: {key: string}) => {
            dispatch(
              tournament_id
                ? setTournament({...getTournament, ballType: key})
                : dispatch(setBallType(key)),
            );
          }}
        />
        <GradientBtn
          title={tournament_id ? 'Update' : 'Create'}
          // loading={isLoading}
          containerStyle={styles.btnContainer}
          btnStyle={styles.btnStyle}
          onPress={() => submitTournament(tournament_id)}
          disabled={
            !tournament_id && (!name || !ballType || !seasonYear || !startDate)
          }
          isAmateur={getTournament.tournamentType === "amateur"}
        />
      </ScrollView>
    </SimpleScreenContainer>
  );
};
export default CreateTournament;
