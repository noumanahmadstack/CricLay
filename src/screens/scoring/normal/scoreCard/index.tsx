import {FC} from 'react';
import {InningsTabScreenProps} from '../../../../modelInterface/scoring';
import InningsTab from '../../../../tabs/inningsTab';

const ScoreCard: FC<InningsTabScreenProps> = ({data}) => {
  return <InningsTab data={data} />;
};
export default ScoreCard;