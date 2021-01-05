import { worldCupTeams, setGroups, groupsName, playOffTeams } from './teams.js';
import WorldCupGroupStage from './classes/PointsBasedLeague.js';
import WorldCupPlayOffs, {ROUND_OF_16, QUARTER_FINAL, SEMI_FINAL, FINAL} from './classes/WorldCupPlayOffs.js';


const dev = false;
console.clear();

if (dev) {
    // Shuffle teams for a new run
    worldCupTeams.sort ((a,b) => 0.5 - Math.random());

    // Set 8 groups of 4 teams each
    const config = { rounds: 1 };
    const groups = [];
    setGroups(worldCupTeams, 8, 4).forEach((group, index) => {
        groups.push(new WorldCupGroupStage('Grupo '+groupsName[index], group, config));
    })

    groups.forEach((group, index) => {
        //FIXME: scheduleMatchDays2 no tiene en cuenta config.rounds
        // group.scheduleMatchDays2(); 
        group.scheduleMatchDays();

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

    //TODO: Implementar el código para extraer los dos mejores equipos de cada grupo. 
    // Ahora mismo estos equipos están hardcodeados
}

// --- PLAYOFFS ---
console.log('=============================================== ');
console.log('===== COMIENZO DE LA FASE DE ELIMINATORIAS =====');
console.log('===============================================');
// TODO: usar currentRound para este mensaje informativo (ROund of 16, Quarter Finals...)
console.log('===== OCTAVOS DE FINAL =====');

const worldCupPlayOffs = new WorldCupPlayOffs('World Cup PlayOffs', playOffTeams, {});

// Hacer emparejamientos y mostrarlos por pantalla
const currentRound = worldCupPlayOffs.initRound(worldCupPlayOffs.teams, ROUND_OF_16);

// Jugarlos y mostrar resultados
const winners = worldCupPlayOffs.playRound(currentRound);
console.log('Winners: ', winners);

// worldCupPlayOffs.initRound(winners, QUARTER_FINAL);
// worldCupPlayOffs.initRound(worldCupPlayOffs.teams, SEMI_FINAL);
// worldCupPlayOffs.initRound(worldCupPlayOffs.teams, FINAL);



