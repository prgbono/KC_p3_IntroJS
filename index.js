// import FootballLeague from './classes/PointsBasedLeague.js'
import PhaseGroup from './classes/PointsBasedLeague.js'

// import { premierLeagueTeams } from './teams.js'
import { groupATeams } from './teams.js';
import { groupBTeams } from './teams.js'
import { groupCTeams } from './teams.js'
import { groupDTeams } from './teams.js'
import { groupETeams } from './teams.js'
import { groupFTeams } from './teams.js'
import { groupGTeams } from './teams.js'
import { groupHTeams } from './teams.js'

const config = { rounds: 1 }

// const premier = new FootballLeague('Premier League', premierLeagueTeams, config)
const phaseGroupA = new PhaseGroup('Group A phase Group', groupATeams, config);
const phaseGroupB = new PhaseGroup('Group B phase Group', groupBTeams, config);
const phaseGroupC = new PhaseGroup('Group C phase Group', groupCTeams, config);
const phaseGroupD = new PhaseGroup('Group D phase Group', groupDTeams, config);
const phaseGroupE = new PhaseGroup('Group E phase Group', groupETeams, config);
const phaseGroupF = new PhaseGroup('Group F phase Group', groupFTeams, config);
const phaseGroupG = new PhaseGroup('Group G phase Group', groupGTeams, config);
const phaseGroupH = new PhaseGroup('Group H phase Group', groupHTeams, config);


// const teamNames = premier.teams.map(team => team.name)
const groupATeamNames = phaseGroupA.teams.map(team => team.name);
const groupBTeamNames = phaseGroupB.teams.map(team => team.name);
const groupCTeamNames = phaseGroupC.teams.map(team => team.name);
const groupDTeamNames = phaseGroupD.teams.map(team => team.name);
const groupETeamNames = phaseGroupE.teams.map(team => team.name);
const groupFTeamNames = phaseGroupF.teams.map(team => team.name);
const groupGTeamNames = phaseGroupG.teams.map(team => team.name);
const groupHTeamNames = phaseGroupH.teams.map(team => team.name);

// groupHTeamNames.forEach(function(equipo) {
//     console.log(equipo)
// })

// premier.scheduleMatchDays()
phaseGroupA.scheduleMatchDays();
phaseGroupB.scheduleMatchDays();
phaseGroupC.scheduleMatchDays();
phaseGroupD.scheduleMatchDays();
phaseGroupE.scheduleMatchDays();
phaseGroupF.scheduleMatchDays();
phaseGroupG.scheduleMatchDays();
phaseGroupH.scheduleMatchDays();

let i = 1
// premier.matchDaySchedule.forEach(matchDay => {
phaseGroupA.matchDaySchedule.forEach(matchDay => {
    console.log(`JORNADA ${i}`)
    matchDay.forEach(match => {
        console.log(match.join(' vs '))
    })
    i++
})

i = 1
// premier.matchDaySchedule.forEach(matchDay => {
phaseGroupB.matchDaySchedule.forEach(matchDay => {
    console.log(`JORNADA ${i}`)
    matchDay.forEach(match => {
        console.log(match.join(' vs '))
    })
    i++
})

i = 1
// premier.matchDaySchedule.forEach(matchDay => {
phaseGroupC.matchDaySchedule.forEach(matchDay => {
    console.log(`JORNADA ${i}`)
    matchDay.forEach(match => {
        console.log(match.join(' vs '))
    })
    i++
})

i = 1
// premier.matchDaySchedule.forEach(matchDay => {
phaseGroupD.matchDaySchedule.forEach(matchDay => {
    console.log(`JORNADA ${i}`)
    matchDay.forEach(match => {
        console.log(match.join(' vs '))
    })
    i++
})

i= 1
// premier.matchDaySchedule.forEach(matchDay => {
phaseGroupE.matchDaySchedule.forEach(matchDay => {
    console.log(`JORNADA ${i}`)
    matchDay.forEach(match => {
        console.log(match.join(' vs '))
    })
    i++
})

i = 1
// premier.matchDaySchedule.forEach(matchDay => {
phaseGroupF.matchDaySchedule.forEach(matchDay => {
    console.log(`JORNADA ${i}`)
    matchDay.forEach(match => {
        console.log(match.join(' vs '))
    })
    i++
})

i = 1
// premier.matchDaySchedule.forEach(matchDay => {
phaseGroupG.matchDaySchedule.forEach(matchDay => {
    console.log(`JORNADA ${i}`)
    matchDay.forEach(match => {
        console.log(match.join(' vs '))
    })
    i++
})

i = 1
// premier.matchDaySchedule.forEach(matchDay => {
phaseGroupH.matchDaySchedule.forEach(matchDay => {
    console.log(`JORNADA ${i}`)
    matchDay.forEach(match => {
        console.log(match.join(' vs '))
    })
    i++
})
// TODO: Meter los phaseGroupX en un array para iterar sobre ellos y quitarte todas estas repeticiones de 8 veces cada una