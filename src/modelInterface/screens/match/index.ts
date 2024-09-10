export interface TossProps {
  isVisible: boolean;
  onRequestClose?: () => void;
  onSubmit?: () => void;
  teamAName: string;
  teamBName: string;
  isSelectedTeamA?: boolean;
  isSelectedTeamB?: boolean;
  onPressTeamA?: () => void;
  onPressTeamB?: () => void;
  error?: string | null;
  isLoading?: boolean;
  onPressDecision: (toss_decision: string) => void;
  toss_decision?: string;
  team1Logo?: string;
  team2Logo?: string;
}
export interface TossModalHeaderProps {
  onPressCross: () => void;
}
export type MatchLeaderboardFilterOptionTypes = 'all' | 'battingPoints' | 'bowlingPoints' | 'fielderPoints';