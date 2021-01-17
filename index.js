import { setGroups, groupsName, getCountriesFromAPI, spainInParticipants } from './teams.js';
import WorldCupGroupStage from './classes/PointsBasedLeague.js';
import WorldCupPlayOffs from './classes/WorldCupPlayOffs.js';
import { LOCAL_TEAM, AWAY_TEAM } from './classes/League.js'

const TOTAL_TEAMS = 32;
const TOTAL_GROUPS = 8;
const TEAMS_PER_GROUP = 4;
let worldCupTeams = [];
const groups = [];
let playOffTeams = [];
const config = { rounds: 1, eresPatriota: false };
// Esta variable eresPatriota mostrará tu verdadero amor por la madre patria...

console.clear();

try {
    const countries = await getCountriesFromAPI();
    const countryNames = countries.map(country => country.name);
    countryNames.sort ((a,b) => 0.5 - Math.random());
    for (let i=0; i<TOTAL_TEAMS; i++){
        worldCupTeams.push(countryNames[i]);
    }

    if (config.eresPatriota) {
        worldCupTeams = spainInParticipants(worldCupTeams);
    }
    
    // Set 8 groups of 4 teams each
    setGroups(worldCupTeams, TOTAL_GROUPS, TEAMS_PER_GROUP).forEach((group, index) => {
        groups.push(new WorldCupGroupStage('Grupo '+groupsName[index], group, config));
    })

    console.log('  - GROUPS & TEAMS -   ');
    console.log('========================');
    console.log('\r');
    
    groups.forEach((group, index) => { 
        group.scheduleMatchDays();
        
        // mostrar por pantalla los partidos y resultados de cada jornada y la clasificación
        console.log(`GROUP ${groupsName[index]}:`);
        console.log('-----------------');
        group.teams.map(team => {
            console.log(team.name);
        })
        console.log('___________________');
        console.log(`GRUPO ${groupsName[index]} - Schedule:`);
        let i = 1;
        group.matchDaySchedule.forEach(matchDaySchedule => {
            console.log(`   Match Day ${i}`);
            matchDaySchedule.map(matchday => {
                console.log(`       ${matchday[LOCAL_TEAM]} - ${matchday[AWAY_TEAM]}`)
            });
            i++;
        })
        console.log('\r\n');
        group.start();
    })

    console.log('===============================================');
    console.log('-------------- WORLD CUP STARTS! --------------');
    console.log('===============================================');
    console.log('\r\n');

    groups.forEach((group, index) => { 
        // mostrar por pantalla los resultados de cada jornada y la clasificación
        let i = 1;
        group.summaries.forEach(summary => {
            console.log(`GROUP ${groupsName[index]} - Match Day ${i} Summary`);
            summary.results.forEach(result => {
                console.log(`   ${result.homeTeam} ${result.homeGoals} - ${result.awayGoals} ${result.awayTeam}`);
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
        // ===========================
        group.getStandings();
        // ===========================

        // Mostramos los acumulados (goles y puntos)
        const initialAccumulator = { totalGoals: 0, totalPoints: 0 }
        const totals = group.teams.reduce(function(accumulator, team) {
            accumulator.totalGoals += team.goalsFor
            accumulator.totalPoints += team.points
            return accumulator
        }, initialAccumulator)

        console.log('TOTALS', totals)
        console.log('---------------')
        console.log('\r');

        playOffTeams = playOffTeams.concat(group.getQualifiedTeams());
    })

    let dev = false;
    if (dev){

    console.log('===============================================');
    console.log('---------------- PLAYOFFS START ---------------');
    console.log('===============================================');

    const worldCupPlayOffs = new WorldCupPlayOffs('World Cup PlayOffs', playOffTeams, config);
    const playOffs = worldCupPlayOffs.getPlayOffRoundsInfo();
    let winners = worldCupPlayOffs.teams;
  
    for (let playOff of playOffs) {
        let currentRoundDraw;
        currentRoundDraw = worldCupPlayOffs.roundDraw(winners, playOff.name);
        console.log('\r\n');
        console.log(`===== ${playOff.name} =====`);
        winners = worldCupPlayOffs.playRound(currentRoundDraw);
        
        if (currentRoundDraw.length == 2) {
            const results3And4th = worldCupPlayOffs.tercerYcuartoPuesto(currentRoundDraw, winners);
            console.log('\r\n');
            console.log(`===== THIRD and FOURTH PLACE =====`);
            console.log(`${results3And4th.homeTeam} ${results3And4th.homeGoals} - ${results3And4th.awayGoals} ${results3And4th.awayTeam}`);
        }

        if (winners.length === 1){
            console.log(`---> ${winners.map(team => team.toUpperCase())} <--- IS THE NEW WORLD CHAMPION!!!`);
        }
    } 

    // Cierre del dev
    }
    
}
catch(e){
    console.error('ERROR', e)
}











