import { worldCupTeams, setGroups, groupsName, playOffTeams } from './teams.js';
import WorldCupGroupStage from './classes/PointsBasedLeague.js';
import WorldCupPlayOffs, {ROUND_OF_16, QUARTER_FINAL, SEMI_FINAL, FINAL} from './classes/WorldCupPlayOffs.js';


const dev = false;
console.clear();

if (dev) {
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

    //TODO: Implementar el código para extraer los dos mejores equipos de cada grupo. Ahora mismo estos equipos están hardcodeados
}
// Ir al standing de cada grupo y meter en el nextRoundTeam los dos primeros...

// --- PLAYOFFS ---
// console.log('playOffTeams: ', playOffTeams);

console.log('=============================================== ');
console.log('===== COMIENZO DE LA FASE DE ELIMINATORIAS =====');
console.log('===============================================');
console.log('===== OCTAVOS DE FINAL =====');

const worldCupPlayOffs = new WorldCupPlayOffs('World Cup PlayOffs', playOffTeams, {});
// worldCupPlayOffs.playSimpleGame();
// console.log(worldCupPlayOffs.teams)

// Hacer emparejamientos y mostrarlos por pantalla
// TODO: Meter el 16, 8, 4 y 2 de las rondas como constantes tal como están LOCAL_TEAM y AWAY_TEAM en la práctica
worldCupPlayOffs.doDraw(worldCupPlayOffs.teams, ROUND_OF_16);
// worldCupPlayOffs.doDraw(worldCupPlayOffs.teams, QUARTER_FINAL);
// worldCupPlayOffs.doDraw(worldCupPlayOffs.teams, SEMI_FINAL);
// worldCupPlayOffs.doDraw(worldCupPlayOffs.teams, FINAL);

// Jugarlos

// Tratar los equipos que pasan

