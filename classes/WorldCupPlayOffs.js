import League from './League.js'
import { LOCAL_TEAM, AWAY_TEAM } from './League.js';
export default class WorldCupPlayOffs extends League {
    constructor(name, teams=[]) {
        super(name);
        this.teams = teams;
    }

    getPlayOffRoundsInfo(){
        if (this.teams.length % 2 != 0) 
            return console.log('No se admiten equipos impares en los playOffs');
        else{
            let teamsOftheRound = this.teams.length;
            const playOffRounds = [];
            do {
                playOffRounds.push({
                    name: teamsOftheRound > 8 
                            ? 'Round of ' + teamsOftheRound
                            : (teamsOftheRound == 8 
                                ? 'QUARTER FINALS'
                                : (teamsOftheRound == 4 
                                    ? 'SEMI FINALS'
                                    : 'FINAL')),
                    numberOfTeams: teamsOftheRound
                })
                teamsOftheRound = Math.floor(teamsOftheRound / 2);
            } while (teamsOftheRound > 1)
            return playOffRounds;
        }
    }

    // Prepare and show array of games of the current round.
    RoundDraw(teams, round){
        const square = [];
        let j = 0;
        for (let i=0; i < round; i=i+2) {
            square.push([teams[i], teams[i+1]]);
            j++;
        }
        return square;
    }

    play(match) {
        const homeGoals = this.generateGoals();
        const awayGoals = this.generateGoals();
        if (homeGoals === awayGoals) {
            return this.play(match);
        }
        else{
            return {
                homeTeam: match[LOCAL_TEAM],
                homeGoals,
                awayTeam: match[AWAY_TEAM],
                awayGoals
            }
        }   
    }

    playRound(round){
        let result;
        let winner;
        return round.map(game => {
            result = this.play(game);
            winner = result.homeGoals > result.awayGoals ? result.homeTeam : result.awayTeam; 
            console.log(`${game[LOCAL_TEAM]} ${result.homeGoals} - ${result.awayGoals} ${game[AWAY_TEAM]} => ${winner}`);
            return winner;
        })
    }

    tercerYcuartoPuesto(semifinals, final){
        let aux = [];
        semifinals.map(match => {
            for (let team of match){
                if (!final.includes(team)) aux.push(team);
            }
            return aux
        })
        return this.play(aux)
    }

}
