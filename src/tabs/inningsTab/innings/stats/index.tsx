import { FC, useState } from 'react';
import { InningScreenProps } from '../../../../modelInterface/scoring';
import WagonWheelForUser from '../../../../screens/scoring/normal/score/wagonWheel/user';
import { lineProps } from '../../../../modelInterface/components/wagonWheel';
import VirtualizedScrollView from '../../../../components/virtualizedScrollView';
import { SafeAreaView } from 'react-native';
const Stats: FC<InningScreenProps> = ({ onRefresh, inningData, isAmateur }) => {
  const [refreshing, setRefreshing] = useState<boolean>(false)
  const handleOnRefresh = async () => {
    if (onRefresh) {
      setRefreshing(true)
      await onRefresh()
      setRefreshing(false)
    }
  }
  if (inningData) {
    const { balls } = inningData || {}
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <VirtualizedScrollView
          refreshing={refreshing}
          onRefresh={handleOnRefresh}>
          <WagonWheelForUser isAmateur={isAmateur} lines={balls.map((item) => {
            return {
              xCoordinate: item?.xCoordinate,
              yCoordinate: item?.yCoordinate,
              shotAngle: item?.shotAngle,
              boundaryType: item?.boundaryType,
              runs: item?.runs,
              ballNumber: item.ballNumber
            } as lineProps
          })} />
        </VirtualizedScrollView>
      </SafeAreaView>
    );
  }
  return null;
};
export default Stats;