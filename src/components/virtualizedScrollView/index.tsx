import { FC, ReactNode } from "react";
import { FlatList } from "react-native";
const VirtualizedScrollView: FC<{ children: ReactNode, onRefresh?: () => void, refreshing?: boolean }> = ({ children, onRefresh, refreshing }) => {
    return (
        <FlatList
            data={[]}
            onRefresh={onRefresh}
            refreshing={refreshing}
            ListEmptyComponent={null}
            renderItem={null}
            ListHeaderComponent={
                <>
                    {children}
                </>
            }
        />
    )
}
export default VirtualizedScrollView