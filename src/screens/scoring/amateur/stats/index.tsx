import { FC } from "react";
import { InningsTabScreenProps } from "../../../../modelInterface/scoring";
import InningsTab from "../../../../tabs/inningsTab";
const Stats: FC<InningsTabScreenProps> = ({ data }) => {
    return (
        <InningsTab data={data} tabType='stats' />
    )
}
export default Stats