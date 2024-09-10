import { FC } from "react";
import EmptyText from "../../../components/emptyText";
import Pagination from "../../../components/pagination";
import { TournamentListViewProps } from "../../../modelInterface/views/tournament";
import TournamentView from '../view'
import styles from "./styles";
import SearchBar from "../../../components/searchBar";

const TournamentListView: FC<TournamentListViewProps> = ({
    data,
    onEndReached,
    onRefresh,
    isLoadingPagination,
    onSubmitEditing,
    onChangeTextSearch,
    searchKeywords,
}) => {
    return (
        <>
         {onChangeTextSearch ?
            <SearchBar
              onSubmitEditing={onSubmitEditing}
              onChangeText={onChangeTextSearch}
              value={searchKeywords}
            /> : null}
        <Pagination
            data={data}
            renderItem={({ item }) => <TournamentView {...item} />}
            ListEmptyComponent={<EmptyText title="You don't have any tournament yet!" />}
            onLoadMore={onEndReached}
            onRefreshing={onRefresh}
            contentContainerStyle={styles.contentContainer}
            isLoadingPagination={isLoadingPagination}
        />
        </>
       
    )
}
export default TournamentListView