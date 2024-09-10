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
    const radius = 160;
    const lines = [{ "color": "yellow", "x": 54.33332824707031, "y": 18.666671752929688, "angle": 18.960589874889582, "boundary": true }, { "color": "yellow", "x": 58.33332824707031, "y": 98, "angle": 59.23728266148541, "boundary": true }, { "color": "yellow", "x": -69.33334350585938, "y": 95.33334350585938, "angle": 126.02737447566174, "boundary": true }, { "color": "yellow", "x": -50.333343505859375, "y": -128.3333282470703, "angle": 248.58449676039044, "boundary": true }, { "color": "yellow", "x": -43, "y": -65, "angle": 236.513831184487, "boundary": true }, { "color": "yellow", "x": 26.666656494140625, "y": -52, "angle": 297.14967282315877, "boundary": false }, { "color": "yellow", "x": 65.66665649414062, "y": -100.66665649414062, "angle": 303.1171274161644, "boundary": false }, { "color": "yellow", "x": -69.33334350585938, "y": -119, "angle": 239.77350470653286, "boundary": false }, { "color": "yellow", "x": -101, "y": -54, "angle": 208.13134236406106, "boundary": false }, { "color": "yellow", "x": -110.33334350585938, "y": 46.333343505859375, "angle": 157.22053458826954, "boundary": false }, { "color": "yellow", "x": -65.66667175292969, "y": 34.66667175292969, "angle": 152.16958351909167, "boundary": false }, { "color": "yellow", "x": -66, "y": 120, "angle": 118.81079374297306, "boundary": false }, { "color": "yellow", "x": 69, "y": 131.33334350585938, "angle": 62.28343175618072, "boundary": false }, { "color": "yellow", "x": 115, "y": 32.66667175292969, "angle": 15.857622321357919, "boundary": false }, { "color": "yellow", "x": 79.33332824707031, "y": 35.66667175292969, "angle": 24.207726760543338, "boundary": false }, { "color": "yellow", "x": 93.66665649414062, "y": 70, "angle": 36.77190338283408, "boundary": false }, { "color": "yellow", "x": 64.33332824707031, "y": 115.33334350585938, "angle": 60.8470743926127, "boundary": false }, { "color": "yellow", "x": 17, "y": 130, "angle": 82.54975093134382, "boundary": false }, { "color": "yellow", "x": -32.333343505859375, "y": 137.6666717529297, "angle": 103.2173236549126, "boundary": false }, { "color": "yellow", "x": -81, "y": 124, "angle": 123.15360586678057, "boundary": false }, { "color": "yellow", "x": -118.33334350585938, "y": -55, "angle": 204.9284722528696, "boundary": false }, { "color": "yellow", "x": -133.33334350585938, "y": -61.666656494140625, "angle": 204.82053606897293, "boundary": false }]
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