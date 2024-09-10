import { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import {
    FlatList,
    Modal,
    SafeAreaView,
    View,
} from 'react-native';
import ModalHeader from '../../../../../../components/modalHeader';
import { ShowSummaryModalProps } from '../../../../../../modelInterface/screens/scoring';
import styles from './styles';
import colors from '../../../../../../theme/colors';
import ToggleBtn from '../../../../../../components/toggleBtn';
import { ShowMatchSummaryProps } from '../../../../../../modelInterface/scoring';
const SummaryOptionsModal: FC<ShowSummaryModalProps> = ({
    isVisible,
    onConfirm,
    onRequestClose,
    matchDetail
}) => {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [selectedIndex, setSelectedIndex] = useState<number>(0)
    const { tickerToggleStatus, innings, status, id } = matchDetail
    const drawData: Array<{ key: ShowMatchSummaryProps, value: string, disabled: boolean }> = [
        {
            key: 'first_inning_summary',
            value: 'First Inning Summary',
            disabled: (innings.length == 1 || status == 'completed')
        },
        {
            key: 'match_summary',
            value: 'Match Summary',
            disabled: status !== 'completed'
        },
        {
            key: 'current_batting_summary',
            value: 'Current Batting Team Summary',
            disabled: status == 'completed'
        },
        {
            key: 'current_bowling_summary',
            value: 'Current Bowling Team Summary',
            disabled: status == 'completed'
        }
    ];
    const onHandleClose = () => {
        if (onRequestClose) {
            onRequestClose();
        }
    };
    const handleOnConfirm = async (status: ShowMatchSummaryProps) => {
        if (onConfirm) {
            setIsLoading(true)
            await onConfirm({ status, id });
            setIsLoading(false)
        }
    };
    return (
        <Modal
            visible={isVisible}
            transparent={true}
            animationType="fade"
            onRequestClose={onHandleClose}>
            <View style={styles.container}>
                <SafeAreaView style={styles.mainContainer}>
                    <View style={styles.internalContainer}>
                        <ModalHeader isAmateur={true} title={'Ticker'} onCancel={onHandleClose} />
                        <FlatList
                            data={drawData}
                            keyExtractor={({ key }) => key}
                            contentContainerStyle={styles.contentContainerStyle}
                            renderItem={({ item, index }) => (
                                <ToggleBtn
                                    style={styles.switchBtnMargin}
                                    title={item.value || ''}
                                    onValueChange={(boolean) => { setSelectedIndex(index), handleOnConfirm(boolean ? item.key : 'regular') }}
                                    disabled={item.disabled}
                                    isLoading={selectedIndex == index ? isLoading : false}
                                    value={tickerToggleStatus == item.key}
                                    trackColor={{ false: colors.white, true: colors.darkAmateurPink }}
                                />
                            )}
                        />
                    </View>
                </SafeAreaView>
            </View>
        </Modal>
    );
};
export default SummaryOptionsModal;
