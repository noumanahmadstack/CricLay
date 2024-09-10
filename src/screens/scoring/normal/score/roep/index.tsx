import {FC} from 'react';
import {View, Text} from 'react-native';
import {ROEPProps} from '../../../../../modelInterface/screens/scoring';
import styles from './styles';
const Roep: FC<ROEPProps> = ({crr, overs, extras, partnership, rrr}) => {
  const data = [
    {
      key: 'RRR',
      value: rrr,
    },
    {
      key: 'CRR',
      value: crr,
    },
    {
      key: 'Overs',
      value: overs,
    },
    {
      key: 'Extras',
      value: extras,
    },
    {
      key: 'Partnership',
      value: partnership,
    },
  ];
  return (
    <View style={styles.container}>
      {data.map(({key, value}) => {
        if (value !== null) {
          return (
            <View key={key} style={styles.itemContainer}>
              <Text style={styles.title}>{key}</Text>
              <Text style={styles.desc}>{value}</Text>
            </View>
          );
        }
      })}
    </View>
  );
};
export default Roep;
