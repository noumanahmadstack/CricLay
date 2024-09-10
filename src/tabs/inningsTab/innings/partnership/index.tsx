import { FC } from 'react';
import { InningScreenProps } from '../../../../modelInterface/scoring';
import PartnershipsListView from '../../../../views/partnerships/partnershipListView';
const Partnership: FC<InningScreenProps> = ({ partnerships, onRefresh}) => {
  if (partnerships) {
    return <PartnershipsListView onRefresh={onRefresh} data={partnerships} />;
  }
  return null;
};
export default Partnership;
