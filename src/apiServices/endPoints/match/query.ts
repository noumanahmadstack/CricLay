// export const startMatchMutation: string = `mutation createMatch(
//     $team_one_id: ID!,
//     $team_two_id: ID!,
//     $wickets: Int!,
//     $ball_type: BallTypeEnum!,
//     $match_type: MatchTypeEnum!,
//     $scheduled_datetime: ISO8601DateTime!,
//     $formate: MatchFormateTypeEnum!,
//     $overs: Int!,
//     $venue_id: ID!,
//     $status: CreateMatchStatusTypeEnum!,
//     $tournament_id: ID,
//     $summary: String,
//     $toss_winning_team_id: ID,
//     $toss_decision: TossDecisionTypeEnum,
//     $category_type: MatchCategoryTypeEnum,
//     $group_id: ID
//     $balls_per_over: Int
// ){
//     createMatch(
//         input: {
//             teamOneId: $team_one_id
//             teamTwoId: $team_two_id
//             wickets: $wickets
//             ballType: $ball_type
//             matchType: $match_type
//             venueId: $venue_id
//             status: $status
//             scheduledDatetime: $scheduled_datetime
//             formate: $formate
//             overs: $overs
//             tournamentId: $tournament_id
//             summary: $summary
//             tossWinningTeamId: $toss_winning_team_id
//             tossDecision: $toss_decision
//             categoryType: $category_type
//             groupId: $group_id
//             ballsPerOver: $balls_per_over
//         }
//     ){
//         success,
//         errors {
//             field
//             message
//         }
//         match {
//             id
//             ballsPerOver
//             teamOne {
//                 name
//             }
//             teamTwo {
//                 name
//             }
//             organizer {
//                 name
//             }
//             status
//             shareableId
//             matchType
//             overs
//             venue {
//                 title
//                 lat
//                 long
//                 subTitle
//             }
//             tossWinningTeam{
//                 id
//             }
//             tossDecision
//             currentInning {
//                 id
//                 matchId
//                 batingTeamId
//                 bowlingTeamId
//                 inningNumber
//                 totalOvers
//                 runs
//                 totalWickets
//                 currentWickets
//                 ballsPerOver
//                 extrasTotal
//                 extrasWides
//                 extrasByes
//                 extrasLegByes
//                 extrasNoBalls
//                 extrasPenalty
//                 oversAttributes {
//                     id
//                     overNumber
//                     inningId
//                     sixes
//                     overStatus
//                     runs
//                     wicketsTaken
//                     extrasTotal
//                     extrasWides
//                     extrasByes
//                     extrasLegByes
//                     extrasNoBalls
//                     extrasPenalty
//                     ballsCount
//                     ballsAttributes {
//                         id
//                         overId
//                         batsmanId
//                         bowlerId
//                         runs
//                         ballType
//                     }
//                 }
//             }
//         }
//     }
// }`
export const setGoldenBallNumberMutation: string = `mutation setGoldenBallNumber( 
    $inningId: ID!, 
    $goldenBallNumber: Int!
)
{
    setGoldenBallNumber( 
        input: { 
            inningId: $inningId,
            goldenBallNumber: $goldenBallNumber 
            } 
        )
    {
        success,
        errors {
            field
            message
        }
        inning {
            id
            goldenBallNumber
        }
    }
}`
export const startMatchMutation: string = `mutation createMatch(
    $team_one_id: ID!,
    $team_two_id: ID!,
    $wickets: Int!,
    $ball_type: BallTypeEnum!,
    $match_type: MatchTypeEnum!,
    $scheduled_datetime: ISO8601DateTime!,
    $formate: MatchFormateTypeEnum!,
    $overs: Int!,
    $venue_id: ID!,
    $scorerId: ID
    $status: CreateMatchStatusTypeEnum!,
    $tournament_id: ID,
    $summary: String,
    $toss_winning_team_id: ID,
    $toss_decision: TossDecisionTypeEnum,
    $categoryType: MatchCategoryTypeEnum,
    $subCategory: MatchSubCategoryTypeEnum,
    $group_id: ID
    $balls_per_over: Int
){
    createMatch(
        input: {
            teamOneId: $team_one_id
            teamTwoId: $team_two_id
            wickets: $wickets
            ballType: $ball_type
            matchType: $match_type
            venueId: $venue_id
            status: $status
            scheduledDatetime: $scheduled_datetime
            formate: $formate
            overs: $overs
            tournamentId: $tournament_id
            summary: $summary
            tossWinningTeamId: $toss_winning_team_id
            tossDecision: $toss_decision
            categoryType: $categoryType
            subCategory: $subCategory
            groupId: $group_id
            ballsPerOver: $balls_per_over
            scorerId: $scorerId
        }
    ){
        success,
        errors {
            field
            message
        }
        match {
            matchCategoryType:categoryType
            matchSubbCategoryType:subCategory
            overlayUrl
            id
            ballsPerOver
            teamOne {
                name
                id
                logoUrl
            }
            teamTwo {
                name
                id
                logoUrl
            }
            organizer {
                name
            }
            status
            shareableId
            matchType
            overs
            venue {
                title
                lat
                long
                subTitle
            }
            tossWinningTeam{
                id
            }
            tossDecision
            innings {
                id
                matchId
                duration
                batingTeam {
                    id
                    name
                    logoUrl
                }
                goldenBallNumber
                currentPartnership {
                    id
                    batsmanOneId
                    batsmanTwoId
                    runs
                    normalBalls
                    extraBalls
                    ballsCount
                    batsmanOneRuns
                    batsmanTwoRuns
                    batsmanOneBalls
                    batsmanTwoBalls
                }
                currentOvers
                currentRunRate
                batingTeamId
                bowlingTeamId
                bowlingTeam {
                    id
                    name
                    logoUrl
                }
                bowlingTeamPlayers {
                    bowlerId
                    id
                    name
                }
                batingTeamPlayers {
                    batsmanId
                    id
                    name
                }
                inningNumber
                totalOvers
                runs
                totalWickets
                currentWickets
                ballsPerOver
                extrasTotal
                extrasWides
                extrasByes
                extrasLegByes
                extrasNoBalls
                extrasPenalty
                balls {
                    ballNumber
                    overBallsNumber
                    overNumber
                    batsmanId
                    bowlerId
                    nonStrikerId
                    inningId
                    ballType
                    extrasType
                    boundaryType
                    runs
                    xCoordinate
                    yCoordinate
                    shotArea
                    shotAngle
                    wicketAttributes {
                        inningId
                        wicketType
                        playerOutId
                        fielderId
                    }
                    secondaryWicketAttributes {
                        inningId
                        wicketType
                        playerOutId
                        fielderId
                        fallAtOver
                        fallAtRuns
                        wicketNumber
                    }
                }
            }
            currentInning {
                id
                matchId
                duration
                batingTeam {
                    id
                    name
                    logoUrl
                }
                goldenBallNumber
                currentPartnership {
                    id
                    batsmanOneId
                    batsmanTwoId
                    runs
                    normalBalls
                    extraBalls
                    ballsCount
                    batsmanOneRuns
                    batsmanTwoRuns
                    batsmanOneBalls
                    batsmanTwoBalls
                }
                currentOvers
                currentRunRate
                batingTeamId
                bowlingTeamId
                inningNumber
                totalOvers
                runs
                totalWickets
                currentWickets
                ballsPerOver
                extrasTotal
                extrasWides
                extrasByes
                extrasLegByes
                extrasNoBalls
                extrasPenalty
                inningLineup {
                    nonStrikerId
                    strikerId
                    bowlerId
                    strikerStat {
                        batsmanId
                        name
                        runs
                        fours
                        sixers
                        strikeRate
                        retiredHurt
                        retiredHurtStatus
                        ballsCount
                        isOut
                        wicketType
                    }
                    nonStrikerStat {
                        batsmanId
                        name
                        runs
                        fours
                        sixers
                        strikeRate
                        retiredHurt
                        retiredHurtStatus
                        ballsCount
                        isOut
                        wicketType
                    }
                    bowlerStat {
                        bowlerId
                        name
                        ballsCount
                        overs
                        runs
                        wide
                        maidenOvers
                        wicketsCount
                        retiredHurt
                        retiredHurtStatus
                        economyRate
                        isBowling
                    }
                }
                balls {
                    ballNumber
                    overBallsNumber
                    overNumber
                    batsmanId
                    bowlerId
                    nonStrikerId
                    inningId
                    ballType
                    extrasType
                    boundaryType
                    runs
                    xCoordinate
                    yCoordinate
                    shotArea
                    shotAngle
                    wicketAttributes {
                        inningId
                        wicketType
                        playerOutId
                        fielderId
                    }
                    secondaryWicketAttributes {
                    inningId
                    wicketType
                    playerOutId
                    fielderId
                    fallAtOver
                    fallAtRuns
                    wicketNumber
                }
                }
            }
        }
    }
}`;
export const allMatchesQuery: string = `query allMatches($status: MatchStatusTypeEnum, $page: Int, $limit: Int){
    allMatches(status: $status, page: $page, limit: $limit) {
      collection {
          id
          liveStreamingUrl
          streamingLinks {
            link
            id
        }
          actionStatus
          message
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
            title
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
        duration
        inningNumber
        batingTeam {
            name
            logoUrl
        }
        runs
        goldenBallNumber
         currentOvers
         currentWickets
              }
      currentInning {
          id
          matchId
          duration
          batingTeamId
          bowlingTeamId
          inningNumber
          totalOvers
          runs
          goldenBallNumber
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
export const drawMatchMutation: string = `mutation updateMatchActionStatus(
    $id: ID!,
    $actionStatus: MatchActionStatusEnum!,
    $drawStatus: DrawStatusEnum
){
    updateMatchActionStatus(
        input: {
            id: $id
            actionStatus: $actionStatus,
            drawStatus: $drawStatus
        }
    ){
        success,
        errors {
            field
            message
        }
        match {
            id
            teamOne {
                name
            }
            teamTwo {
                name
            }
            venue {
                title
                lat
                long
            }
        }
    }
}`
export const endInningMutation: string = `mutation endInning( 
    $id: ID! 
    $kitPoint: KitPointInputType
    )
  {
      endInning( input: {
         inningId: $id 
         kitPoint: $kitPoint
        } )
      {
          success,
          errors {
              field
              message
          }
          match {
              id
              overlayUrl
              ballsPerOver
              targetScore
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
                id
                name
                runs
                wickets
                overs
                yetToBat
                logoUrl
              }
              organizer {
                  name
              }
              status
              shareableId
              matchType
              overs
              venue {
                  title
                  lat
                  long
                  subTitle
              }
              tossWinningTeam{
                  id
              }
              tossDecision
              innings {
                id
                matchId
                duration
                goldenBallNumber
                currentPartnership {
                    id
                    batsmanOneId
                    batsmanTwoId
                    runs
                    normalBalls
                    extraBalls
                    ballsCount
                    batsmanOneRuns
                    batsmanTwoRuns
                    batsmanOneBalls
                    batsmanTwoBalls
                }
                batingTeam {
                    id
                    name
                    logoUrl
                }
                inningLineup {
                    nonStrikerId
                    strikerId
                    bowlerId
                    strikerStat {
                        batsmanId
                        name
                        runs
                        fours
                        sixers
                        strikeRate
                        retiredHurt
                        retiredHurtStatus
                        ballsCount
                        isOut
                        wicketType
                    }
                    nonStrikerStat {
                        batsmanId
                        name
                        runs
                        fours
                        sixers
                        strikeRate
                        retiredHurt
                        retiredHurtStatus
                        ballsCount
                        isOut
                        wicketType
                    }
                    bowlerStat {
                        bowlerId
                        name
                        ballsCount
                        overs
                        runs
                        wide
                        maidenOvers
                        wicketsCount
                        retiredHurt
                        retiredHurtStatus
                        economyRate
                        isBowling
                    }
                }
                currentOvers
                currentRunRate
                batingTeamId
                bowlingTeamId
                bowlingTeam {
                    id
                    name
                    logoUrl
                }
                bowlingTeamPlayers {
                    bowlerId
                    id
                    name
                }
                batingTeamPlayers {
                    batsmanId
                    id
                    name
                }
                inningNumber
                totalOvers
                runs
                totalWickets
                currentWickets
                ballsPerOver
                extrasTotal
                extrasWides
                extrasByes
                extrasLegByes
                extrasNoBalls
                extrasPenalty
                balls {
                    ballNumber
                    overBallsNumber
                    overNumber
                    batsmanId
                    bowlerId
                    nonStrikerId
                    inningId
                    ballType
                    extrasType
                    boundaryType
                    runs
                    xCoordinate
                    yCoordinate
                    shotArea
                    shotAngle
                    wicketAttributes {
                        inningId
                        wicketType
                        playerOutId
                        fielderId
                    }
                    secondaryWicketAttributes {
                    inningId
                    wicketType
                    playerOutId
                    fielderId
                    fallAtOver
                    fallAtRuns
                    wicketNumber
                }
                }
            }
              currentInning {
                  id
                  matchId
                  duration
                  currentPartnership {
                    id
                    batsmanOneId
                    batsmanTwoId
                    runs
                    normalBalls
                    extraBalls
                    ballsCount
                    batsmanOneRuns
                    batsmanTwoRuns
                    batsmanOneBalls
                    batsmanTwoBalls
                }
                goldenBallNumber
                currentOvers
                currentRunRate
                  batingTeamId
                  bowlingTeamId
                  inningNumber
                  totalOvers
                  runs
                  totalWickets
                  batingTeam {
                    id
                    name
                    logoUrl
                }
                  currentWickets
                  ballsPerOver
                  extrasTotal
                  extrasWides
                  extrasByes
                  extrasLegByes
                  extrasNoBalls
                  extrasPenalty
                  inningLineup {
                    nonStrikerId
                    strikerId
                    bowlerId
                    strikerStat {
                        batsmanId
                        name
                        runs
                        fours
                        sixers
                        strikeRate
                        retiredHurt
                        retiredHurtStatus
                        ballsCount
                        isOut
                        wicketType
                    }
                    nonStrikerStat {
                        batsmanId
                        name
                        runs
                        fours
                        sixers
                        strikeRate
                        retiredHurt
                        retiredHurtStatus
                        ballsCount
                        isOut
                        wicketType
                    }
                    bowlerStat {
                        bowlerId
                        name
                        ballsCount
                        overs
                        runs
                        wide
                        maidenOvers
                        wicketsCount
                        retiredHurt
                        retiredHurtStatus
                        economyRate
                        isBowling
                    }
                }
                  balls {
                      ballNumber
                      overBallsNumber
                      overNumber
                      batsmanId
                      bowlerId
                      nonStrikerId
                      inningId
                      ballType
                      extrasType
                      boundaryType
                      runs
                      xCoordinate
                      yCoordinate
                      shotArea
                      shotAngle
                      wicketAttributes {
                        inningId
                        wicketType
                        playerOutId
                        fielderId
                    }
                    secondaryWicketAttributes {
                        inningId
                        wicketType
                        playerOutId
                        fielderId
                        fallAtOver
                        fallAtRuns
                        wicketNumber
                    }
                  }
              }
          }
      }
  }`;
export const getMatchQuery: string = `query getMatch($id: ID!){
    getMatch(id: $id) {
        tickerToggleStatus
        matchCategoryType:categoryType
        matchSubCategoryType:subCategory
        overlayUrl
          id
          tournament {
            id
            name
            coverPhotoUrl,
            name, 
            city, 
            country
          }
          ballsPerOver
          targetScore
          scorerId
          liveStreamingUrl
          streamingLinks {
            link
            id
        }
          message
          actionStatus
          stats{
            manOfTheMatch{
                name
                batingStat{
                    batsmanId
                    name
                    runs
                    fours
                    sixers
                    strikeRate
                    retiredHurt
                    retiredHurtStatus
                    ballsCount
                    isOut
                    wicketType
                    normalBalls
                }
                bowlingStat {
                    bowlerId
                    name
                    ballsCount
                    overs
                    runs
                    wide
                    retiredHurt
                    wicketsCount
                    retiredHurtStatus
                    economyRate
                    isBowling
                }
            }
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
          winningStats {
            winByRuns
            byRuns
            winByWickets
            byWickets
        }
        scorer {
            player {
                shareableId
            }
         }
        winningTeam{
            name
            id
            logoUrl
        }
        isTie
          teamTwo {
            id
            name
            runs
            wickets
            overs
            yetToBat
            logoUrl
          }
          organizer {
              name
              id
          }
          summary {
            matchSummaryUrl
            teamOne {
                name
                runs
                wickets
                overs
                topBattingPerformances {
                    id
                    batsmanId
                    name
                    runs
                    fours
                    sixers
                    strikeRate
                    ballsCount
                    normalBalls
                }
                topBowlingPerformances {
                    id
                    bowlerId
                    name
                    overs
                    runs
                    wide
                    economyRate
                    maidenOvers
                    wicketsCount
                }
            }
            teamTwo {
                name
                runs
                wickets
                overs
                topBattingPerformances {
                    id
                    batsmanId
                    name
                    runs
                    fours
                    sixers
                    strikeRate
                    ballsCount
                    normalBalls
                }
                topBowlingPerformances {
                    id
                    bowlerId
                    name
                    overs
                    runs
                    wide
                    economyRate
                    maidenOvers
                    wicketsCount
                }
            }
        }
          status
          scheduledDatetime
          shareableId
          matchType
          overs
          venue {
            id
              title
              lat
              long
              subTitle
          }
          tossWinningTeam{
              id
          }
          tossDecision
          wickets
          ballType
          formate
          innings {
            id
            status
            matchId
            ballsCount
            duration
            goldenBallNumber
            partnerships {
                id
                batsmanOne {
                    name
                }
                batsmanTwo {
                    name
                }
                batsmanOneRuns
                batsmanTwoRuns
                batsmanOneBalls
                batsmanTwoBalls
                runs
                normalBalls
                extraBalls
                ballsCount
            }
            overs {
                id
                accumulativeScore
                accumulativeWickets             
                commentaryBalls{
                    id
                    overId
                    ballNumber
                    commentaryMessage
                    overNumber
                    overBallsNumber
                    runs
                    ballType
                    extrasType
                    boundaryType
                    wicketAttributes {
                        wicketType
                        bowler{
                            name
                        }
                        fielder{
                            name
                        }
                    }
                    secondaryWicketAttributes {
                        inningId
                        wicketType
                        playerOutId
                        fielderId
                        fallAtOver
                        fallAtRuns
                        wicketNumber
                        bowler{
                            name
                        }
                        fielder{
                            name
                        }
                    }
                    bowler{
                        name
                    }
                    striker{
                        name
                    }
                    nonStriker{
                        name
                    }
                }
                overNumber
                sixes
                fours
                runs
                runRate
                wicketsTaken
                ballsCount
                maiden
            }
            currentPartnership {
                id
                batsmanOneId
                batsmanTwoId
                runs
                normalBalls
                extraBalls
                ballsCount
                batsmanOneRuns
                batsmanTwoRuns
                batsmanOneBalls
                batsmanTwoBalls
            }
            inningLineup {
                nonStrikerId
                strikerId
                bowlerId
                striker {
                    id
                    name
                    batsmanId
                    batingStat {
                        name
                        runs
                        fours
                        sixers
                        strikeRate
                        retiredHurt
                        retiredHurtStatus
                        ballsCount
                        isOut
                        isBating
                        wicketType
                        normalBalls
                        extraBalls
                        wicket {
                            id
                            fallAtOver
                            fallAtRuns
                            wicketType
                            wicketNumber
                            playerOut {
                                id
                                name
                            }
                            bowler {
                                id
                                name
                            }
                            fielder {
                                id
                                name
                            }            
                        }
                    }
                }
                nonStriker {
                    id
                    name
                    batsmanId
                    batingStat {
                        name
                        runs
                        fours
                        sixers
                        strikeRate
                        retiredHurt
                        retiredHurtStatus
                        ballsCount
                        isOut
                        isBating
                        wicketType
                        normalBalls
                        extraBalls
                        wicket {
                            id
                            fallAtOver
                            fallAtRuns
                            wicketType
                            wicketNumber
                            playerOut {
                                id
                                name
                            }
                            bowler {
                                id
                                name
                            }
                            fielder {
                                id
                                name
                            }            
                        }
                    }
                }
                bowler {
                    id
                    name
                    bowlerId
                    bowlingStat {
                        ballsCount
                        overs
                        runs
                        wide
                        maidenOvers
                        wicketsCount
                        retiredHurt
                        economyRate
                        isBowling
                    }
                }
                strikerStat {
                    batsmanId
                    name
                    runs
                    fours
                    sixers
                    strikeRate
                    retiredHurt
                    retiredHurtStatus
                    ballsCount
                    normalBalls
                    isOut
                    wicketType
                }
                nonStrikerStat {
                    batsmanId
                    name
                    runs
                    fours
                    sixers
                    strikeRate
                    retiredHurt
                    retiredHurtStatus
                    ballsCount
                    normalBalls
                    isOut
                    wicketType
                }
                bowlerStat {
                    bowlerId
                    name
                    ballsCount
                    overs
                    runs
                    wide
                    maidenOvers
                    wicketsCount
                    retiredHurt
                    retiredHurtStatus
                    economyRate
                    isBowling
                }
              }
            currentOvers
            currentRunRate
            batingTeamId
            bowlingTeamId
            inningNumber
            totalOvers
            runs
            totalWickets
            currentWickets
            ballsPerOver
            extrasTotal
            extrasWides
            extrasByes
            extrasLegByes
            extrasNoBalls
            extrasPenalty
            batingTeam {
                name
                logoUrl
            }
            bowlingTeam {
                id
                name
                logoUrl
            }
            bowlingTeamPlayers {
                bowlerId
                id
                name
                shareableId
                player{
                    id
                }
                bowlingStat {
                    name
                    ballsCount
                    overs
                    runs
                    wide
                    retiredHurt
                    retiredHurtStatus
                    economyRate
                    isBowling
                    maidenOvers
                    normalBalls
                    wicketsCount
                    extraBalls
                }
            }
            batingTeamPlayers {
                batsmanId
                id
                shareableId
                name
                player{
                    id
                }
                batingStat {
                    name
                    runs
                    fours
                    sixers
                    strikeRate
                    retiredHurt
                    retiredHurtStatus
                    ballsCount
                    isOut
                    isBating
                    wicketType
                    normalBalls
                    extraBalls
                    wicket {
                        id
                        fallAtOver
                        fallAtRuns
                        wicketType
                        wicketNumber
                        playerOut {
                            id
                            name
                        }
                        bowler {
                            id
                            name
                        }
                        fielder {
                            id
                            name
                        }            
                    }
                }
            }
            balls {
                ballNumber
                overBallsNumber
                overNumber
                batsmanId
                bowlerId
                nonStrikerId
                inningId
                ballType
                extrasType
                boundaryType
                runs
                xCoordinate
                yCoordinate
                shotArea
                shotAngle
                wicketAttributes {
                    inningId
                    wicketType
                    playerOutId
                    fielderId
                }
                secondaryWicketAttributes {
                    inningId
                    wicketType
                    playerOutId
                    fielderId
                    fallAtOver
                    fallAtRuns
                    wicketNumber
                }
            }
        }
          currentInning {
              id
              status
              matchId
              duration
              ballsCount
              goldenBallNumber
              partnerships {
                batsmanOne {
                    name
                }
                batsmanTwo {
                    name
                }
                batsmanOneRuns
                batsmanTwoRuns
                batsmanOneBalls
                batsmanTwoBalls
                runs
                normalBalls
                extraBalls
                ballsCount
            }
              currentPartnership {
                id
                batsmanOneId
                batsmanTwoId
                runs
                normalBalls
                extraBalls
                ballsCount
                batsmanOneRuns
                batsmanTwoRuns
                batsmanOneBalls
                batsmanTwoBalls
            }
            currentOvers
            currentRunRate
              batingTeamId
              bowlingTeamId
              batingTeam {
                id
                name
                logoUrl
            }
              inningNumber
              totalOvers
              runs
              inningLineup {
                nonStrikerId
                strikerId
                bowlerId
                striker {
                    id
                    name
                    batsmanId
                    batingStat {
                        name
                        runs
                        fours
                        sixers
                        strikeRate
                        retiredHurt
                        retiredHurtStatus
                        ballsCount
                        isOut
                        isBating
                        wicketType
                        normalBalls
                        extraBalls
                        wicket {
                            id
                            fallAtOver
                            fallAtRuns
                            wicketType
                            wicketNumber
                            playerOut {
                                id
                                name
                            }
                            bowler {
                                id
                                name
                            }
                            fielder {
                                id
                                name
                            }            
                        }
                    }
                }
                nonStriker {
                    id
                    name
                    batsmanId
                    batingStat {
                        name
                        runs
                        fours
                        sixers
                        strikeRate
                        retiredHurt
                        retiredHurtStatus
                        ballsCount
                        isOut
                        isBating
                        wicketType
                        normalBalls
                        extraBalls
                        wicket {
                            id
                            fallAtOver
                            fallAtRuns
                            wicketType
                            wicketNumber
                            playerOut {
                                id
                                name
                            }
                            bowler {
                                id
                                name
                            }
                            fielder {
                                id
                                name
                            }            
                        }
                    }
                }
                bowler {
                    id
                    name
                    bowlerId
                    bowlingStat {
                        ballsCount
                        overs
                        runs
                        wide
                        maidenOvers
                        wicketsCount
                        retiredHurt
                        economyRate
                        isBowling
                    }
                }
                strikerStat {
                    batsmanId
                    name
                    runs
                    fours
                    sixers
                    strikeRate
                    retiredHurt
                    retiredHurtStatus
                    ballsCount
                    normalBalls
                    isOut
                    wicketType
                    wicket {
                        id
                        wicketType
                        fielder {
                            name
                        }
                        bowler {
                            name
                        }
                    }
                }
                nonStrikerStat {
                    batsmanId
                    name
                    runs
                    fours
                    sixers
                    strikeRate
                    retiredHurt
                    retiredHurtStatus
                    ballsCount
                    normalBalls
                    isOut
                    wicketType
                    wicket {
                        id
                        wicketType
                        fielder {
                            name
                        }
                        bowler {
                            name
                        }
                    }
                }
                bowlerStat {
                    bowlerId
                    name
                    ballsCount
                    overs
                    runs
                    wide
                    maidenOvers
                    wicketsCount
                    retiredHurt
                    retiredHurtStatus
                    economyRate
                    isBowling
                }
              }
              bowlingTeamPlayers {
                bowlerId
                id
                name
                shareableId
                team {
                    id
                }
                bowlingStat {
                    name
                    ballsCount
                    overs
                    runs
                    wide
                    retiredHurt
                    retiredHurtStatus
                    economyRate
                    isBowling
                    maidenOvers
                    normalBalls
                    wicketsCount
                    extraBalls
                }
            }
            batingTeamPlayers {
                batsmanId
                id
                name
                shareableId
                team {
                    id
                }
                batingStat {
                    name
                    runs
                    fours
                    sixers
                    strikeRate
                    retiredHurt
                    retiredHurtStatus
                    ballsCount
                    isOut
                    isBating
                    wicketType
                    normalBalls
                    extraBalls
                }
            }
              totalWickets
              currentWickets
              ballsPerOver
              extrasTotal
              extrasWides
              extrasByes
              extrasLegByes
              extrasNoBalls
              extrasPenalty
              balls {
                  ballNumber
                  overBallsNumber
                  overNumber
                  batsmanId
                  bowlerId
                  nonStrikerId
                  inningId
                  ballType
                  extrasType
                  boundaryType
                  runs
                  xCoordinate
                  yCoordinate
                  shotArea
                  shotAngle
                  wicketAttributes {
                    inningId
                    wicketType
                    playerOutId
                    fielderId
                }
                secondaryWicketAttributes {
                    inningId
                    wicketType
                    playerOutId
                    fielderId
                    fallAtOver
                    fallAtRuns
                    wicketNumber
                }
              }
          }
    }
  }`;
export const viewMatchQuery: string = `query getMatch($id: ID!){
    getMatch(id: $id) {
        tickerToggleStatus
    }
  }`;
export const myMatchesQuery: string = `query myMatches($status: MatchStatusTypeEnum, $page: Int, $limit: Int){
    myMatches(status: $status, page: $page, limit: $limit) {
      collection {
          id
          isTie
          actionStatus
          categoryType
          subCategory
          message
          teamOne {
            name,
            id,
            runs,
            wickets,
            overs,
            yetToBat
            logoUrl
        }
        winningStats {
            winByRuns
            byRuns
            winByWickets
            byWickets
        }
        winningTeam {
            name
            logoUrl
        }  
        tournament{
            name
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
        formate
        organizer {
            name
            id
        }
        matchType
          scheduledDatetime
          status
          isScorer
          scorerId
      }
      metadata {
          totalPages
          totalCount
          currentPage
          limitValue
        }
      }
  }`;
export const matchViewQuery: string = `query getMatch($id: ID!){
    getMatch(id: $id) {
        tickerToggleStatus
        overlayUrl
        liveStreamingUrl
        streamingLinks {
            link
            id
        }
        stats{
            manOfTheMatch{
                name
               
                batingStat{
                    batsmanId
                    name
                    runs
                    fours
                    sixers
                    strikeRate
                    retiredHurt
                    retiredHurtStatus
                    ballsCount
                    isOut
                    wicketType
                }
                bowlingStat {
                    bowlerId
                    name
                    ballsCount
                    overs
                    runs
                    wide
                    retiredHurt
                    retiredHurtStatus
                    economyRate
                    isBowling
                }
            }
        }
      teamOne {
        id
          name
          logoUrl
      }
      teamTwo {
        id
          name
          logoUrl
      }
      organizer {
          name
      }
      shareableId
      matchType
      overs
      wickets
      ballType
      scheduledDatetime
      formate
      status
      tossDecision
      summary
      categoryType
      subCategory
      batingTeamId
      bowlingTeamId
      ballsPerOver
      venue {
          title
          lat
          long
          subTitle
      }
      innings {
        id
        matchId
        duration
        currentPartnership {
            id
            batsmanOneId
            batsmanTwoId
            runs
            normalBalls
            extraBalls
            ballsCount
            batsmanOneRuns
            batsmanTwoRuns
            batsmanOneBalls
            batsmanTwoBalls
        }
        goldenBallNumber
        currentOvers
        currentRunRate
        batingTeamId
        bowlingTeamId
        inningNumber
        totalOvers
        runs
        totalWickets
        currentWickets
        ballsPerOver
        extrasTotal
        extrasWides
        extrasByes
        extrasLegByes
        extrasNoBalls
        extrasPenalty
        batingTeam {
            name
            id
            logoUrl
        }
        bowlingTeam {
            id
            name
            logoUrl
        }
        bowlingTeamPlayers {
            bowlerId
            id
            shareableId
            name
            player{
                id
            }
        }
        batingTeamPlayers {
            batsmanId
            id
            shareableId
            name
            player{
                id
            }
        }
        balls {
            ballNumber
            overBallsNumber
            overNumber
            batsmanId
            bowlerId
            nonStrikerId
            inningId
            ballType
            extrasType
            boundaryType
            runs
            xCoordinate
            yCoordinate
            shotArea
            shotAngle
            wicketAttributes {
                inningId
                wicketType
                playerOutId
                fielderId
            }
            secondaryWicketAttributes {
                inningId
                wicketType
                playerOutId
                fielderId
                fallAtOver
                fallAtRuns
                wicketNumber
            }
        }
    }
      currentInning {
          id
          matchId
          duration
          currentPartnership {
            id
            batsmanOneId
            batsmanTwoId
            runs
            normalBalls
            extraBalls
            ballsCount
            batsmanOneRuns
            batsmanTwoRuns
            batsmanOneBalls
            batsmanTwoBalls
        }
        goldenBallNumber
        currentOvers
        currentRunRate
          inningLineup {
              nonStrikerId
              strikerId
              bowlerId
              strikerStat {
                  batsmanId
                  name
                  runs
                  fours
                  sixers
                  strikeRate
                  retiredHurt
                  retiredHurtStatus
                  ballsCount
                  isOut
                  wicketType
              }
              nonStrikerStat {
                  batsmanId
                  name
                  runs
                  fours
                  sixers
                  strikeRate
                  retiredHurt
                  retiredHurtStatus
                  ballsCount
                  isOut
                  wicketType
              }
              bowlerStat {
                  bowlerId
                  name
                  ballsCount
                  overs
                  runs
                  wide
                  retiredHurt
                  retiredHurtStatus
                  economyRate
                  isBowling
              }
          }
          batingTeamId
          batingTeam {
              id
              name
              logoUrl
          }
          bowlingTeam{ 
              id
              name
              logoUrl
          }
          bowlingTeamId
          batterStats {
              batsmanId
              name
              runs
              fours
              sixers
              strikeRate
              retiredHurt
              retiredHurtStatus
              ballsCount
              isOut
              wicketType
          }
          bowlerStats {
              bowlerId
              name
              ballsCount
              overs
              runs
              wide
              retiredHurt
              retiredHurtStatus
              economyRate
              isBowling
          }
          inningNumber
          totalOvers
          runs
          totalWickets
          currentWickets
          ballsPerOver
          extrasTotal

      }
    }
  }`;

export const updateMatchMutation: string = `mutation updateMatch(
    $id: ID!,
    $team_one_id: ID,
    $team_two_id: ID,
    $wickets: Int,
    $ball_type: BallTypeEnum,
    $match_type: MatchTypeEnum,
    $scheduled_datetime: ISO8601DateTime,
    $formate: MatchFormateTypeEnum,
    $overs: Int,
    $venue_id: ID,
    $scorerId: ID
    $tournament_id: ID,
    $summary: String,
    $toss_winning_team_id: ID,
    $toss_decision: TossDecisionTypeEnum,
    $status: MatchStatusTypeEnum,
    $categoryType: MatchCategoryTypeEnum,
    $subCategory: MatchSubCategoryTypeEnum,
    $group_id: ID
){
    updateMatch(
        input: {
            id: $id
            teamOneId: $team_one_id
            teamTwoId: $team_two_id
            wickets: $wickets
            ballType: $ball_type
            matchType: $match_type
            venueId: $venue_id
            scheduledDatetime: $scheduled_datetime
            formate: $formate
            overs: $overs
            tournamentId: $tournament_id
            summary: $summary
            tossWinningTeamId: $toss_winning_team_id
            tossDecision: $toss_decision
            status: $status
            categoryType: $categoryType
            subCategory: $subCategory
            groupId: $group_id
            scorerId: $scorerId
        }
    ){
        success,
        errors {
            field
            message
        }
        match {
            id
            matchType
            teamOne {
                name
            }
            teamTwo {
                name
            }
            venue {
                title
                lat
                long
            }
        }
    }
}`;

export const manOfMatchMutation: string = `mutation setManOfMatch(
    $matchId: ID!,
    $playerId: ID!
){

    setManOfMatch(
        input: {
            playerId: $playerId
            matchId: $matchId
        }
    )
    {
        success
        errors {
            field
            message
        }
        manOfTheMatch {
            name
            batingStat{
                batsmanId
                name
                runs
                fours
                sixers
                strikeRate
                retiredHurt
                retiredHurtStatus
                ballsCount
                isOut
                wicketType
            }
            bowlingStat {
                bowlerId
                name
                ballsCount
                overs
                runs
                wide
                retiredHurt
                wicketsCount
                retiredHurtStatus
                economyRate
                isBowling
            }
        }
    }
}`;


export const mostValuablePlayer: string = `query matchMvps($id: ID!){
    matchMvps(matchId: $id)
    {
        id
        name
        batsmanId
        bowlerId
        shareableId
        status
        battingPoints
        bowlingPoints
        fielderPoints
        totalPoints
        topPerformance
        team{
            name
        }
        batingStat {
            id
             batsmanId
             ballsCount
             fours
             sixers
             strikeRate
             retiredHurt
             retiredHurtStatus
             isOut
             runs
        }
        bowlingStat {
            id
             bowlerId
            ballsCount
             overs
            runs
             wide
             wicketsCount
             economyRate
            retiredHurt
            retiredHurtStatus
             isBowling
        }
        fielderStat{
            catches
            stumpings
            runOuts
        }
   
    }
}`
export const tickerToogle: string = `mutation tickerToggleAction(  
    $id: ID!,
    $status: TickerToggleStatusEnum 
      )
      { 
         tickerToggleAction(input: {  matchId: $id  status: $status  })
         {success,errors {field  message} 
         status
         tickerToggleStatus:statusCode
        }
     } `