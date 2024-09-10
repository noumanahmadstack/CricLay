import React, { FC } from "react";
import EmptyText from "../../../../components/emptyText";
import Pagination from "../../../../components/pagination";
import { SimpleScreenContainer } from "../../../../components/screensContainers/screenContainers";
import StreamingMatchView from '../../matchView/streaming'
import styles from "./styles";

const StreamingList: FC<any> = ({ route }) => {
    const { streamingLinks } = route?.params
    return (
        <SimpleScreenContainer>
            <Pagination
                data={streamingLinks}
                style={styles.container}
                ListEmptyComponent={<EmptyText title="No Videos found!" />}
                renderItem={({ item }) => (
                    <StreamingMatchView listing={true} liveStreamingUrl={item?.link} />
                )}
            />
        </SimpleScreenContainer>
    )
}
export default StreamingList