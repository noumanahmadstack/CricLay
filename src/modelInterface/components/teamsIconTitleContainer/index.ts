export interface TeamIconTitleContainerProps {
  name1: string;
  name2: string;
  team1Logo?: string;
  team2Logo?: string;
  onPress1?: () => void;
  onPress2?: () => void;
  isSelected1?: boolean;
  isSelected2?: boolean;
  over1?: number;
  over2?: number;
  errorText1?: string | null;
  errorText2?: string | null;
}
