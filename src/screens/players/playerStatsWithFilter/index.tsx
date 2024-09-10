import { FC, memo } from 'react';
import { Text, View } from 'react-native';
import FilterBtn from '../../../components/filterBtn';
import { DropDownObjProps } from '../../../modelInterface/commonProps';
import { PaginationComponentProps } from '../../../modelInterface/components/pagination';
import TournamentPlayerStatsListView from '../../../views/players/playerStats/playerStatsListView';
import styles from './styles';

const PlayerStatsWithFilter: FC<Omit<PaginationComponentProps, 'renderItem'> & { filterTitle?: string, dropDownData?: DropDownObjProps[], onConfirm?: (e: any) => void }> = ({
    filterTitle,
    dropDownData,
    onConfirm,
    ...props
}) => {
    return (
        <>
            <View style={styles.filterBtnContainer}>
                {dropDownData ?
                    <>
                        <Text style={styles.title}>{filterTitle}</Text>
                        <FilterBtn
                            data={dropDownData}
                            onConfirm={onConfirm}
                        />
                    </>
                    : null
                }
            </View>
            <TournamentPlayerStatsListView
                {...props}
            />
        </>
    )
}

export default memo(PlayerStatsWithFilter);