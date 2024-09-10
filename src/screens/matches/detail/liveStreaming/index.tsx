import {FC} from 'react';
import {SimpleScreenContainer} from '../../../../components/screensContainers/screenContainers';
import StreamingTabs from '../../../../tabs/matchTabs/streaming';
const LiveStreaming: FC = () => {
  return (
    <SimpleScreenContainer isBlue={true}>
      <StreamingTabs  />
    </SimpleScreenContainer>
  );
};
export default LiveStreaming;