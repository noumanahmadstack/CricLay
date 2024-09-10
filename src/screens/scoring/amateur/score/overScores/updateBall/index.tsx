import { FC, useEffect, useMemo, useState } from 'react';
import {
    Modal,
    SafeAreaView,
    View,
    Text,
} from 'react-native';
import ModalHeader from '../../../../../../components/modalHeader';
import styles from './styles';
import { UpdateModalProps } from '../../../../../../modelInterface/screens/scoring';
import FormInput from '../../../../../../components/formInput';
import SimpleBtn from '../../../../../../components/btns/simpleBtn';
import colors from '../../../../../../theme/colors';
import { BallObjProps } from '../../../../../../modelInterface/scoring';

const UpdateBall: FC<UpdateModalProps> = ({
    isVisible,
    onRequestClose,
    onConfirm,
    ballData,
    isAmateur
}) => {
    const initialBall: BallObjProps = {
        inningId: '',
        boundaryType: 'safe',
        runs: 0,
        ballNumber: 0,
        overBallsNumber: 0,
        overNumber: 0,
        ballType: 'normal',
        nonStrikerId: '',
        batsmanId: '',
        bowlerId: ''
    }
    const [updatedBall, setUpdatedBall] = useState<BallObjProps>(initialBall)
    const { boundaryType, runs } = updatedBall || {}

    const onHandleClose = () => {
        if (onRequestClose) {
            onRequestClose();
            setUpdatedBall(initialBall)
        }
    };
    const handleOnConfirm = () => {
        if (onConfirm) {
            onConfirm(updatedBall)
        }
        onRequestClose();
    };
    useEffect(() => {
        if (isVisible && ballData) {
            setUpdatedBall(ballData)
        }
    }, [isVisible, ballData])
    const handleOnChangeText = (e: string) => {
        if (ballData) {
            setUpdatedBall((prevState) => {
                return {
                    ...prevState,
                    runs: Number(e)
                }
            })
        }
    }
    const onUpdateBoundary = () => {
        setUpdatedBall((prevState) => {
            return {
                ...prevState,
                boundaryType: prevState.boundaryType == 'safe' ? (runs == 6 ? 'six' : runs == 4 ? 'four' : 'safe') : 'safe'
            }
        })
    }
    const boundaryButton = useMemo(() => {
        if (runs == 6 || runs == 4) {
            return (
                <>
                    <Text style={styles.outTitle}>Is that a boundary? (optional)</Text>
                    <SimpleBtn
                        title={'Boundary'}
                        titleColor={(boundaryType == 'four' || boundaryType == 'six') ? colors.white : colors.fontBlack}
                        containerStyle={[styles.extraTypeBtnContainer, (boundaryType == 'four' || boundaryType == 'six') && styles.selectedExtraType]}
                        onPress={onUpdateBoundary}
                    />
                </>
            )
        }
        return null
    }, [runs, boundaryType])
    return (
        <Modal
            visible={isVisible}
            transparent={true}
            animationType="fade"
            onRequestClose={onHandleClose}>
            <View style={styles.container}>
                <SafeAreaView style={styles.mainContainer}>
                    <View style={styles.internalContainer}>
                        <ModalHeader isAmateur={isAmateur} title={'Update Ball'} />
                        <FormInput
                            title="Edit Runs"
                            placeholder="Enter Runs"
                            containerStyle={styles.inputContainer}
                            keyboardType='numeric'
                            onChangeText={handleOnChangeText}
                            value={runs.toString()}
                        />
                        {boundaryButton}
                        <View style={styles.btnContainer}>
                            <SimpleBtn
                                title="Cancel"
                                containerStyle={styles.btnStyle}
                                titleColor={colors.fontBlack}
                                onPress={onHandleClose}
                            />
                            <SimpleBtn
                                title="Update"
                                onPress={handleOnConfirm}
                                titleColor={colors.white}
                                containerStyle={styles.outBtnStyle}
                            />
                        </View>
                    </View>
                </SafeAreaView>
            </View>
        </Modal>
    );
};
export default UpdateBall;
