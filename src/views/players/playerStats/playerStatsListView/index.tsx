import { FC } from "react";
import EmptyText from "../../../../components/emptyText";
import ListViewSeprator from "../../../../components/listViewSeprator";
import Pagination from "../../../../components/pagination";
import { PaginationComponentProps } from "../../../../modelInterface/components/pagination";
import TournamentPlayerStatsView from "../view";
import styles from "./styles";
const TournamentPlayerStatsListView: FC<Omit<PaginationComponentProps, 'renderItem'>> = (props) => {
    return (
        <Pagination
            {...props}
            ItemSeparatorComponent={() => <ListViewSeprator />}
            ListEmptyComponent={<EmptyText title="No Players" />}
            contentContainerStyle={styles.container}
            renderItem={({ item, index }) => <TournamentPlayerStatsView index={index} {...item} />}
        />
    )
}
export default TournamentPlayerStatsListView