import { MatchStatus, OrganizerObjProps, streamingLinksProp } from '../../../match';

export interface onMountMatchesProps {
  status: MatchStatus;
}
export interface onStartMatchProps {
  isStartDirect?: boolean;
  status: MatchStatus;
  tournament_id?: string;
  group_id?: string;
  categoryType?: string;
  subCategory?: string;
  tournamentType?:string;
}
export interface OnHandleOnClickMatchProps {
  id: string;
  scorerId?: string;
  userId?: string;
  status?: MatchStatus;
  name: string;
  isPrivate?: boolean;
  isStreaming?: boolean;
  liveStreamingUrl?: string;
  organizer?: OrganizerObjProps;
  isTie?: boolean;
  message?: string;
  streamingLinks?: streamingLinksProp[];
  matchType?: string;
}
export interface OnStartScoringFromFixtureProps {
  toss_decision?: string;
  toss_winning_team_id?: string;
  id: string;
}
