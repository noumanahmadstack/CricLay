import { FC, memo } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { ImageBackground } from 'react-native';
import { GetTournamentObjectProps } from '../../../modelInterface/tournaments';
import { navigate } from '../../../routes/rootNavigation';
import styles from './styles';
const TournamentView: FC<GetTournamentObjectProps> = ({ id, coverPhotoUrl, name, city, country, tournamentType }) => {
    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => navigate('TournamentDetails', { id, tournamentType })}>
            <ImageBackground
                resizeMode="cover"
                borderRadius={10}
                style={styles.backGroundImage}
                source={coverPhotoUrl
                    ? { uri: coverPhotoUrl }
                    : require('../../../assets/images/tournament/tournament.png')
                }>
                <View style={[styles.innerContent, tournamentType === "amateur" && styles.amateurColor]}>
                    <Text style={styles.tournamentTitle}>{name}</Text>
                    <Text style={styles.location}>
                        {city + ' , ' + country}
                    </Text>
                </View>
            </ImageBackground>
        </TouchableOpacity>
    );
};
export default memo(TournamentView);
