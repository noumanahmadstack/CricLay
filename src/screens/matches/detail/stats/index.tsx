import { FC } from "react";
import { InningsTabScreenProps } from "../../../../modelInterface/scoring";
import InningsTab from "../../../../tabs/inningsTab";
const Stats: FC<InningsTabScreenProps> = ({ data ,isAmateur}) => {    
    return (
        <InningsTab data={data} tabType='stats'  isAmateur={isAmateur}/>
    )
}
export default Stats