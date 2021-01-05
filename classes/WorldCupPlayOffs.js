import League from './League.js'
import { LOCAL_TEAM, AWAY_TEAM } from './League.js';
export const ROUND_OF_16 = 16;
export const QUARTER_FINAL = 8;
export const SEMI_FINAL = 4;
export const FINAL = 2;

export default class FootballWorldCup extends League {
    // TODO: Necesito estos parámetros en el constructor??
    constructor(name, teams=[]) {
        super(name, teams);
        this.name = name;
        this.teams = teams;
    }

    // constructor(teams=[]) {
    //     this.teams = teams;
    // }

    initRound(teams, round){
        // Prepare and show array of games of the current Round
        const currentRound = round === 16 ? 'Rounf of 16' : 
            (round === 8 ? 'Quarter Final' : 
            (round === 4 ?  'Semi Final' : 'Final'))
        const square = [];
        let j = 0;
        for (let i=0; i < round; i=i+2) {
            square.push([teams[i], teams[i+1]]);
            currentRound != 'Final' 
                ? console.log(`${currentRound} - Game ${j+1}: ${square[j][LOCAL_TEAM]} - ${square[j][AWAY_TEAM]}`)
                : console.log(`WORLD CUP FINAL: ${square[j][LOCAL_TEAM]} - ${square[j][AWAY_TEAM]}`);    
            j++;
        }
        return square;
    }

    // playSimpleGame(){
    //     const finalGame = ['Australia','New Zeland'];
    //     console.log(this.play(finalGame));
    // }

    generateGoals() {
        return Math.round(Math.random() * 10);
    }

    play(match) {
        const homeGoals = this.generateGoals();
        const awayGoals = this.generateGoals();
        if (homeGoals === awayGoals) {
            console.log('Draw, it plays again');
            return this.play(match);
        }
        else{
            // console.log(`Resultado del partido: ${match}, homeGoals ${homeGoals}, awayGoals ${awayGoals}`);
            return {
                homeTeam: match[LOCAL_TEAM],
                homeGoals,
                awayTeam: match[AWAY_TEAM],
                awayGoals
            }
        }   
    }

    playRound(round){
        // console.log('WorldCupPlayOffs.playRound : ', round);
        let result;
        return round.map(game => {
            result = this.play(game);
            console.log(`Game ${game} --- Score: ${result.homeGoals} - ${result.awayGoals}`);
            return result.homeGoals > result.awayGoals ? result.homeTeam : result.awayTeam;
        })
    }

}
