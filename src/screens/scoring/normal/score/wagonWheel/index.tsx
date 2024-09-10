import React from 'react';
import { FC, useState } from 'react';
import { Modal, SafeAreaView, Text, View } from 'react-native';
import { Svg, Circle, Line, Path, Stop, Defs, LinearGradient } from 'react-native-svg';
import Entypo from 'react-native-vector-icons/Entypo';
import { WagonWheelSvg } from '../../../../../assets/svg';
import { BoundaryType } from '../../../../../modelInterface/scoring';
import colors from '../../../../../theme/colors';
import { WagonWheelForScorer } from './scorer';
import styles from './styles';
import WagonWheelForUser from './user';

export const WagonWheelComponent: FC<{ visible: boolean, onRequestClose: () => void, onConfirm: (data: { x: number, y: number, angle: number }) => void }> = ({ visible, onRequestClose, onConfirm }) => {
    return (
        <WagonWheelForScorer onSkip={() => { }} visible={true} onRequestClose={onRequestClose} onConfirm={(d) => console.log(d)} />
        // <Modal visible={visible} onRequestClose={onRequestClose} transparent={true}>
        //     <View style={styles.container}>
        //         <SafeAreaView style={styles.safeareaContainer}>
        //             <View style={styles.floatingOptContainer}>
        //                 <Entypo size={22} name="circle-with-cross" />
        //                 <Text style={styles.batterName}>Rehan {'\n'}<Text style={styles.runs}>2 Runs</Text></Text>
        //             </View>
        //             <WagonWheelForUser radius={radius} lines={lines} />
        //         </SafeAreaView>
        //     </View>
        // </Modal>
    )

}