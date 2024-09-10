import {FC} from 'react';
import {Text, FlatList, View} from 'react-native';
import {SimpleScreenContainer} from '../../../../components/screensContainers/screenContainers';
import styles from './styles/styles';
import colors from '../../../../theme/colors';
import {marginHorizontal} from '../../../../theme/margins';

const About: FC<{
  name: string;
  age: number;
  country: string;
  city: string;
  specialityType: string;
}> = ({name, age, country, city, specialityType}) => {
  const data = [
    {
      title: 'Name',
      description: name,
    },
    {
      title: 'Age',
      description: age,
    },
    {
      title: 'Country',
      description: country,
    },
    {
      title: 'City',
      description: city,
    },
    {
      title: 'Speciality Type',
      description: specialityType,
    },
  ];
  return (
    <SimpleScreenContainer isBlue={true}>
      <FlatList
        data={data}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{margin: marginHorizontal}}
        ListHeaderComponentStyle={{backgroundColor: colors.whiteContainer}}
        renderItem={({item}) => {
          return (
            <View style={styles.listViewContainer}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.desc}>
                {item.description ? item.description : '--'}
              </Text>
            </View>
          );
        }}
      />
    </SimpleScreenContainer>
  );
};
export default About;
