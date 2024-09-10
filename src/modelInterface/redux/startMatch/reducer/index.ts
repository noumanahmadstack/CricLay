import { DropDownObjProps } from '../../../commonProps';
import { FieldErrorsProps } from '../../../fieldsError';
import { StartMatchObjProps } from '../../../match';
import { TabRoutesProps } from '../../../tabRoutes';
import { TeamObjProps } from '../../../team';
import { GetVenueObjProps } from '../../../venues';
export interface StartMatchState
  extends StartMatchObjProps,
  TabRoutesProps,
  FieldErrorsProps {
  index: number;
  overlayUrl: string;
  tossWinningTeam: TeamObjProps;
  venue: GetVenueObjProps;
  playersIndex: number;
  playersRoutes: TabRoutesProps['routes'];
  teamA: TeamObjProps;
  teamB: TeamObjProps;
  isTossModalOpen: boolean;
  isOpenCalendar: boolean;
  isStartingLiveMatch: boolean;
  isStartingFixtureMatch: boolean;
  tossDecisions: Array<{
    name: string;
    toss_decision: string;
  }>;
  scorerId: string;
  oversData: DropDownObjProps[];
  matchFromat: DropDownObjProps[];
  matchType: DropDownObjProps[];
  category?:DropDownObjProps[] | undefined;
  subCategories?:{
    knockout:DropDownObjProps[] | undefined,
    playoffs:DropDownObjProps[] | undefined
  }
}