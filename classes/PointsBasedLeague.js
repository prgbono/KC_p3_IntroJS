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
        
        if (this.config.eresPatriota) {
            if (match.includes('Spain')) {
                if (!this.spainWins(match, homeGoals, awayGoals)){
                    return this.play(match)
                }
            }
        }
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


    /* Get teams qualified of each group. Criteria:
        1. More points
        2. Equal Points -> the one who wins in their direct one against one game
        3. Drawn in previous step. See goals diff.
        4. In case of drawn in the previous, alphabetic order.
    */
    //FIXME: Doesn't work properly in case of more than 2 teams drawn      
    getStandings() {
        this.teams.sort((teamA, teamB) => {
            if (teamA.points > teamB.points) {
                return -1
            } else if (teamA.points < teamB.points) {
                return 1
            } 
            else {
                let directGame = this.getDirectGame(teamA, teamB, this.summaries);
                if (directGame.length == 1){ //Se ha jugado enfrentamiento directo
                    directGame = directGame[0];
                    if ((directGame.homeTeam == teamA.name) && (directGame.homeGoals > directGame.awayGoals)){
                        return -1; 
                    }
                    else if ((directGame.homeTeam == teamA.name) && (directGame.homeGoals < directGame.awayGoals)) { 
                        return 1;
                    }
                    else if ((directGame.homeTeam == teamB.name) && (directGame.homeGoals > directGame.awayGoals)) {
                        return 1;
                    }
                    else if ((directGame.homeTeam == teamB.name) && (directGame.homeGoals < directGame.awayGoals)) {
                        return -1;
                    }
                    //Hay que contemplar el caso que se haya jugado el enfrentamiento directo y continúen igual de empatados
                    else {
                        return (this.diffGoalsAndAlphabeticCriteria(teamA, teamB))
                    }
                }
                // caso que no se haya jugado el enfrentaminto directo
                else {
                    return (this.diffGoalsAndAlphabeticCriteria(teamA, teamB))
                }
            }
        })
    }

    diffGoalsAndAlphabeticCriteria(teamA, teamB) { 
        const goalsDiffA = teamA.goalsFor - teamA.goalsAgainst;
        const goalsDiffB = teamB.goalsFor - teamB.goalsAgainst;
        if (goalsDiffA > goalsDiffB) {
            return -1
        } else if (goalsDiffA < goalsDiffB) {
            return 1
        } 
        else {
            if (teamA.name < teamB.name) {
                return -1;
            }
            else if (teamA.name > teamB.name) {
                return 1;
            }
            else {
                return 0;
            }
        }
    }

    // TODO: Refactor. Not readable
    getDirectGame(teamA, teamB, summaries){
        return (summaries.map( groupMatchDay => {
            return groupMatchDay.results.find(result => 
                (result.homeTeam == teamA.name && result.awayTeam == teamB.name)
                 || (result.homeTeam == teamB.name && result.awayTeam == teamA.name)
            )
        }))
        .filter(item => {
            return item != null;
        });
    }
    

    getQualifiedTeams(){
        let qualifiedTeams = [];
        qualifiedTeams.push(this.teams[0].name);
        qualifiedTeams.push(this.teams[1].name);
        return qualifiedTeams;
    }
}