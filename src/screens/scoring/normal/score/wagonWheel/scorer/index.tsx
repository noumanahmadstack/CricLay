import { FC } from 'react';
import { Modal, SafeAreaView, Text, TouchableOpacity, View, Dimensions } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import { WagonWheelSvg } from '../../../../../../assets/svg';
import { WagonWheelForScorerProps } from '../../../../../../modelInterface/components/wagonWheel';
import colors from '../../../../../../theme/colors';
import styles from './styles';

export const WagonWheelForScorer: FC<WagonWheelForScorerProps> = ({ visible, onRequestClose, onConfirm, onSkip, batter, runs }) => {
    const { width } = Dimensions.get('screen')
    const radius = width / 2.7;
    const circleCenter = radius;
    const handlePress = (event: any) => {
        const x = event.nativeEvent.locationX - circleCenter;
        const y = circleCenter - event.nativeEvent.locationY; // Invert Y-axis
        const angle = Math.atan2(y, x) * (180 / Math.PI);
        const positiveAngle = (angle < 0 ? 360 + angle : angle); // Ensure positive angle
        onConfirm({ xCoordinate: x, yCoordinate: y, shotAngle: positiveAngle });

    };
    return (
        <Modal animationType='fade' visible={visible} onRequestClose={onRequestClose} transparent={true}>
            <View style={styles.container}>
                <TouchableOpacity style={styles.blankArea} />
                <SafeAreaView style={styles.safeareaContainer}>
                    <View style={styles.optionContainer}>
                        <View style={styles.floatingOptContainer}>
                            <Entypo color={colors.fontBlack} onPress={onRequestClose} size={22} name="circle-with-cross" />
                            <Text style={styles.batterName}>{batter?.name} {'\n'}<Text style={styles.runs}>{runs} Runs</Text></Text>
                        </View>
                        <Text onPress={onSkip} style={styles.skipTitle}>Skip</Text>
                    </View>
                    <View style={styles.svgContainer}>
                        <WagonWheelSvg radius={radius} onPress={handlePress} />
                    </View>
                </SafeAreaView>
            </View>
        </Modal>
    )
}