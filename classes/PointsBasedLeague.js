import League from './League.js'
import { LOCAL_TEAM, AWAY_TEAM } from './League.js'

export default class PointsBasedLeague extends League {
    constructor(name, teams=[], config={}) {
        super(name, teams, config)
    }

    setup(config) {
        const defaultConfig = {
            rounds: 1,
            pointsPerWin: 3,
            pointsPerDraw: 1,
            pointsPerLose: 0,
            teamsPerGroup: 4,
        }
        this.config = Object.assign(defaultConfig, config)
    }

    customizeTeam(teamName) {
        const customizedTeam = super.customizeTeam(teamName)
        return {
            points: 0,
            goalsFor: 0,
            goalsAgainst: 0,
            ...customizedTeam
        }
    }

    play(match) {
        const homeGoals = this.generateGoals();
        const awayGoals = this.generateGoals();
        return {
            homeTeam: match[LOCAL_TEAM],
            homeGoals,
            awayTeam: match[AWAY_TEAM],
            awayGoals
        }
    }

    getTeamForName(name) {
        return this.teams.find(team => team.name == name)
    }

    updateTeams(result) {
        // buscar el equipo por su nombre en el array de equipos
        const homeTeam = this.getTeamForName(result.homeTeam)
        const awayTeam = this.getTeamForName(result.awayTeam)
        if (homeTeam && awayTeam) { // si ecuentra ambos equipos

            homeTeam.goalsFor += result.homeGoals
            homeTeam.goalsAgainst += result.awayGoals
            awayTeam.goalsFor += result.awayGoals
            awayTeam.goalsAgainst += result.homeGoals

            if (result.homeGoals > result.awayGoals) { // gana equipo local
                homeTeam.points += this.config.pointsPerWin
                homeTeam.matchesWon += 1
                awayTeam.points += this.config.pointsPerLose
                awayTeam.matchesLost += 1
            } else if (result.homeGoals < result.awayGoals) { // gana equipo visitante
                homeTeam.points += this.config.pointsPerLose
                homeTeam.matchesLost += 1
                awayTeam.points += this.config.pointsPerWin
                awayTeam.matchesWon += 1
            } else { // empate
                homeTeam.points += this.config.pointsPerDraw
                homeTeam.matchesDrawn += 1
                awayTeam.points += this.config.pointsPerDraw
                awayTeam.matchesDrawn += 1
            }
        }
    }

    getStandings() {
        this.teams.sort(function(teamA, teamB) {
            if (teamA.points > teamB.points) {
                return -1
            } else if (teamA.points < teamB.points) {
                return 1
            } else { // empatan a puntosç
               const goalsDiffA = teamA.goalsFor - teamA.goalsAgainst
               const goalsDiffB = teamB.goalsFor - teamB.goalsAgainst
               if (goalsDiffA > goalsDiffB) {
                   return -1
               } else if (goalsDiffA < goalsDiffB) {
                   return 1
               } else {
                   return 0
               }
            }
        })
    }

    
    /* Get teams qualified of each group. 
        1. More points
        2. Equal Points -> the one who wins in their direct one against one game
        3. Drawn in previous step. See goals diff.
        4. In case of drawn in the previous, alphabetic order.
    */
    getUpdatedStanding(summaries){
        const groupPlayedStanding = summaries[2].standings;
        return groupPlayedStanding.sort((teamA, teamB) => {
            if (teamA.points > teamB.points) {return -1} 
            else if (teamA.points < teamB.points) {return 1} 
            else {
                let directGame = this.getDirectGame(teamA, teamB, summaries).pop();
                console.log('teamA: ', teamA.name);
                console.log('teamB: ', teamB.name);
                console.log('Enfrentamiento directo: ', directGame);
                if ((directGame.homeTeam == teamA.name) && (directGame.homeGoals > directGame.awayGoals)){
                    console.log('Criterio 2 Caso 1, empate a puntos. Pasa por mejor enfrentamiento directo: ', teamA.name); //OK
                    // console.log('Updated Standing: ', groupPlayedStanding);
                    return -1; 
                }
                else if ((directGame.homeTeam == teamA.name) && (directGame.homeGoals < directGame.awayGoals)) { //OK
                    console.log('Criterio 2 Caso 2, empate a puntos. Pasa por mejor enfrentamiento directo: ', teamB.name);
                    // console.log('Updated Standing: ', groupPlayedStanding);
                    return 1;
                }
                else if ((directGame.homeTeam == teamB.name) && (directGame.homeGoals > directGame.awayGoals)) {
                    console.log('Criterio 2 Caso 3, empate a puntos. Pasa por mejor enfrentamiento directo: ', teamB.name); //OK
                    // console.log('Updated Standing: ', groupPlayedStanding);
                    return 1;
                }
                else if ((directGame.homeTeam == teamB.name) && (directGame.homeGoals < directGame.awayGoals)) { //OK
                    console.log('Criterio 2  Caso 4, empate a puntos. Pasa por mejor enfrentamiento directo: ', teamA.name);
                    // console.log('Updated Standing: ', groupPlayedStanding);
                    return -1;
                }
                else { 
                    const goalsDiffA = teamA.goalsFor - teamA.goalsAgainst;
                    const goalsDiffB = teamB.goalsFor - teamB.goalsAgainst;
                    console.log(`Diff goles teamA: ${teamA.name}: ${goalsDiffA}; Diff goles teamB: ${teamB.name}: ${goalsDiffB}`);
                    if (goalsDiffA > goalsDiffB) {
                        console.log('Criterio 3 Caso 1, tras empatar su enfrentamiento directo. Pasa por mejor diferencia de goles: ', teamA.name);
                        // console.log('Updated Standing: ', groupPlayedStanding);
                        return -1
                    } else if (goalsDiffA < goalsDiffB) {
                        console.log('Criterio 3 Caso 2, tras empatar su enfrentamiento directo. Pasa por mejor diferencia de goles: ', teamB.name);
                        // console.log('Updated Standing: ', groupPlayedStanding);
                        return 1
                    } 
                    else {
                        if (teamA.name < teamB.name) {
                            console.log('Criterio 4, empatan en su partido y en diferencia de goles. Pasa por orden alfabético: ', teamA.name);
                            console.log('Updated Standing: ', groupPlayedStanding);
                            return -1;
                        }
                        else if (teamA.name > teamB.name) {
                            console.log('Criterio 4, empatan en su partido y en diferencia de goles. Pasa por orden alfabético: ', teamB.name);
                            console.log('Updated Standing: ', groupPlayedStanding);
                            return 1;
                        }
                        else {
                            return 0;
                        }
                    }
                }
            }
        })
    }

    // TODO: Refactor. Not readable
    getDirectGame(teamA, teamB, summaries){
        return (summaries.map( groupMatchDay => {
            return groupMatchDay.results.find(result => 
                (result.homeTeam == teamA.name && result.awayTeam == teamB.name)
                 || (result.homeTeam == teamB.name && result.awayTeam == teamA.name)
            )
        })).filter(item => {
            return item != null;
        });
    }

    getQualifiedTeams(summaries){
        const updatedStanding = this.getUpdatedStanding(summaries);
        let qualifiedTeams = [];
        qualifiedTeams.push(updatedStanding[0].name);
        qualifiedTeams.push(updatedStanding[1].name);
        return qualifiedTeams;
    }


}