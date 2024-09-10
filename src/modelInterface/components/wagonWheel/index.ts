import { BatterStatsAttributesProps, BoundaryType } from "../../scoring";

export interface lineProps {
    xCoordinate: number;
    yCoordinate: number;
    shotAngle: number;
    color?: string;
    boundaryType?: BoundaryType;
    runs?: number;
    ballNumber?: number;
};
export interface WagonWheelUserProps {
    lines: lineProps[];
    isAmateur?: boolean;
}
export interface WagonWheelScorerProps {
    radius: number;
    onPress: (data: lineProps) => void;
    striker?: BatterStatsAttributesProps;
}
export interface WagonWheelForScorerProps {
    visible: boolean;
    onRequestClose: () => void;
    onConfirm: (data: lineProps) => void;
    onSkip: () => void;
    batter?: BatterStatsAttributesProps;
    runs?: number;
}