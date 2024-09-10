export const createBallMutation: string = `mutation createBalls( $balls: [BallInputType!]! )
{
    createBalls( input: { balls: $balls } )
    {
        success,
        errors {
            field
            message
        }
        inning {
            id
            matchId
            ballsCount
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
                xCoordinate
                yCoordinate
                shotArea
                shotAngle
                runs
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
export const updateBallMutation : string = `mutation updateBall( 
    $ballNumber: Int!
    $inningId: ID!
    $runs: Int!
    $boundaryType: BoundaryTypeEnum
)
{
    updateBall( input: { 
        ballNumber: $ballNumber
        inningId: $inningId
        score: $runs
        boundary: $boundaryType
    })
    {
        success,
        errors {
            field
            message
        }
        inning {
            id
            ballsCount
            matchId
            ballsCount
            batingTeamId
            bowlingTeamId
            inningNumber
            totalOvers
            runs
            totalWickets
            currentWickets
            ballsPerOver
            extrasTotal
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
                wicketAttributes {
                    inningId
                    wicketType
                    playerOutId
                    fielderId
                }
            }
        }
    }
}`;
export const updateInningLineupMutation: string = `mutation updateInningLineup(
    $inningId: ID!,
    $strikerId: ID,
    $nonStrikerId: ID,
    $bowlerId: ID
){
    updateInningLineup(
        input: {
            inningId: $inningId
            strikerId: $strikerId
            nonStrikerId: $nonStrikerId
            bowlerId: $bowlerId
        }
    ){
        success,
        errors {
            field
            message
        }
        inningLineup {
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
                isBating
                wicketType
                normalBalls
                extraBalls
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
                isBating
                wicketType
                normalBalls
                extraBalls
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
                maidenOvers
                normalBalls
                wicketsCount
                extraBalls

            }
        }
    }
}`;
