import { getTeamsFromGithub, getTeamsWithPromise } from './teams.js'
import FootballLeague from './classes/PointsBasedLeague.js'


try {
    const teams = await getTeamsWithPromise()
    const premierLeagueTeams = teams.map(club => club.name)
    console.log('RESPONSE', premierLeagueTeams)

    const config = { rounds: 2 }
    const premier = new FootballLeague('Premier League', premierLeagueTeams, config)

    const teamNames = premier.teams.map(team => team.name)

    teamNames.forEach(function(equipo) {
        console.log(equipo)
    })

    premier.scheduleMatchDays()

    // Mostramos por pantala las jornadas y sus partidos
    let i = 1
    premier.matchDaySchedule.forEach(matchDay => {
        console.log(`JORNADA ${i}`)
        matchDay.forEach(match => {
            const home = match[0] != null ? match[0] : 'DESCANSA'
            const away = match[1] != null ? match[1] : 'DESCANSA'
            console.log(`${home} vs ${away}`)
        })
        i++
    })


    // Comenzamos la liga
    premier.start()

    // mostrar por pantalla los resultados de cada jornada y la clasificación
    i = 1
    premier.summaries.forEach(summary => {
        console.log(`RESUMEN JORNADA ${i}`)
        summary.results.forEach(result => {
            console.log(`${result.homeTeam} ${result.homeGoals} - ${result.awayGoals} ${result.awayTeam}`)
        })
        console.table(summary.standings.map(team => {
            return {
                Team: team.name,
                Points: team.points,
                PlayedMatches: team.matchesWon + team.matchesDrawn + team.matchesLost,
                Won: team.matchesWon,
                Drawn: team.matchesDrawn,
                Lost: team.matchesLost,
                GoalsFor: team.goalsFor,
                GoalsAgainst: team.goalsAgainst,
                GoalsDiff: team.goalsFor - team.goalsAgainst
            }
        }))
        i++
    })


    // Mostramos el total de goles y el total de puntos

    // For equivalente al reduce
    // let goalsAccumulated = 0
    // for (const team of teams) {
    //    goalsAccumulated = goalsAccumulated + team.goalsFor
    // }

    //const totalGoals = premier.teams.reduce(function(goalsAccumulated, team) {
    //    return goalsAccumulated + team.goalsFor
    //}, 0)

    const initialAccumulator = { totalGoals: 0, totalPoints: 0 }
    const totals = premier.teams.reduce(function(accumulator, team) {
        accumulator.totalGoals += team.goalsFor
        accumulator.totalPoints += team.points
        return accumulator
    }, initialAccumulator)

    console.log('TOTALS', totals)
} catch (error) {
    console.error('ERROR', error)
}


