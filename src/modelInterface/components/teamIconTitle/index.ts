export interface TeamIconTitleProps {
  name: string;
  isVerified?:boolean;
  isSelected?: boolean;
  over?: number;
  onPress?: () => void;
  logoURL?: string;
  errorText?: string | null;
}
