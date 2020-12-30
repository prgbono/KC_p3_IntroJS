import { worldCupTeams, setGroups, groupsName } from './teams.js';
import WorldCupGroupStage from './classes/PointsBasedLeague.js';
import WorldCupPlayOffs from './classes/FootballWorldCup.js';

const dev = true;
console.clear();

var clase;

if (dev) {
    // const worldCup = new FootballWorldCup('World Cup Playoffs', 'Equipos del playOff');
    // const worldCupPlayOffs = new WorldCupPlayOffs();
    // const worldCupGroupStage = new WorldCupGroupStage();

    // Shuffle teams for a new run
    worldCupTeams.sort ((a,b) => 0.5 - Math.random());

    // Set 8 groups of 4 teams each
    const config = { rounds: 1 };
    const groups = [];
    setGroups(worldCupTeams, 8, 4).forEach((group, index) => {
        groups.push(new WorldCupGroupStage('Grupo '+groupsName[index], group, config));
    })

    groups.forEach((group, index) => {
        // group.scheduleMatchDays2(); //TODO: scheduleMatchDays2 no tiene en cuenta config.rounds
        group.scheduleMatchDays();
        // Mostramos por pantala las jornadas y sus partidos
        // let i = 1
        // group.matchDaySchedule.forEach(matchDay => {
        //     console.log(`JORNADA ${i}`);
        //     matchDay.forEach(match => {
        //         const home = match[0] != null ? match[0] : 'DESCANSA';
        //         const away = match[1] != null ? match[1] : 'DESCANSA';
        //         console.log(`${home} vs ${away}`);
        //     })
        //     i++;
        // })

        // TODO: Parar aquí para mostrar el calendario??

        group.start();
        // mostrar por pantalla los resultados de cada jornada y la clasificación
        let i = 1;
        group.summaries.forEach(summary => {
            console.log(`GRUPO ${groupsName[index]} - RESUMEN JORNADA ${i}`);
            summary.results.forEach(result => {
                console.log(`${result.homeTeam} ${result.homeGoals} - ${result.awayGoals} ${result.awayTeam}`);
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
            i++;
        })

        // Mostramos el total de goles y el total de puntos
        const initialAccumulator = { totalGoals: 0, totalPoints: 0 }
        const totals = group.teams.reduce(function(accumulator, team) {
            accumulator.totalGoals += team.goalsFor
            accumulator.totalPoints += team.points
            return accumulator
        }, initialAccumulator)

        console.log('TOTALS', totals)
        console.log('---------------')
    })

    // console.log('groups[0]: ', groups[0].summaries[0].results);
    // console.log('groups[1]: ', groups[1].summaries[0].results);
    // console.log('groups[2]: ', groups[2].summaries[0].results);
    // console.log('groups[3]: ', groups[3].summaries[0].results);
    // console.log('groups[4]: ', groups[4].summaries[0].results);
    // console.log('groups[5]: ', groups[5].summaries[0].results);
    // console.log('groups[6]: ', groups[6].summaries[0].results);
    // console.log('groups[7]: ', groups[7].summaries[0].results);
    // console.log('groups[0]: ', groups[0].summaries[0]);
    
}


// Ir al standing de cada grupo y meter en el nextRoundTeam los dos primeros...