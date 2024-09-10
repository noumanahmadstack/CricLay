import { FC } from 'react';
import { InningScreenProps } from '../../../../modelInterface/scoring';
import CommentaryListView from '../../../../views/commentary/commentaryListView';
const Commentary: FC<InningScreenProps> = ({ oversData, inningNumber, onRefresh,isAmateur}) => { 
  if (oversData) {
    return <CommentaryListView isAmateur={isAmateur} onRefresh={onRefresh} data={oversData} inningNumber={inningNumber}/>;
  }
  return null;
};
export default Commentary;
