import { FC, useState } from 'react';
import {
  View,
  Modal,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import GradientBtn from '../../../../components/btns/gradientBtn';
import styles from './styles';
import FormInput from '../../../../components/formInput';
import { UpdateGroup } from '../../../../redux/tournaments/createTournament/action';
import { GetTournamentGroupProps, GroupCategoryType } from '../../../../modelInterface/tournaments';
import { DropDownObjProps } from '../../../../modelInterface/commonProps';
import DropDown from '../../../../components/dropDown';

const EditGroup: FC<{ visible: boolean, onClose: () => void, setSelectedGroup: (prevState: any) => void, selectedGroup: GetTournamentGroupProps, tournament_id: string,isAmateur:boolean}> = ({ visible, onClose, selectedGroup, setSelectedGroup, tournament_id,isAmateur }) => {
  const { name, id } = selectedGroup || {}
  const [categoryType, setCategoryType] = useState<GroupCategoryType>('league');
  const onHandleClose = () => {
    if (onClose) {
      onClose();
    }
  };

  const category: DropDownObjProps[] = [
    {
      key: "league",
      value: "League"
    },
    {
      key: 'knockout',
      value: 'Knockout',
    },
    {
      key: 'playoffs',
      value: 'Play Offs',
    },

  ];
  return (
    <>
      <Modal
        transparent={true}
        onRequestClose={onHandleClose}
        visible={visible}
        animationType="fade">
        <SafeAreaView style={styles.container}>
          <TouchableOpacity
            onPress={onHandleClose}
            style={styles.touchableArea}
          />
          <View
            style={{ backgroundColor: 'white', marginHorizontal: 20, padding: 20 }}>

            <FormInput
              title="Group Title"
              placeholder="Grooup Title"
              textInputContainerStyle={styles.inputFields}
              onChangeText={(name) => setSelectedGroup((prevState: GetTournamentGroupProps) => {
                return {
                  ...prevState,
                  name
                }
              })}
              value={name}
            />

            <DropDown
              data={category}
              isDropDown={true}
              titleStyle={styles.title}
              title="Select Category"
              placeholder="Category"
              onConfirm={(e) =>
                setCategoryType(e?.key)
              }
              value={categoryType}
              // returnString={true}
              textInputContainerStyle={styles.inputFields}
            />
            <GradientBtn
              title="Update Group Tilte"
              containerStyle={styles.btnContainer}
              btnStyle={styles.grdBtnContainer}
              onPress={() => { { UpdateGroup({ tournament_id, id, name, categoryType }), onHandleClose() } }}
              isAmateur={isAmateur}
            />

          </View>
          <TouchableOpacity
            onPress={onHandleClose}
            style={styles.touchableArea}
          />
        </SafeAreaView>
      </Modal>
    </>
  );
};
export default EditGroup;
