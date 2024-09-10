export const getToutnamentGroupQuery: string = `query tournamentGroup(
    $tournament_id: ID!,
    $group_id: ID!,
    $page: Int,
    $limit: Int
){
  tournamentGroup(
    tournamentId: $tournament_id
    groupId: $group_id
  ) {
    id
    name
    teams(page: $page, limit: $limit){
        collection {
            id
            name
            logoUrl
            location
            players(page: $page, limit: $limit){
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
  }
}`;
export const getAllTournamentGroupQuery: string = `query tournamentGroups($categoryType: GroupCategoryEnumType, $tournament_id: ID!, $page: Int, $limit: Int){
        tournamentGroups(
            tournamentId: $tournament_id
            category: $categoryType
        )
      {
          id
          name
          tournamentTeams(page: $page, limit: $limit){
              collection {
                team { id
                      name
                      logoUrl
                      location
                      players(page: $page, limit: $limit){
                          metadata {
                              totalCount
                          }
                      }
                    }
                  matchesCount
                  winningCount
                  losingCount
                  tieCount
                  points
                  netRunRate
                  pointList {
                    opponentTeam {
                        name
                    }
                      runsScored
                      runsConceded
                      ballsFaced
                      ballsBowled
                      points
                  }
              }
          }
         
      }
  }`;

export const getAllTournamentTeamsQuery: string = `query tournamentTeams(
    $tournament_id: ID!,
    $page: Int,
    $limit: Int
){
  tournamentTeams(
    tournamentId: $tournament_id,
    page: $page,
    limit: $limit
  ) {
    collection{
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
}`;

export const getRoundMatches: string = `query tournamentRoundMatches(
    $tournament_id: ID!,
    $categoryType: TournamentGroupCategoryTypeEnum!,
    $page: Int,
    $limit: Int
){
  tournamentRoundMatches(
    tournamentId: $tournament_id
    category: $categoryType
    page: $page
    limit: $limit
  ) {
        collection {
            id
            matchCategoryType:categoryType
            matchSubCategoryType:subCategory 
            status
            group{
                id
                name
                category
            }
            teamOne {
                name,
                id,
                runs,
                wickets,
                overs,
                yetToBat,
                logoUrl
            }
            teamTwo {
                name,
                 id,
                 runs,
                wickets,
                overs,
                yetToBat,
                logoUrl
            }
            winningTeam {
                name
            }
            isTie
            winningStats {
                winByRuns
                byRuns
                winByWickets
                byWickets
            }
            organizer{
             id,
             name
            }
            isScorer
            matchType
            formate
            scorerId
            scheduledDatetime
            targetScore
         
        }
        metadata {
            totalPages
            totalCount
            currentPage
            limitValue
        }
    }
}`

export const getTournamentDetailsQuery: string = `query getTournament($id: ID!, $page: Int, $limit: Int,$leaderboardCategory: PlayerStatCategoryEnum, $mvpCategory:MvpPlayerStatCategoryEnum){
    getTournament(id: $id) {
      id
      name
      ballType,
      city,
      seasonYear,
      startDate,
      endDate,
      country,
      playerPerTeam,
      coverPhotoUrl,
      shareableUrl,
      tournamentType,
      typeDescription
      groups{
        id
        name
        category
      }
      organizer {
        id
        name
      }
      topPerformances {
        bowler {
            id
            player {
                name
                avatarUrl
            }
            team{
                name
              }
            bowlingStat{
                wicketsCount
            }
        }
        batter{
            id
            player {
                name
                avatarUrl
            }
            team{
                name
              }
            batingStat{
                runs
            }
        }
    }
      winningTeams {
        category
        name
        winningTeam {
            id
            name
            logoUrl
        }
        runnerUpTeam {
            id
            name
            logoUrl
        }
   } 
      mostValuablePlayers(page: $page, limit: $limit, category: $mvpCategory) {
        collection {
            id
            team {
                name
            }
            player {
                name
            }
            totalPoints
            batingStat {
                runs
                sixers
                fours
                strikeRate
                points
                averageRate
                normalBalls
                facedBalls
            }
            bowlingStat {
                runs
                wicketsCount
                overs
                economyRate
                averageRate
                points
                normalBalls
                facedBalls
            }
            fielderStat {
                catches
                stumpings
                runOuts
                points
            }
        }
        metadata {
            totalPages
            totalCount
            currentPage
            limitValue
        }
    }
    leaderboard(page: $page, limit: $limit, category: $leaderboardCategory) {
        collection {
            id
            player {
                name
            }
            team {
                name
            }
            totalPoints
            batingStat {
                runs
                sixers
                fours
                strikeRate
                points
                averageRate
                normalBalls
                facedBalls
            }
            bowlingStat {
                runs
                wicketsCount
                overs
                economyRate
                averageRate
                points
                normalBalls
                facedBalls
            }
            fielderStat {
                catches
                stumpings
                runOuts
                points
            }
        }
        metadata {
            totalPages
            totalCount
            currentPage
            limitValue
        }
    }
      stats{
        playedMatchesCount
        inningsCount
        runsCount
        wicketsCount
        extrasBallsCount
        ballsCount
        foursCount
        sixersCount
        fiftiesCount
        hundredsCount
        fiftiesPartnershipCount
        hundredsPartnershipCount
        maidenCount
        dotBallsCount
        catchesCount
        stumpsCount
        ballsFacedCount
        economy
    }
      teams(page: $page, limit: $limit) {
          collection {
              id
              name
              logoUrl
              location
              shareableId
              players(page: $page, limit: $limit){
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
      tournamentTeams(page: $page, limit: $limit){
        collection {
            team
               {
                id
                name
                logoUrl
               }
            matchesCount
            winningCount
            losingCount
            tieCount
            points
            netRunRate
            pointList {
                opponentTeam {
                    id
                    name
                }
                runsScored
                runsConceded
                ballsFaced
                ballsBowled
                points
            }
        }
    }
    }
  }`;
export const getAllPublictournamentQuery: string = `query allTournaments(
    $city: String,
    $ball_type: BallTypeEnum,
    $country: String,
    $player_per_team: Int,
    $page: Int,
    $limit: Int,
    $name: String,
    # $status: MatchStatusTypeEnum,
    $Tstatus: TournamentFilterTypeEnum
    $timeZone: String
){
  allTournaments(
    name:$name,
    city: $city,
    ballType: $ball_type,
    country: $country,
    playerPerTeam: $player_per_team,
    page: $page,
    status: $Tstatus,
    timeZone: $timeZone
    limit: $limit
  ) {
    collection {
        id
        name
        coverPhotoUrl
        logoUrl
        country
        city
        tournamentType
        # country
        # startDate
        # endDate
        # players(page: $page, limit: $limit, name: $name){
        #     collection{
        #         id
        #     }
        #     metadata {
        #         totalPages
        #         totalCount
        #         currentPage
        #         limitValue
        #     }
        # }
        # teams(page: $page, limit: $limit, name: $name){
        #     collection {
        #         id
        #         name
        #     }
        #     metadata {
        #         totalPages
        #         totalCount
        #         currentPage
        #         limitValue
        #     }
        # }
        # matches(page: $page, limit: $limit, 
        # # status: $status
        # ) {
        #     collection {
        #         id
        #     }
        #     metadata {
        #         totalPages
        #         totalCount
        #         currentPage
        #         limitValue
        #     }
        # }
        tournamentTeams(page: $page, limit: $limit){
            collection {
                team {
                    id
                    name
                    location
                    players(page: $page, limit: $limit){
                        metadata {
                            totalCount
                        }
                    }
                }
                matchesCount
                winningCount
                losingCount
                tieCount
                points
                netRunRate
                pointList {
                    runsScored
                    runsConceded
                    ballsFaced
                    ballsBowled
                    points
                }
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
export const getAllTournamentsQuery: string = `query allTournaments(
    $city: String,
    $ball_type: BallTypeEnum,
    $country: String,
    $player_per_team: Int,
    $page: Int,
    $limit: Int,
    $team_page: Int,
    $team_limit: Int
){
  allTournaments(
    city: $city,
    ballType: $ball_type,
    country: $country,
    playerPerTeam: $player_per_team,
    page: $page,
    limit: $limit
  ) {
    collection {
        id
        name
        country
        city
        startDate
        endDate
    }
    metadata {
      totalPages
      totalCount
      currentPage
      limitValue
    }
  }
}`;

export const getTournamentMatchesQuery: string = `query tournamentMatches(
    $tournament_id: ID!,
    $status: MatchStatusTypeEnum,
    $page: Int,
    $limit: Int
){
  tournamentMatches(
    id: $tournament_id,
    status: $status,
    page: $page,
    limit: $limit
  ) {
    collection {
        id
        status
        teamOne {
            name,
            id,
            runs,
            wickets,
            overs,
            yetToBat,
            logoUrl
        }
        teamTwo {
            name,
             id,
             runs,
            wickets,
            overs,
            yetToBat,
            logoUrl
        }
        winningTeam {
            name
        }
        isTie
        winningStats {
            winByRuns
            byRuns
            winByWickets
            byWickets
        }
        venue {
            id
            fullAddress
        }
        tournament{
            name
        }
        organizer{
         id,
         name
        }
        isScorer
        matchType
        formate
        scorerId
        scheduledDatetime
        targetScore
    }
    metadata {
      totalPages
      totalCount
      currentPage
      limitValue
    }
  }
}`;

export const getMyTournamentsQuery: string = `query myTournaments(
    $city: String,
    $ball_type: BallTypeEnum,
    $country: String,
    $player_per_team: Int
    $page: Int,
    $limit: Int,
   
    $status: TournamentFilterTypeEnum,
    $time_zone: String
){
  myTournaments(
    city: $city,
    ballType: $ball_type,
    country: $country,
    playerPerTeam: $player_per_team
    page: $page,
    limit: $limit,
    status: $status
    timeZone:  $time_zone
  ) {
    collection {
        id
        name
        country
        city
        startDate
        endDate
        coverPhotoUrl
        tournamentType
    }
    metadata {
      totalPages
      totalCount
      currentPage
      limitValue
    }
  }
}`;

export const createTournamentMutation: string = `mutation createTournament(
    $name: String!,
    $ballType: BallTypeEnum!,
    $city: String,
    $seasonYear: String!,
    $startDate: String,
    $endDate: String,
    $country: String,
    $playerPerTeam: Int
    $coverPhotoUrl: String,
    $tournamentType: TournamentTypeEnum,
    $typeDescription: String
){
    createTournament(
        input: {
            name: $name,
            ballType: $ballType,
            city: $city,
            seasonYear: $seasonYear,
            startDate: $startDate,
            endDate: $endDate,
            country: $country,
            playerPerTeam: $playerPerTeam,
            coverPhotoUrl: $coverPhotoUrl,
            tournamentType: $tournamentType,
            typeDescription:$typeDescription
        }
    ){
        success,
        errors {
            field
            message
        }
        tournament {
            id
            name
        }
    }
}`;

export const updateTournamentMutation: string = `mutation updateTournament(
    $id: ID!
    $name: String,
    $ballType: BallTypeEnum,
    $city: String,
    $seasonYear: String,
    $startDate: String,
    $endDate: String,
    $country: String,
    $playerPerTeam: Int,
    $tournamentType: TournamentTypeEnum
    $typeDescription: String
){
    updateTournament(
        input: {
            id: $id
            name: $name,
            ballType: $ballType,
            city: $city,
            seasonYear: $seasonYear,
            startDate: $startDate,
            endDate: $endDate,
            country: $country,
            playerPerTeam: $playerPerTeam
            tournamentType: $tournamentType,
            typeDescription:$typeDescription
        }
    ){
        success,
        errors {
            field
            message
        }
        tournament {
            id
            name
        }
    }
}`;

export const destroyTournamentMutation: string = `mutation destroyTournament(
    $id: ID!
){
    destroyTournament(
        input: {
            id: $id
        }
    ){
        success,
        errors {
            field
            message
        }
    }
}`;

export const createTournamentGroupMutation: string = `mutation createTournamentGroup(
    $tournament_id: ID!    
){
    createTournamentGroup(
        input: {
            tournamentId: $tournament_id,
        }
    ){
        success,
        errors {
            field
            message
        }
        tournamentGroup {
            id
            name
        }
    }
}`;

export const addTeamToTournamentGroupMutation: string = `mutation addTeamToTournamentGroup(
    $tournament_id: ID!,
    $group_id: ID!,
    $team_id: ID!,
    $page: Int, 
    $limit: Int
){
    addTeamToTournamentGroup(
        input: {
            tournamentId: $tournament_id,
            groupId: $group_id,
            teamId: $team_id
        }
    ){
        success,
        errors {
            field
            message
        }
        group {
            id
            teams(page: $page, limit: $limit) {
                collection {
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
}`;

export const removeTeamFromTournamentGroupMutation: string = `mutation removeTeamFromTournamentGroup(
    $tournament_id: ID!,
    $group_id: ID!,
    $team_id: ID!
){
    removeTeamFromTournamentGroup(
        input: {
            tournamentId: $tournament_id,
            groupId: $group_id,
            teamId: $team_id
        }
    ){
        success,
        errors {
            field
            message
        }
    }
}`;

export const updateTournamentGroupMutation: string = `mutation updateTournamentGroup(
    $tournament_id: ID!,
    $id: ID!,
    $name: String!
    $categoryType: GroupCategoryEnumType
){
    updateTournamentGroup(
        input: {
            tournamentId: $tournament_id,
            groupId: $id,
            name: $name,
            category: $categoryType
        }
    ){
        success,
        errors {
            field
            message
        }
        tournamentGroup {
            id
            name
        }
    }
}`;

export const removeTournamentGroupMutation: string = `mutation removeTournamentGroup(
    $group_id: ID!
){
    removeTournamentGroup(
        input: {
            id: $group_id
        }
    ){
        success,
        errors {
            field
            message
        }
    }
}`;

export const addTeamToTournamentMutation: string = `mutation addTeamToTournament(
    $tournament_id: ID!
    $team_id: ID!,
    $team_page: Int, $team_limit: Int
){
    addTeamToTournament(
        input: {
            tournamentId: $tournament_id,
            teamId: $team_id,
        }
    ){
        success,
        errors {
            field
            message
        }
        tournament {
            name
            teams(teamPage: $team_page, teamLimit: $team_limit) {
                collection {
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
}`;

export const removeTeamFromTournamentMutation: string = `mutation removeTeamFromTournament(
    $tournament_id: ID!
    $team_id: ID!
){
    removeTeamFromTournament(
        input: {
            tournamentId: $tournament_id,
            teamId: $team_id
        }
    ){
        success,
        errors {
            field
            message
        }
    }
}`;
export const tournamentGroup: string = `mutation createTournamentGroup(
    $tournament_id: ID!  
){
    createTournamentGroup(
        input: {
            tournamentId: $tournament_id
        }
    ){
        success,
        errors {
            field
            message
        }
        tournamentGroup {
            id
            name
        }
    }
}
`;
export const tournamentMVPQuery: string = `query getTournament(
    $page: Int,
    $limit: Int,
    $id: ID!,
    $mvpCategory: MvpPlayerStatCategoryEnum
    ){
  getTournament(id: $id) {
    mostValuablePlayers(page: $page, limit: $limit, category: $mvpCategory) {
        collection {
            id
            team {
                name
            }
            player {
                name
            }
            totalPoints
            batingStat {
                runs
                sixers
                fours
                strikeRate
                points
                averageRate
                normalBalls
                facedBalls
            }
            bowlingStat {
                runs
                wicketsCount
                overs
                economyRate
                averageRate
                points
                normalBalls
                facedBalls
            }
            fielderStat {
                catches
                stumpings
                runOuts
                points
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
}`
export const tournamentLeaderboardQuery: string = `query getTournament(
    $page: Int,
    $limit: Int,
    $id: ID!,
    $leaderboardCategory: PlayerStatCategoryEnum
    ){
  getTournament(id: $id) {
    leaderboard(page: $page, limit: $limit, category: $leaderboardCategory) {
        collection {
            id
            team {
                name
            }
            player {
                name
            }
            totalPoints
            batingStat {
                runs
                sixers
                fours
                strikeRate
                points
                averageRate
                normalBalls
                facedBalls
            }
            bowlingStat {
                runs
                wicketsCount
                overs
                economyRate
                averageRate
                points
                normalBalls
                facedBalls
            }
            fielderStat {
                catches
                stumpings
                runOuts
                points
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
}`

export const amatureQuery :string = `query leagueRules( $category: LeagueRulesCategoryEnum!){
    leagueRules (category: $category){
       id
        title
       category
       content
   }
  }`