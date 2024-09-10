import {FC} from 'react';
import {InningsTabScreenProps} from '../../../../modelInterface/scoring';
import InningsTab from '../../../../tabs/inningsTab';

const Partnership: FC<InningsTabScreenProps> = ({data}) => {
  return <InningsTab tabType="partnership" data={data}/>;
};
export default Partnership;
