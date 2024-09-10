export interface PlayerIconTitleProps {
  name: string;
  isVerified?:boolean;
  isSelected?: boolean;
  over?: number;
  onPress?: () => void;
  avatarUrl?: string;
  errorText?: string | null;
}
