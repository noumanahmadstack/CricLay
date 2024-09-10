import { FC, ReactNode, useCallback, useState } from "react";
import { FlatList } from "react-native";
import { FilterBtnIcon } from "../../assets/svg";
import { FilterBtnProps } from "../../modelInterface/components/filterBtn";
import ModalView from "./modal";
const FilterBtn: FC<FilterBtnProps> = ({ style, title, data, multiSelect, onConfirm, returnString }) => {
    const [isVisible, setVisible] = useState<boolean>(false)
    const [localValue, setLocalValue] = useState<string>('');
    const [selectedItem, setSelectedItem] = useState<Array<{ key?: string; value?: string; LeftChild?: any }>>([]);
    const [localValueArray, setLocalValueArray] = useState<Array<{ key?: string; value?: string; LeftChild?: any }>>([]);
    const isSelected = useCallback(
        (item: { key?: string; value?: string; LeftChild?: ReactNode }) => {
            if (selectedItem.length > 0) {
                return selectedItem?.some(
                    e => JSON.stringify(e) === JSON.stringify(item),
                );
            }
        },
        [selectedItem],
    );
    const onSelect = (e: {
        key?: string;
        value?: string;
        LeftChild?: ReactNode;
    }) => {
        if (
            selectedItem?.some(object => JSON.stringify(object) === JSON.stringify(e))
        ) {
            setSelectedItem(
                selectedItem?.filter(
                    data => JSON.stringify(data) !== JSON.stringify(e),
                ),
            );
        }
        if (multiSelect) {
            setSelectedItem(prev => [...prev, e]);
        } else {
            setSelectedItem([e]);
        }
    };
    const handleOnConfirm = ({
        date,
        localValue,
    }: {
        date?: Date;
        localValue?: string;
    }) => {
        if (multiSelect) {
            setLocalValueArray(selectedItem);
            if (onConfirm) {
                onConfirm(selectedItem[0]);
            }
        } else if (!!localValue && localValue !== '') {
            setLocalValue(localValue);
            if (onConfirm) {
                onConfirm(returnString ? localValue : selectedItem[0]);
            }
        }
        setVisible(false);
    };
    return (
        <>
            <ModalView
                data={data}
                onConfirm={handleOnConfirm}
                onSelect={onSelect}
                isSelected={isSelected}
                headerTitle={title}
                visible={isVisible}
                onRequestClose={() => setVisible(false)}
            />
            <FilterBtnIcon style={style} onPress={() => setVisible(true)} />
        </>
    )
}
export default FilterBtn