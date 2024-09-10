import {ValidationResultProps} from '../../../modelInterface/utilis/formValidations';
import {
  StartMatchValidationProps1,
  StartMatchValidationProps2,
  StartMatchValidationProps3,
} from '../../../modelInterface/utilis/formValidations/startMatch';

export const startMatchValidation1 = ({
  teamA,
  teamB,
  venue,
}: StartMatchValidationProps1): ValidationResultProps => {
  if (!teamA.id) {
    return {
      valid: false,
      error: 'Please select team A',
    };
  } else if (!teamB.id) {
    return {
      valid: false,
      error: 'Please select team B',
    };
  } else if (!venue.id) {
    return {
      valid: false,
      error: 'Please select venue',
    };
  } else {
    return {valid: true, error: null};
  }
};
export const startMatchValidation2 = ({
  overs,
  formate,
  match_type,
  wickets,
  ball_type,
}: StartMatchValidationProps2): ValidationResultProps => {
  if (overs == 0) {
    return {
      valid: false,
      error: 'Please select overs',
    };
  } else if (formate === '') {
    return {
      valid: false,
      error: 'Please select formate',
    };
  } else if (match_type === '') {
    return {
      valid: false,
      error: 'Please select match type',
    };
  } else if (wickets === 0) {
    return {
      valid: false,
      error: 'Please enter wickets',
    };
  } else if (ball_type === '') {
    return {
      valid: false,
      error: 'Please select ball type',
    };
  } else {
    return {valid: true, error: null};
  }
};
export const startMatchValidation3 = ({
  toss_winning_team_id,
  toss_decision,
}: StartMatchValidationProps3): ValidationResultProps => {
  if (toss_winning_team_id === '') {
    return {
      valid: false,
      error: 'Please select toss winning team',
    };
  } else if (toss_decision === '') {
    return {
      valid: false,
      error: 'Please select batting team',
    };
  } else {
    return {valid: true, error: null};
  }
};
