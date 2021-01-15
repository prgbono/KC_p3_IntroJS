import League from './League.js'
import { LOCAL_TEAM, AWAY_TEAM } from './League.js';
export default class WorldCupPlayOffs extends League {
    constructor(name, teams=[], config={}) {
        super(name, teams, config)
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
                            ? 'ROUND OF ' + teamsOftheRound
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

    /* Prepare all playOff square of games so that:
        1. 1A Vs 2B, 1B Vs 2A, etc
        2. Two teams in the same group cannot couldn't play again each other until the final.
    */
    roundDraw(teams, roundName){
        const square = [];
        switch (roundName) {
            case 'ROUND OF 16':
                square.push([teams[0], teams[3]]);
                square.push([teams[1], teams[2]]);
                square.push([teams[4], teams[7]]);
                square.push([teams[5], teams[6]]);
                square.push([teams[8], teams[11]]);
                square.push([teams[9], teams[10]]);
                square.push([teams[12], teams[15]]);
                square.push([teams[13], teams[14]]);
                break;
            case 'QUARTER FINALS':
                square.push([teams[0], teams[2]]);
                square.push([teams[1], teams[3]]);
                square.push([teams[4], teams[6]]);
                square.push([teams[5], teams[7]]);
                break;
            case 'SEMI FINALS':
                square.push([teams[0], teams[2]]);
                square.push([teams[1], teams[3]]);
                break;
            case 'FINAL':
                square.push([teams[0], teams[1]]);
                break;
            default:
                // TODO: Prepare for more than 16 teams
                break;
        }
        return square;
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

    play(match) {
        const homeGoals = this.generateGoals();
        const awayGoals = this.generateGoals();
        if (homeGoals === awayGoals) {
            return this.play(match);
        }
        else{
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
