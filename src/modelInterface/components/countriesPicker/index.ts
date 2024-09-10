import {CountryProps} from '../../country';

export interface CountriesPickerProps {
  isVisible?: boolean;
  onClose?: () => void;
  onConfirm?: (props: ModalContentProps) => void;
}
export interface ModalContentProps extends CountryProps {
  onPress?: (props: ModalContentProps) => void;
}

export interface CountriesPickProps {
  onConfirm?: (props: ModalContentProps) => void;
  country?: CountryProps;
}
