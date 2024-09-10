export const createPlayerMutation: string = `mutation createPlayer(
    $name: String!,
    $country: String!,
    $city: String!,
    $phoneNumber: String,
    $email: String,
    $specialityType: SpecialityTypeEnum,
    $countryCode: String,
    $nationality: String,
    $age: Int
){
    createPlayer(
        input: {
            name: $name,
            phoneNumber: $phoneNumber,
            email: $email,
            specialityType: $specialityType,
            country: $country,
            city: $city,
            countryCode: $countryCode,
            nationality: $nationality
            age: $age
        }
    ){
        success,
        errors {
            field
            message
        }
        player {
            id
            name
        }
    }
}`;
export const removePlayerFromTeamMutation: string = `mutation removePlayerFromTeam(
    $teamId: ID!,
    $playerId: ID!
){
    removePlayerFromTeam(
        input: {
            teamId: $teamId,
            playerId: $playerId
        }
    ){
        success,
        errors {
            field
            message
        }
    }
}`;
export const addPlayerToTeamMutation: string = `mutation addPlayerToTeam(
    $teamId: ID!,
    $playerId: ID!
){
    addPlayerToTeam(
        input: {
            teamId: $teamId,
            playerId: $playerId
        }
    ){
        success,
        errors {
            field
            message
        }
    }
}`;
export const getPlayerNdTeamQuery: string = `query getPlayer(
    $id: ID!
    $page: Int,
    $limit: Int,
){
    getPlayer(id: $id) {
        id
        name
        age
        country
        city
        avatarUrl
        specialityType
        isVerified
         teams(page: $page limit: $limit) {
            collection {
                id
                name
                location
                logoUrl
          
            }
            metadata {
                totalPages
                totalCount
                currentPage
                limitValue
            }
        }
        battingStat{
            runs
            fours
            sixers
            fifties
            innings: inningCount
            hundreds
            ballsFaced
            ballsCount
            playedMatches
            fiftiesPartnership
            hundredsPartnership
        }
        bowlingStat{
            playedMatches
            innings: inningCount
            catches
            dotBalls
            ballsCount:normalBalls
            maidenOvers
            wicketsCount
            economyRate
        }
        fielderStat{
            catches
            runOuts
            stumpings
            totalWickets
            
        } 
      
    }
  }`;
export const getPlayerMatchesQuery: string = `query getPlayer(
    $id: ID!
    $page: Int,
    $limit: Int,
     $status: MatchStatusTypeEnum
){
    getPlayer(id: $id) {
        id
        name
        age
        country
        city
        specialityType
        matches(page: $page, limit: $limit, status: $status) {
          collection {
            id
            status
            tournament{
                name
            }
            teamOne {
                id
                name
                runs
                wickets
                overs
                yetToBat
                logoUrl
            }
            teamTwo {
                name
                id
                runs
                wickets
                overs
                yetToBat
                logoUrl
            }
            scheduledDatetime
            formate
            scorer {
                name
                id
            }
            organizer {
                name
                id
            }
            venue {
              title
              lat
              long
              subTitle
              fullAddress
            }
            winningTeam {
                name
                id
            }
            isTie
            winningStats {
                winByRuns
                byRuns
                winByWickets
                byWickets
            }
            
        }
        metadata {
            totalPages
            totalCount
            currentPage
            limitValue
        }
      
    }
  }
}`;
export const getPlayerQuery: string = `query getPlayer(
    $id: ID!
    $page: Int,
    $limit: Int,
     $status: MatchStatusTypeEnum
){
    getPlayer(id: $id) {
        id
        name
        age
        avatarUrl
        country
        city
        specialityType
         teams(page: $page limit: $limit) {
            collection {
                id
                name
                location
                logoUrl
                players(page: $page limit: $limit) {
                    collection {
                        id
                        name
                    }
                    metadata {
                        totalCount
                    }
                }
            }
            metadata {
                totalPages
                totalCount
                currentPage
                limitValue
            }
        }
        tournaments(page: $page limit: $limit) {
            collection {
                id
                name
                city
                country
                startDate
                endDate
                teams(page: $page, limit: $limit) {
                    collection {
                        id
                        name
                    }
                    metadata {
                        totalPages
                        totalCount
                        currentPage
                        limitValue
                    }
                }
            }
        }
        matches(page: $page, limit: $limit, status: $status) {
          collection {
            id
            status
            overlayUrl
            teamOne {
                id
                name
                runs
                wickets
                overs
                yetToBat
            }
            teamTwo {
                id
                name
                runs
                wickets
                overs
                yetToBat
            }
            organizer {
                name
                id
            }
            scorer {
                id
                name
            }
            scheduledDatetime
            formate
            venue {
              title
              lat
              long
              subTitle
              fullAddress
            }
        }
        metadata {
            totalPages
            totalCount
            currentPage
            limitValue
        }
    }
  }
}`;
export const getAllPlayersQuery: string = `query allPlayers(
    $name: String,
    $phone_number: String,
    $email: String,
    $country_code: String,
    $speciality_type: SpecialityTypeEnum,
    $country: String,
    $nationality: String,
    $age: Int,
    $city: String,
    $page: Int,
    $limit: Int,
){
  allPlayers(
    name: $name,
    phoneNumber: $phone_number,
    email: $email,
    countryCode: $country_code,
    specialityType: $speciality_type,
    country: $country,
    nationality: $nationality,
    age: $age,
    city: $city,
    page: $page
    limit: $limit
  ) {
    collection {
        id
        name
        city
        country
        nationality
        avatarUrl
        age
        shareableId
        specialityType
        isVerified
        teams(page: 1, limit: $limit, name: $name){
            collection {
                id
                name
                logoUrl
            }
        }
    }
    metadata {
      totalPages
      totalCount
      currentPage
      limitValue
    }
  }
}`;

export const getMyPlayersQuery: string = `query myPlayers(
    $name: String,
    $phone_number: String,
    $email: String,
    $country_code: String,
    $speciality_type: SpecialityTypeEnum,
    $country: String,
    $nationality: String,
    $age: Int,
    $city: String
){
  myPlayers(
    name: $name,
    phoneNumber: $phone_number,
    email: $email,
    countryCode: $country_code,
    specialityType: $speciality_type,
    country: $country,
    nationality: $nationality,
    age: $age,
    city: $city,
  ) {
    id
    name
    country
    shareableId
    age
    specialityType
  }
}`;
export const addPlayersToMatchQuery: string = `mutation addPlayersToMatch(
    $players: [ID!]!,
    $team_id: ID!,
    $match_id: ID!
){
    addPlayersToMatch(
        input: {
            teamId: $team_id,
            matchId: $match_id,
            players: $players
        }
    ){
        success,
        errors {
            field
            message
        }
        matchPlayer {
            id
            name
            status
        }
    }
}`;
export const removePlayersToMatchQuery: string = `mutation removePlayersFromMatch(
    $match_players: [ID!]!,
){
    removePlayersFromMatch(
        input: {
            matchPlayers: $match_players
        }
    ){
        success,
        errors {
            field
            message
        }
    }
}`;
export const getBattingTeamMatchPlayerQuery: string = `query matchPlayers( 
    $match_id: ID!,
    $name: String,
    $status: MatchPlayerEnum,
    $team_id: ID
){
matchPlayers(
    matchId: $match_id,
    name: $name,
    status: $status,
    teamId: $team_id,

)
{
    id
    name
    batsmanId
    bowlerId
    shareableId
    status
    isWicketKeeper
    role
    jerseyNumber
    team {
        id
    }
    player{
        id
    }
    isImpactPlayer,
    isSubsituted,
}
}`;
export const getBowlingTeamMatchPlayerQuery: string = `query matchPlayers( 
    $match_id: ID!,
    $name: String,
    $status: MatchPlayerEnum,
    $team_id: ID
){
matchPlayers(
    matchId: $match_id,
    name: $name,
    status: $status,
    teamId: $team_id,
)
{
    id
    name
    bowlerId
    batsmanId
    status
    isWicketKeeper
    role
    jerseyNumber
    shareableId
    team {
        id
    }
    player{
        id
    }
    isImpactPlayer,
    isSubsituted,
}
}`;
export const getMatchPlayerQuery: string = `query matchPlayers( 
    $match_id: ID!,
    $name: String,
    $status: MatchPlayerEnum,
    $team_id: ID
){
matchPlayers(
    matchId: $match_id,
    name: $name,
    status: $status,
    teamId: $team_id
)
{
    id
    name
    batsmanId
    bowlerId
    status
    shareableId
    team {
        id
    }
    player{
        id
    }
    isImpactPlayer,
    isSubsituted,
}
}`;
export const getPlayerStatsQuery: string = `query getPlayer($id: ID!
    ){
        getPlayer(id: $id) {
            id
            battingStat{
                    runs
                    fours
                    sixers
                    fifties
                    innings
                    hundreds
                    ballsFaced
                    ballsCount
                    playedMatches
                    fiftiesPartnership
                    hundredsPartnership
                }
                bowlingStat{
                    catches
                    dotBalls
                    ballsCount
                    extrasBalls
                    maidenOvers
                    wicketsCount
                    economyRate
                }
                fielderStat{
                    catches
                    runOuts
                    stumpings
                } 
        }
}`;
export const updateTeamPlayersMutation: string = `mutation updateTeamPlayer(
    $teamId: ID!
    $playerId: ID!
    $role: TeamPlayerRoleEnum
    $isWicketKeeper: Boolean
    $jerseyNumber: Int
){
    updateTeamPlayer(
        input: {
            teamId: $teamId
            playerId: $playerId
            role: $role
            isWicketKeeper: $isWicketKeeper
            jerseyNumber: $jerseyNumber
        }
    ){
        success,
        errors {
            field
            message
        }
    }
}`;
export const impactPlayerMutation:string = `
mutation setImpactPlayer(
    $playerId: ID!,
    $teamId: ID!,
    $matchId: ID!
){
    setImpactPlayer(
        input: {
            teamId: $teamId,
            matchId: $matchId,
            playerId: $playerId
        }
    ){
        success,
        errors {
            field
            message
        }
    }
}`

export const subsituatedPlayerMutation:string = `
mutation setSubsituted(
    $playerId: ID!,
    $teamId: ID!,
    $matchId: ID!
){
    setSubsituted(
        input: {
            teamId: $teamId,
            matchId: $matchId,
            playerId: $playerId
        }
    ){
        success,
        errors {
            field
            message
        }
    }
}`