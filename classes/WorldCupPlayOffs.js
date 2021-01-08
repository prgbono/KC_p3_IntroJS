import League from './League.js'
import { LOCAL_TEAM, AWAY_TEAM } from './League.js';

// TODO: cñomo queda esto tras el array numOfPlayOffs???
export const ROUND_OF_16 = 16;
export const QUARTER_FINAL = 8;
export const SEMI_FINAL = 4;
export const FINAL = 2;

export default class WorldCupPlayOffs extends League {
    // TODO: Necesito estos parámetros en el constructor??
    // TODO: Incluir el número de fases de playOffs, (Round of 16, Quarter final, semi final...)
    // constructor(name, teams=[], numOfPlayOffs) {
    constructor(name, teams=[]) {
        super(name);
        // this.name = name;
        this.teams = teams;
        // this.numOfPlayOffs = setup(numOfPlayOffs);
        // this.numOfPlayOffs = numOfPlayOffs;         
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
    
    // TODO: Incluir el número de fases de playOffs, (Round of 16, Quarter final, semi final...)
    /* TODO: preparar un array del tipo 
        [{
            name: Round of X,
            #OfTeams: X
        }]
        */
    // setup(numOfPlayOffs) {
    //     const defaultNumOfPlayOffs = {
    //         numOfPlayOffs: 4,
    //     }
    //     this.config = Object.assign(defaultConfig, config)
    // }

    /* Prepare and show array of games of the current round
    Returns am object: 
        {currentRound: currentRound,
        matches: [games_of_the_round]} 
    */
    initRound(teams, round){
        // const currentRound = round === 16 ? 'ROUND OF 16' : 
        //     (round === 8 ? 'QUARTER FINAL' : 
        //     (round === 4 ?  'SEMI FINAL' : 'FINAL'))
        const square = [];
        let j = 0;
        for (let i=0; i < round; i=i+2) {
            square.push([teams[i], teams[i+1]]);
            // currentRound != 'Final' 
            //     ? console.log(`${currentRound} - Game ${j+1}: ${square[j][LOCAL_TEAM]} - ${square[j][AWAY_TEAM]}`)
            //     : console.log(`WORLD CUP FINAL: ${square[j][LOCAL_TEAM]} - ${square[j][AWAY_TEAM]}`);    
            j++;
        }
        // return {currentRound: currentRound,
        //         matches: square};        
        return square;
    }

    generateGoals() {
        return Math.round(Math.random() * 10);
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
        // console.log('round; ', round);
        let result;
        return round.map(game => {
            result = this.play(game);
            console.log(`--- ${game[LOCAL_TEAM]} ${result.homeGoals} - ${result.awayGoals} ${game[AWAY_TEAM]} ---`);
            return result.homeGoals > result.awayGoals ? result.homeTeam : result.awayTeam;
        })
    }

}
