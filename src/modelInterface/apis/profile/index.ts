export interface AccountUpdateApiProps {
  name?: string;
  password: string;
  newPassword?: string | null;
  passwordConfirmation?: string | null;
}
