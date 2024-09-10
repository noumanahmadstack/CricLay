import {NativeStackScreenProps} from '@react-navigation/native-stack';
type AddPlayerParamsListType = {
  AddPlayers: {
    teamId: string;
  };
};
type SelectPlayerParamsListType = {
  SelectPlayers: {
    id: string;
  };
};
export type AddPlayersRoutesProps = NativeStackScreenProps<
  AddPlayerParamsListType,
  'AddPlayers'
>;
export type SelectPlayerRoutesProps = NativeStackScreenProps<
  SelectPlayerParamsListType,
  'SelectPlayers'
>;
