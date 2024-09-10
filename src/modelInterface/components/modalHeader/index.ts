export interface ModalHeaderProps {
  onCancel?: () => void;
  onBack?: () => void;
  title: string;
  isAmateur?: boolean;
  tournamentType?:string
}
