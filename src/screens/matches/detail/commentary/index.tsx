import { FC } from 'react';
import { InningsTabScreenProps } from '../../../../modelInterface/scoring';
import InningsTab from '../../../../tabs/inningsTab';

const Commentary: FC<InningsTabScreenProps> = ({ data }) => {
  return <InningsTab tabType="commentary" data={data} />;
};
export default Commentary;
