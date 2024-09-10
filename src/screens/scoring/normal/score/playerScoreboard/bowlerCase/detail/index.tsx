import { FC } from "react";
import { FlatList } from "react-native";
import { BowlerStatsAttributesProps } from "../../../../../../../modelInterface/scoring";
import BowlerView from "../../bowlerView";
import Seprator from "../../seprator";
const BowlerCaseDetail: FC<{ bowlerData?: BowlerStatsAttributesProps | null, bowlersData?: BowlerStatsAttributesProps[] | null }> = ({
    bowlerData,
    bowlersData
}) => {
    if (bowlerData?.bowlerId) {
        return (
            <BowlerView
                name={bowlerData?.name ? bowlerData.name : ''}
                image={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSof5QJ3g-_mlUAeQxJPiZhsktYnjBJCPO_1A&usqp=CAU'}
                overs={bowlerData?.overs || bowlerData?.bowlingStat?.overs || 0}
                medianOver={
                    bowlerData?.medianOver ||
                    bowlerData?.bowlingStat?.maidenOvers ||
                    0
                }
                wickets={
                    bowlerData?.wicketsCount ||
                    bowlerData?.bowlingStat?.wicketsCount ||
                    0
                }
                runs={bowlerData?.runs || bowlerData?.bowlingStat?.runs || 0}
                isSelected={false}
                economyRate={
                    bowlerData?.economyRate ||
                    bowlerData?.bowlingStat?.economyRate ||
                    0
                }
            />
        );
    }
    return (
        <FlatList
            data={bowlersData?.filter(item => item.bowlingStat !== null)}
            keyExtractor={item => item?.bowlerId}
            ItemSeparatorComponent={() => <Seprator />}
            renderItem={({ item }) => (
                <BowlerView
                    name={item?.name ? item?.name : ''}
                    image={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSof5QJ3g-_mlUAeQxJPiZhsktYnjBJCPO_1A&usqp=CAU'}
                    overs={item?.bowlingStat?.overs || item?.overs || '0'}
                    medianOver={
                        item?.bowlingStat?.maidenOvers || item?.maidenOvers || '0'
                    }
                    wickets={
                        item?.bowlingStat?.wicketsCount || item?.wicketsCount || '0'
                    }
                    runs={item?.bowlingStat?.runs || item?.runs || '0'}
                    economyRate={
                        item?.bowlingStat?.economyRate || item?.economyRate || '0'
                    }
                />
            )}
        />
    );
}
export default BowlerCaseDetail