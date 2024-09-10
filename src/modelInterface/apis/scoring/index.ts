import { BallObjProps, BoundaryType } from '../../scoring';

export interface CreateBallsApiProps {
  balls: BallObjProps[];
}
export interface UpdateInningLineupApiProps {
  inningId: string;
  nonStrikerId?: string;
  strikerId?: string;
  bowlerId?: string;
}

export interface UpdatedBallApiProps {
  runs: number;
  boundaryType?: BoundaryType;
  inningId: string;
  ballNumber: number;
}