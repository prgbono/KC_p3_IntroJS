import League from './League.js'
import { LOCAL_TEAM, AWAY_TEAM } from './League.js';


export const ROUND_OF_16 = 16;
export const QUARTER_FINAL = 8;
export const SEMI_FINAL = 4;
export const FINAL = 2;


// export default class WorldCupPlayOffs{
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

    // playRound(){
    //     console.log('WorldCupPlayOffs.playRound this.teams: ', this.teams);

    // }

    // playRoundOf16(){
    //     console.log('WorldCupPlayOffs.playRoundOf16 this.teams: ', this.teams);
    // }

    playSimpleGame(){
        const finalGame = ['Australia','New Zeland'];
        console.log(this.play(finalGame));
        // console.log('res: ',res);
    }

    play(match) {
        console.log('Jugar un partido');
        // let homeGoals, awayGoals;
        const homeGoals = this.generateGoals();
        const awayGoals = this.generateGoals();
        // if (homeGoals === awayGoals) this.play(match) 
        if (homeGoals === awayGoals) {
            console.log('Empate, vuelvo a jugar');
            this.play(match);
        }
        else{
            console.log(`match returned: ${match}, homeGoals ${homeGoals}, awayGoals ${awayGoals}`);
            return {
                homeTeam: match[LOCAL_TEAM],
                homeGoals,
                awayTeam: match[AWAY_TEAM],
                awayGoals
            }
        }   

        // if (homeGoals != awayGoals) {
        //     return {
        //         homeTeam: match[LOCAL_TEAM],
        //         homeGoals,
        //         awayTeam: match[AWAY_TEAM],
        //         awayGoals
        //     }
        // }
        // else{
        //     console.log('Empate, vuelvo a entrar en play');
        //     this.play(match);
        //     console.log(`match returned: ${match}, homeGoals ${homeGoals} awayGoals ${awayGoals}`);
        // }   
    }

    generateGoals() {
        // return Math.round(Math.random() * 10)
        return Math.round(Math.random() * 1)
    }

    doDraw(teams, round){
        const currentRound = round === 16 ? 'Rounf of 16' : 
            (round === 8 ? 'Quarter Final' : 
            (round === 4 ?  'Semi Final' : 'Final'))
        const square = [];
        let j = 0;
        for (let i=0; i < round; i=i+2) {
            // FIXME: Usar las const LOCAL_TEAM y AWAY_TEAM aquí para ganar legibilidad
            square.push([teams[i], teams[i+1]]);
            currentRound != 'Final' 
                ? console.log(`${currentRound} - Game ${j+1}: ${square[j][0]} - ${square[j][1]}`)
                : console.log(`WORLD CUP FINAL: ${square[j][0]} - ${square[j][1]}`);    
            j++;
        }
    }

    /*
    // Método que dado un array con dos eltos devuelva 1. Con MAP
    Pensar en una clase que juegue partidos.
    Por ejemplo que tenga un método que juegue una serie de partidos y te devuelva los ganadores de ese partidos. 
    Pasar por este método cada ronda de clasificación.

    jugarRonda(arrayDePartidos)
    for (let game in arrayDePartidos){
        play(game);
        return (winners.push(equipoGanador)) //winners es el array de equipos ganadores
    }
    */

}
