export const createTeamQuery: string = `mutation createTeam(
  $name: String!,
  $location: String!,
  $city: String,
  $captainId: String,
  $category: TeamCategoryTypeEnum
){
  createTeam(
      input: {
      name: $name,
      location: $location,
      city: $city,
      captainId: $captainId,
      category: $category
  }
  ){
      success,
      errors {
          field
          message
      }
      team {
          id
      }
  }
}`;
export const addTeamQuery: string = `mutation addTeamToTournament(
  $tournament_id: ID
  $name: String,
  $location: String,
  $team_id: ID,
){
  addTeamToTournament(
      input: {
          tournamentId: $tournament_id,
          teamId: $team_id,
          name: $name,
          location: $location

      }
  ){
      success,
      errors {
          field
          message
      }
      team{
          id
          name
      }
      tournament {
          name
          
      }
  }
}`;
export const getMyTeamsQuery: string = `query myTeams(
  $name: String,
  $location: String,
  $city: String,
  $captainId: ID,
  $category: TeamCategoryTypeEnum,
  $page: Int,
  $limit: Int
){
myTeams(
  name: $name,
  location: $location,
  city: $city,
  captainId: $captainId,
  category: $category,
  page: $page,
  limit: $limit
) {
  collection {
      id
      name
      category
      location
      logoUrl
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
}`;
export const getAllTeamsQuery: string = `query allTeams(
  $name: String,
  $location: String,
  $city: String,
  $captainId: ID,
  $category: TeamCategoryTypeEnum,
  $status: MatchStatusTypeEnum,
  $page: Int,
  $limit: Int,
  $tournament_id: ID
){
allTeams(
  name: $name,
  location: $location,
  city: $city,
  captainId: $captainId,
  category: $category,
  page: $page,
  limit: $limit
) {
  collection {
      id
      name
      category
      location
      logoUrl
      shareableId
      players(page: $page, limit: $limit
        ){
          collection{
              id
          }
          metadata {
              totalPages
              totalCount
              currentPage
              limitValue
          }
      }
      matches(page: $page, limit: $limit, tournamentId: $tournament_id, status: $status){
      collection{
          id
          }
          
          metadata {
              totalPages
              totalCount
              currentPage
              limitValue
          }
      }
      tournaments(page: $page, limit: $limit, name: $name){
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
  metadata {
    totalPages
    totalCount
    currentPage
    limitValue
  }
}
}`;
export const getTeamQuery: string = `query getTeam($id: ID!
  $page: Int,
  $limit: Int
  $name: String
  $player_match_id: ID
  ){
  getTeam(id: $id) {
    id
        name
        category
        location
        logoUrl
        creatorId
        players(page: $page, limit: $limit, name: $name ){
            collection{
                id
                name
                isWicketKeeper(teamId: $id)
                role(teamId: $id)
                jerseyNumber(teamId: $id)
                shareableId
                isPlayingInMatch(matchId: $player_match_id)
            }
            metadata {
                totalPages
                totalCount
                currentPage
                limitValue
            }
          }
    overAllStat{
            potmAward
            lowestRuns
            wonMatches
            highestRuns
            lossMatches
            drawnMatches
            playedMatches
            tournamentCount
        }
        battingStat{
            runs
            fours
            sixers
            fifties
            hundreds
            playedMatches
            highestScore
            innings:inningCount
            highestPartnership
        }
        bowlingStat{
            runs
            playedMatches
            fiveWickets
            maidenOvers
           innings: inningCount
            normalBalls
            threeWickets
            totalWickets
        }
        fielderStat{
            catches
            runOuts
            stumpings
            totalWickets
        }
    }
}`;
export const getTeamMatchesQuery: string = `query getTeam($id: ID!
    $page: Int,
    $limit: Int
    $status: MatchStatusTypeEnum
    $tournament_id: ID
    ){
    getTeam(id: $id) {
      id
          name
          category
          location
          logoUrl
          matches(page: $page, limit: $limit, tournamentId: $tournament_id, status: $status){
              collection{
                id
                liveStreamingUrl
                teamOne {
                    name,
                    id,
                    runs,
                    wickets,
                    overs,
                    yetToBat
                    logoUrl
                }
                teamTwo {
                    name,
                     id,
                     runs,
                    wickets,
                    overs,
                    yetToBat
                    logoUrl
                }
                venue {
                    id
                    fullAddress
                }
                tournament{
                    name
                }
                organizer{
                 id
                 name
                }
                scorer {
                    id
                    name
                }
                isScorer
                matchType
                formate
                scorerId
                status
                scheduledDatetime
                targetScore
            winningTeam {
                name
                logoUrl
            }
            isTie
            winningStats {
                winByRuns
                byRuns
                winByWickets
                byWickets
            }
         innings {
                    inningNumber
                    batingTeam {
                        name
                        logoUrl
                    }
                    runs
               currentOvers
               currentWickets
                    }
            currentInning {
                id
                matchId
                batingTeamId
                bowlingTeamId
                inningNumber
                totalOvers
                runs
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
export const getTeamPlayersQuery: string = `query getTeam($id: ID!
  $page: Int
  $limit: Int
  $name: String
  $playerMatchId: ID
  ){
  getTeam(id: $id) {
    id
    players(page: $page
    limit: $limit, name: $name) {
        collection{
            id
            name
            country
            nationality
            shareableId
            isWicketKeeper(teamId: $id)
            role(teamId: $id)
            isPlayingInMatch(matchId: $playerMatchId)
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
