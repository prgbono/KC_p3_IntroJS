import { setGroups, groupsName, getCountriesFromAPI} from './teams.js';
import WorldCupGroupStage from './classes/PointsBasedLeague.js';
import WorldCupPlayOffs from './classes/WorldCupPlayOffs.js';
import {summariesMock} from './mockData/mock.js'

const TOTAL_TEAMS = 32;
const TOTAL_GROUPS = 8;
const TEAMS_PER_GROUP = 4;

const worldCupTeams = [];
const groups = [];
let playOffTeams = [];
const config = { rounds: 1 };
console.clear();

const dev = true;

try {
    const countries = await getCountriesFromAPI();
    const countryNames = countries.map(country => country.name);
    countryNames.sort ((a,b) => 0.5 - Math.random());
    for (let i=0; i<TOTAL_TEAMS; i++){
        worldCupTeams.push(countryNames[i]);
    }
    
    // Set 8 groups of 4 teams each
    setGroups(worldCupTeams, TOTAL_GROUPS, TEAMS_PER_GROUP).forEach((group, index) => {
        groups.push(new WorldCupGroupStage('Grupo '+groupsName[index], group, config));
    })
    
    console.log('---- COMIENZA EL TORNEO ----');
    console.log('----------------------------');
if (dev){  

    groups.forEach((group, index) => { 
        group.scheduleMatchDays();
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

        // Mostramos los acumulados (goles y puntos)
        const initialAccumulator = { totalGoals: 0, totalPoints: 0 }
        const totals = group.teams.reduce(function(accumulator, team) {
            accumulator.totalGoals += team.goalsFor
            accumulator.totalPoints += team.points
            return accumulator
        }, initialAccumulator)

        console.log('TOTALS', totals)
        console.log('---------------')

        playOffTeams = playOffTeams.concat(group.getQualifiedTeams(group.summaries));
    })

    // --- PLAYOFFS ---
    console.log('===============================================');
    console.log('==== COMIENZO DE LA FASE DE ELIMINATORIAS =====');

    const worldCupPlayOffs = new WorldCupPlayOffs('World Cup PlayOffs', playOffTeams);
    const playOffs = worldCupPlayOffs.getPlayOffRoundsInfo();
    let winners = worldCupPlayOffs.teams;

  
    for (let playOff of playOffs) {
        let currentRoundDraw;
        currentRoundDraw = worldCupPlayOffs.RoundDraw(winners, playOff.numberOfTeams);

        console.log('===============================================');
        console.log(`===== ${playOff.name} =====`);
        console.log('===============================================');

        winners = worldCupPlayOffs.playRound(currentRoundDraw);
        
        if (currentRoundDraw.length == 2) {
            const results3And4th = worldCupPlayOffs.tercerYcuartoPuesto(currentRoundDraw, winners);
            console.log('===============================================');
            console.log(`===== TERCER Y CUARTO PUESTO =====`);
            console.log(`${results3And4th.homeTeam} ${results3And4th.homeGoals} - ${results3And4th.awayGoals} ${results3And4th.awayTeam}`);
        }

        if (winners.length === 1){
            console.log(`===== CAMPEÓN DEL MUNDO ---> ${winners.map(team => team.toUpperCase())} ======`);
            console.log('===============================================');
        }
    } 
} // LLAVE DEL DEV, NO IDENTAR!!!
}
catch(e){
    console.error('ERROR', e)
}


// Testear getUpdatedStanding
// const grupo = new WorldCupGroupStage('Grupo TEST', ['Nueva Zelanda', 'Japón', 'Francia', 'Ghana'], { rounds: 1 });
// console.log('newStanding: ',grupo.getUpdatedStanding(summariesMock));

//TODO: LAs calificaciones mostradas son las correctas con esos criterios de calificación?







