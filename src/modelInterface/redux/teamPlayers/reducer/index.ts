import {PaginationProps} from '../../../pagination';
import {PlayerObjProps} from '../../../player';
import {
  BatterStatsAttributesProps,
  BowlerStatsAttributesProps,
} from '../../../scoring';
export interface TeamPlayerStateProps {
  playing: PlayerObjProps[];
  battingPlaying: BatterStatsAttributesProps[];
  bowlerPlaying: BowlerStatsAttributesProps[];
  addDataToPlaying: {
    data: PlayerObjProps[];
    isBatsman?: boolean;
  };
  allPlayers: PlayerObjProps[];
  metadataForPlaying: PaginationProps;
  metadataForAllPlayers: PaginationProps;
  isLoading: boolean;
  searchKeywordsTab1: string;
  searchKeywordsTab2: string;
}
