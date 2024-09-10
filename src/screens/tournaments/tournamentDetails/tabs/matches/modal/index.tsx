import { FC, useEffect, useMemo, useState } from 'react';
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { useSelector } from 'react-redux';
import styles from './styles';
import { RootState } from '../../../../../../redux/store/store';
import { navigate } from '../../../../../../routes/rootNavigation';
import { GetAllTournamentGroups } from '../../../../../../redux/tournaments/getTournament/action';
import DropDown from '../../../../../../components/dropDown';
import GradientBtn from '../../../../../../components/btns/gradientBtn';
import colors from '../../../../../../theme/colors';
import { DropDownObjProps } from '../../../../../../modelInterface/commonProps';
import { GroupCategoryType } from '../../../../../../modelInterface/tournaments';

const SelectMatch: FC<any> = ({ visible, onClose, tournament_id,isAmateur }) => {
  const { allTournamentGroups,getTournament} = useSelector(
    (state: RootState) => state.getTournamentReducer,
  );

  const onHandleClose = () => {
    if (onClose) {
      onClose();
    }
  };  
  const [group_id, setGroupId] = useState('');
  const [categoryType, setCategoryType] = useState<GroupCategoryType>('match');
  const [subCategory, setSubCategory] = useState('');
  useEffect(() => {
    if (categoryType === 'match') {
      GetAllTournamentGroups({ tournament_id });
    }
  }, [tournament_id, categoryType]);

  const keyValuePairs = allTournamentGroups.map(item => ({
    key: item.id,
    value: item.name
  }));
  const category: Array<{ key: GroupCategoryType, value: string }> = [
    {
      key: "match",
      value: "League Match"
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
  const subCategories: Record<string, DropDownObjProps[]> = {
    knockout: [
      {
        key: "quarter_final",
        value: 'Quarter Final'
      },
      {
        key: "semi_final",
        value: "Semi Final"
      },
      {
        key: "final",
        value: "Final"
      }
    ],
    playoffs: [
      {
        key: "qualifier",
        value: 'Qualifier'
      },
      {
        key: 'eliminator',
        value: 'Eliminator',
      },
      {
        key: "final",
        value: "Final"
      }
    ]
  };
  const filterSubCategory = useMemo(() => {
    GetAllTournamentGroups({ tournament_id, categoryType: categoryType === 'match' ? 'league' : categoryType });
    return subCategories[categoryType]
  }, [categoryType])

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
            style={styles.contentWrapper}>

            <Text style={styles.title}>Category</Text>
            <View style={{ flexDirection: "row" }}>
              {category.map((e) => (
                <TouchableOpacity
                  style={[styles.buttonWrapper, {
                    backgroundColor:
                      categoryType === e?.key ? '#C6DCFC' : colors.white
                  }]}
                  onPress={() =>
                    setCategoryType(e?.key)
                  }
                >
                  <Text style={styles.btnTitle}>
                    {e?.value}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
            {
              categoryType !== 'match' &&
              <>
                <Text style={styles.title}>Sub Category</Text>
                <View style={{ flexDirection: "row" }}>
                  {filterSubCategory?.map((e) => (
                    <TouchableOpacity
                      style={[styles.buttonWrapper, {
                        backgroundColor:
                          subCategory === e?.key ? '#C6DCFC' : colors.white
                      }]}
                      onPress={() => { setSubCategory(e?.key) }}
                    >
                      <Text style={styles.btnTitle}>
                        {e?.value}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </>
            }
            <DropDown
              data={keyValuePairs}
              isDropDown={true}
              titleStyle={styles.title}
              title="Select Group"
              placeholder="Group"
              onConfirm={(e) =>
                setGroupId(e?.key)
              }
              // returnString={true}
              textInputContainerStyle={styles.inputFields}
              isAmateur={isAmateur}
            />
            {
              categoryType &&
              <GradientBtn
                title="Go For Match"
                containerStyle={styles.btnContainer}
                btnStyle={styles.grdBtnContainer}
                onPress={() => { navigate('StartTournamentMatch', { group_id, categoryType, tournament_id, subCategory ,isAmateur}), onHandleClose() }}
                isAmateur={isAmateur}
              />
            }
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
export default SelectMatch;