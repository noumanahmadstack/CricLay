import { Asset } from "react-native-image-picker";
import { CountryProps } from "../../../country";

export interface ProfileState {
  name: string;
  email:string,
  message:string,
  countryCode:CountryProps,
  profilePicture:Asset,
  idCardPicture:Asset
  password: string;
  newPassword: string;
  passwordConfirmation: string;
  isLoading: boolean;
  errors: string | null;
  phoneNumber: string;
  isUpdating: boolean;
}
