import { FC, useState } from 'react';
import {
    Modal,
    SafeAreaView,
    View,
} from 'react-native';
import ModalHeader from '../../../../../../components/modalHeader';
import { PointsToggleModalProps } from '../../../../../../modelInterface/screens/scoring';
import styles from './styles';
import colors from '../../../../../../theme/colors';
import ToggleBtn from '../../../../../../components/toggleBtn';
import Footer from '../../../../../../components/dropDown/modal/components/footer';
const PointsToggleModal: FC<PointsToggleModalProps> = ({
    isVisible,
    onConfirm,
    onRequestClose,
    teamOne,
    teamTwo
}) => {
    const [points, setPoints] = useState({
        teamOneTrouser: false,
        teamOneShirt: false,
        teamTwoTrouser: false,
        teamTwoShirt: false
    })
    const onHandleClose = () => {
        if (onRequestClose) {
            onRequestClose();
        }
    };
    const handleOnConfirm = async () => {
        if (onConfirm) {
            onConfirm(points);
            onRequestClose()
        }
    };
    [
        {
            key: 'teamOneTrouser',
            value: 'Team one Trouser',
            disabled: false
        },
        {
            key: 'teamOneShirt',
            value: 'Team one Shirt',
            disabled: false
        },
        {
            key: 'teamTwoTrouser',
            value: 'Team two Trousery',
            disabled: false
        },
        {
            key: 'teamTwoShirt',
            value: 'Team two Shirt',
            disabled: false
        }
    ]
    return (
        <Modal
            visible={isVisible}
            transparent={true}
            animationType="fade"
            onRequestClose={onHandleClose}>
            <View style={styles.container}>
                <SafeAreaView style={styles.mainContainer}>
                    <View style={styles.internalContainer}>
                        <ModalHeader isAmateur={true} title={'Points'} onCancel={onHandleClose} />
                        <ToggleBtn
                            containerStyle={styles.switchBtnMargin}
                            title={`${teamOne?.name} - Trouser Points`}
                            onValueChange={(boolean) => {
                                setPoints((prevState) => {
                                    return {
                                        ...prevState,
                                        teamOneTrouser: boolean
                                    }
                                })
                            }}
                            value={points.teamOneTrouser}
                            trackColor={{ false: colors.white, true: colors.darkAmateurPink }}
                        />
                        <ToggleBtn
                            containerStyle={styles.switchBtnMargin}
                            title={`${teamOne?.name} - Shirt Points`}
                            onValueChange={(boolean) => {
                                setPoints((prevState) => {
                                    return {
                                        ...prevState,
                                        teamOneShirt: boolean
                                    }
                                })
                            }}
                            value={points.teamOneShirt}
                            trackColor={{ false: colors.white, true: colors.darkAmateurPink }}
                        />
                        <ToggleBtn
                            containerStyle={styles.switchBtnMargin}
                            title={`${teamTwo?.name} - Trousery Points`}
                            onValueChange={(boolean) => {
                                setPoints((prevState) => {
                                    return {
                                        ...prevState,
                                        teamTwoTrouser: boolean
                                    }
                                })
                            }}
                            value={points.teamTwoTrouser}
                            trackColor={{ false: colors.white, true: colors.darkAmateurPink }}
                        />
                        <ToggleBtn
                            containerStyle={styles.switchBtnMargin}
                            title={`${teamTwo?.name} - Shirt Points`}
                            onValueChange={(boolean) => {
                                setPoints((prevState) => {
                                    return {
                                        ...prevState,
                                        teamTwoShirt: boolean
                                    }
                                })
                            }}
                            value={points.teamTwoShirt}
                            trackColor={{ false: colors.white, true: colors.darkAmateurPink }}
                        />
                        <Footer onPressCancel={onHandleClose} onPressOk={handleOnConfirm} />
                    </View>
                </SafeAreaView>
            </View>
        </Modal>
    );
};
export default PointsToggleModal;
