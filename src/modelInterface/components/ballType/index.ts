import {BallTypeObjProp} from '../../ballType';
export interface BallTypeObjProps extends BallTypeObjProp {}
export interface BallTypeProps {
  onPress: (props: BallTypeObjProp) => void;
  value: string;
}
