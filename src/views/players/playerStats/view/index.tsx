import { FC, memo } from "react";
import { View, Image, Text } from "react-native";
import { FirstRankIcon } from "../../../../assets/svg";
import ListViewLineSeprator from "../../../../components/listViewLineSeprator";
import styles from "./styles";
const TournamentPlayerStatsView: FC<{ index: number, name: string, teamName: string, t1?: string, t2?: string, t3?: string, t4?: string, t5?: string, t6?: string, t7?: string, d1?: string, d2?: string, d3?: string, d4?: string, d5?: string, d6?: string, d7?: string,topPerformance:boolean }> = ({
    index,
    name,
    t1,
    t2,
    t3,
    teamName,
    t4,
    t5,
    t6,
    t7,
    d1,
    d2,
    d3,
    d4,
    d5,
    d6,
    d7,
    topPerformance
}) => {
    return (
        <View style={styles.container}>
            <View style={styles.internalContainer}>
                <View style={styles.nameMainContainer}>
                    <Text style={styles.count}>{index + 1}</Text>
                    <View style={styles.dpContainer}>
                        <Image style={styles.dp} source={require('../../../../assets/images/user/user.png')} />
                        <Text style={styles.name}>{name + '\n'}<Text style={styles.teamName}>{teamName}</Text></Text>
                    </View>
                    {topPerformance  == true ?
                        <FirstRankIcon style={styles.rankIcon} /> : null
                    }
                </View>
                <ListViewLineSeprator />
                <View style={styles.infoContainer}>
                    {d1 ?
                        <Text style={styles.title}>{t1 + '\n'}<Text style={styles.detail}>{d1}</Text></Text>
                        : null
                    }
                    {d2 ?
                        <Text style={styles.title}>{t2 + '\n'}<Text style={styles.detail}>{d2}</Text></Text>
                        : null
                    }
                    {d3 ?
                        <Text style={styles.title}>{t3 + '\n'}<Text style={styles.detail}>{d3}</Text></Text>
                        : null
                    }
                    {d4 ?
                        <Text style={styles.title}>{t4 + '\n'}<Text style={styles.detail}>{d4}</Text></Text>
                        : null
                    }
                    {d5 ?
                        <Text style={styles.title}>{t5 + '\n'}<Text style={styles.detail}>{d5}</Text></Text>
                        : null
                    }
                    {d6 ?
                        <Text style={styles.title}>{t6 + '\n'}<Text style={styles.detail}>{d6}</Text></Text>
                        : null
                    }
                    {d7 ?
                        <Text style={styles.title}>{t7 + '\n'}<Text style={styles.detail}>{d7}</Text></Text>
                        : null
                    }

                </View>
            </View>
        </View>
    )
}
export default memo(TournamentPlayerStatsView)